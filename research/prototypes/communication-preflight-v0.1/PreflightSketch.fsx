module CommunicationPreflightPrototype

type FieldState =
    | Known
    | Unknown
    | NotApplicable

type Provenance =
    | ExplicitRequest
    | AuthoritativeSource
    | SafeInference
    | UserConfirmed
    | UnknownProvenance

type Materiality =
    | RequiredNow
    | UsefulButOptional
    | NotMaterialToCurrentCommunication

type CommunicationField =
    { Id: string
      State: FieldState
      Provenance: Provenance
      Materiality: Materiality
      ClarificationGroup: string option
      SafeDefaultAvailable: bool }

type Consequence =
    | Low
    | Medium
    | High

type ActivationDecision =
    | DraftNormally
    | PreflightNeeded
    | ClarificationRequired
    | HighConsequenceVerificationRequired
    | AbstainForAuthorityOrPermission

type PreflightInput =
    { Fields: CommunicationField list
      Consequence: Consequence
      AuthorityOrPermissionBlocked: bool }

type ClarificationGroup =
    { Name: string
      Fields: string list }

type PreflightResult =
    { ActivationDecision: ActivationDecision
      KnownFields: CommunicationField list
      MissingMaterialFields: CommunicationField list
      OptionalUnknownFields: CommunicationField list
      ClarificationGroups: ClarificationGroup list
      BoundedProgressPermitted: bool
      RequiresVerification: bool }

// Boundary:
// Natural-language interpretation is not implemented here.
// A human/model performs Decide/Deliberate to classify field values/materiality.
// Once that state exists, derive is intended to be pure Compute.

let derive (input: PreflightInput) =
    let missing =
        input.Fields
        |> List.filter (fun f -> f.State = Unknown && f.Materiality = RequiredNow)

    let optional =
        input.Fields
        |> List.filter (fun f -> f.State = Unknown && f.Materiality = UsefulButOptional)

    let known =
        input.Fields
        |> List.filter (fun f -> f.State = Known)

    let groups =
        missing
        |> List.groupBy (fun f -> defaultArg f.ClarificationGroup "ungrouped")
        |> List.map (fun (name, fields) ->
            { Name = name
              Fields = fields |> List.map _.Id })

    let decision =
        if input.AuthorityOrPermissionBlocked then
            AbstainForAuthorityOrPermission
        elif missing |> List.exists (fun f -> not f.SafeDefaultAvailable) then
            ClarificationRequired
        elif not missing.IsEmpty then
            PreflightNeeded
        elif input.Consequence = High then
            HighConsequenceVerificationRequired
        else
            DraftNormally

    { ActivationDecision = decision
      KnownFields = known
      MissingMaterialFields = missing
      OptionalUnknownFields = optional
      ClarificationGroups = groups
      BoundedProgressPermitted =
        match decision with
        | DraftNormally
        | PreflightNeeded
        | HighConsequenceVerificationRequired -> true
        | ClarificationRequired
        | AbstainForAuthorityOrPermission -> false
      RequiresVerification =
        input.Consequence = High
        || decision = HighConsequenceVerificationRequired }
