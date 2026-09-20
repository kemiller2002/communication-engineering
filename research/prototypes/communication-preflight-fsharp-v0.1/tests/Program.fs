open System
open CommunicationEngineering.Preflight
open CommunicationEngineering.Preflight.Preflight

let fail message =
    eprintfn "FAIL: %s" message
    Environment.ExitCode <- 1

let expectEqual name expected actual =
    if actual <> expected then
        fail (sprintf "%s expected %A but got %A" name expected actual)

let expectOk name result =
    match result with
    | Ok value -> value
    | Error errors ->
        fail (sprintf "%s expected Ok but got %A" name errors)
        Unchecked.defaultof<_>

let field id state provenance materiality group safeDefault =
    { Id = id
      State = state
      Provenance = provenance
      Materiality = materiality
      ClarificationGroup = group
      SafeDefaultAvailable = safeDefault }

let exp01 =
    { Fields =
        [ field "Purpose" Known ExplicitRequest RequiredNow (Some "purpose-action") false
          field "AudienceRole" Known ExplicitRequest RequiredNow (Some "audience") false
          field "AudienceTask" Known ExplicitRequest RequiredNow (Some "audience") false
          field "DesiredImmediateAction" Known AuthoritativeSource RequiredNow (Some "purpose-action") false
          field "ProofObligation" Known AuthoritativeSource RequiredNow (Some "proof") false
          field "MaterialUncertainty" Known AuthoritativeSource RequiredNow (Some "proof") false
          field "MediumOrUseMode" Known ExplicitRequest RequiredNow (Some "delivery") false
          field "AccessibilityConstraints" Known ExplicitRequest RequiredNow (Some "delivery") false ]
      Consequence = High
      AuthorityOrPermissionBlocked = false }

let exp04 =
    { Fields =
        [ field "Purpose" Unknown UnknownProvenance RequiredNow (Some "purpose-action") true
          field "AudienceSegment" Unknown UnknownProvenance RequiredNow (Some "audience") true
          field "AudiencePriorState" Unknown UnknownProvenance RequiredNow (Some "audience") true
          field "DecisionAuthority" Unknown UnknownProvenance RequiredNow (Some "authority") true
          field "DesiredImmediateAction" Unknown UnknownProvenance RequiredNow (Some "purpose-action") true
          field "BudgetDecisionExpectation" Unknown UnknownProvenance RequiredNow (Some "purpose-action") true
          field "MigrationStrategyAuthority" Unknown UnknownProvenance RequiredNow (Some "authority") true
          field "MediumOrUseMode" Unknown UnknownProvenance RequiredNow (Some "delivery") true
          field "SupportEndDate" Known AuthoritativeSource RequiredNow (Some "evidence") false
          field "MigrationFacts" Known AuthoritativeSource RequiredNow (Some "evidence") false ]
      Consequence = Medium
      AuthorityOrPermissionBlocked = false }

let exp05 =
    { Fields =
        [ field "AudienceSegment" Unknown UnknownProvenance RequiredNow (Some "audience-personalization") true
          field "AudienceRole" Unknown UnknownProvenance RequiredNow (Some "audience-personalization") true
          field "PersonalizationAuthority" Unknown UnknownProvenance RequiredNow (Some "audience-personalization") true
          field "MediumOrUseMode" Unknown UnknownProvenance RequiredNow (Some "channel-sender") true
          field "SenderIdentity" Unknown UnknownProvenance RequiredNow (Some "channel-sender") true
          field "SupportPath" Unknown UnknownProvenance RequiredNow (Some "support") true
          field "PriorCommunicationState" Unknown UnknownProvenance RequiredNow (Some "cadence-accessibility") true
          field "AccessibilityConstraints" Unknown UnknownProvenance RequiredNow (Some "cadence-accessibility") true
          field "RetirementDate" Known AuthoritativeSource RequiredNow (Some "evidence") false
          field "MigrationGuide" Known AuthoritativeSource RequiredNow (Some "evidence") false ]
      Consequence = Medium
      AuthorityOrPermissionBlocked = false }

