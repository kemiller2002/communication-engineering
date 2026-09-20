namespace CommunicationEngineering.Preflight

module Preflight =

    let private duplicateIds (fields: CommunicationField list) =
        fields
        |> List.groupBy _.Id
        |> List.choose (fun (id, values) ->
            if List.length values > 1 then Some id else None)
        |> List.sort

    let private provenanceErrors (fields: CommunicationField list) =
        fields
        |> List.choose (fun field ->
            match field.State, field.Provenance with
            | Known, UnknownProvenance ->
                Some (KnownFieldMissingProvenance field.Id)
            | _ ->
                None)

    let validate (input: PreflightInput) =
        let duplicates =
            duplicateIds input.Fields
            |> List.map DuplicateFieldId

        let provenance =
            provenanceErrors input.Fields

        duplicates @ provenance

    let private clarificationGroups (missing: CommunicationField list) =
        missing
        |> List.groupBy (fun field ->
            field.ClarificationGroup
            |> Option.defaultValue "ungrouped")
        |> List.sortBy fst
        |> List.map (fun (name, fields) ->
            { Name = name
              Fields =
                fields
                |> List.map _.Id
                |> List.sort })

    let derive (input: PreflightInput) : Result<PreflightResult, PreflightError list> =
        match validate input with
        | errors when not errors.IsEmpty ->
            Error errors
        | _ ->
            let known =
                input.Fields
                |> List.filter (fun field -> field.State = Known)

            let missingMaterial =
                input.Fields
                |> List.filter (fun field ->
                    field.State = Unknown
                    && field.Materiality = RequiredNow)

            let optionalUnknown =
                input.Fields
                |> List.filter (fun field ->
                    field.State = Unknown
                    && field.Materiality = UsefulButOptional)

            let notApplicable =
                input.Fields
                |> List.filter (fun field -> field.State = NotApplicable)

            let decision =
                if input.AuthorityOrPermissionBlocked then
                    AbstainForAuthorityOrPermission
                elif
                    missingMaterial
                    |> List.exists (fun field -> not field.SafeDefaultAvailable)
                then
                    ClarificationRequired
                elif not missingMaterial.IsEmpty then
                    PreflightNeeded
                elif input.Consequence = High then
                    HighConsequenceVerificationRequired
                else
                    DraftNormally

            let boundedProgress =
                match decision with
                | DraftNormally
                | PreflightNeeded
                | HighConsequenceVerificationRequired ->
                    true
                | ClarificationRequired
                | AbstainForAuthorityOrPermission ->
                    false

            Ok
                { ActivationDecision = decision
                  KnownFields = known
                  MissingMaterialFields = missingMaterial
                  OptionalUnknownFields = optionalUnknown
                  NotApplicableFields = notApplicable
                  ClarificationGroups = clarificationGroups missingMaterial
                  BoundedProgressPermitted = boundedProgress
                  RequiresVerification =
                    input.Consequence = High
                    || decision = HighConsequenceVerificationRequired }