let clarificationRequired =
    { Fields =
        [ field "Purpose" Known ExplicitRequest RequiredNow (Some "purpose-action") false
          field "DecisionAuthority" Unknown UnknownProvenance RequiredNow (Some "authority") false
          field "DesiredImmediateAction" Known ExplicitRequest RequiredNow (Some "purpose-action") false ]
      Consequence = Medium
      AuthorityOrPermissionBlocked = false }

let blocked =
    { Fields =
        [ field "Purpose" Known ExplicitRequest RequiredNow (Some "purpose-action") false
          field "CulturalPermission" Unknown UnknownProvenance RequiredNow (Some "authority") false ]
      Consequence = Medium
      AuthorityOrPermissionBlocked = true }

let optionalOnly =
    { Fields =
        [ field "Purpose" Known ExplicitRequest RequiredNow (Some "purpose-action") false
          field "AudiencePriorState" Unknown UnknownProvenance UsefulButOptional (Some "audience") false ]
      Consequence = Low
      AuthorityOrPermissionBlocked = false }

let exp01Result = derive exp01 |> expectOk "EXP01"
expectEqual "EXP01 decision" HighConsequenceVerificationRequired exp01Result.ActivationDecision
expectEqual "EXP01 missing count" 0 exp01Result.MissingMaterialFields.Length
expectEqual "EXP01 verification" true exp01Result.RequiresVerification
expectEqual "EXP01 bounded" true exp01Result.BoundedProgressPermitted

let exp04Result = derive exp04 |> expectOk "EXP04"
expectEqual "EXP04 decision" PreflightNeeded exp04Result.ActivationDecision
expectEqual "EXP04 missing count" 8 exp04Result.MissingMaterialFields.Length
expectEqual "EXP04 group count" 4 exp04Result.ClarificationGroups.Length
expectEqual "EXP04 bounded" true exp04Result.BoundedProgressPermitted

let exp05Result = derive exp05 |> expectOk "EXP05"
expectEqual "EXP05 decision" PreflightNeeded exp05Result.ActivationDecision
expectEqual "EXP05 missing count" 8 exp05Result.MissingMaterialFields.Length
expectEqual "EXP05 group count" 4 exp05Result.ClarificationGroups.Length

let clarificationResult =
    derive clarificationRequired
    |> expectOk "clarification-required"

expectEqual "clarification decision" ClarificationRequired clarificationResult.ActivationDecision
expectEqual "clarification bounded" false clarificationResult.BoundedProgressPermitted

let blockedResult = derive blocked |> expectOk "blocked"
expectEqual "blocked decision" AbstainForAuthorityOrPermission blockedResult.ActivationDecision
expectEqual "blocked bounded" false blockedResult.BoundedProgressPermitted

let optionalResult = derive optionalOnly |> expectOk "optional-only"
expectEqual "optional decision" DraftNormally optionalResult.ActivationDecision
expectEqual "optional unknown count" 1 optionalResult.OptionalUnknownFields.Length
expectEqual "optional material missing" 0 optionalResult.MissingMaterialFields.Length

let duplicateInput =
    { Fields =
        [ field "Purpose" Known ExplicitRequest RequiredNow None false
          field "Purpose" Unknown UnknownProvenance RequiredNow None true ]
      Consequence = Low
      AuthorityOrPermissionBlocked = false }

match derive duplicateInput with
| Error errors ->
    expectEqual "duplicate error" [ DuplicateFieldId "Purpose" ] errors
| Ok _ ->
    fail "duplicate field input should fail validation"

let missingProvenance =
    { Fields =
        [ field "Purpose" Known UnknownProvenance RequiredNow None false ]
      Consequence = Low
      AuthorityOrPermissionBlocked = false }

match derive missingProvenance with
| Error errors ->
    expectEqual "known provenance error" [ KnownFieldMissingProvenance "Purpose" ] errors
| Ok _ ->
    fail "known field without provenance should fail validation"

if Environment.ExitCode = 0 then
    printfn "Communication Preflight F# prototype passed 8 scenarios."
