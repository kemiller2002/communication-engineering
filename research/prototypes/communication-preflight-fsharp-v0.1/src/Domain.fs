namespace CommunicationEngineering.Preflight

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
      NotApplicableFields: CommunicationField list
      ClarificationGroups: ClarificationGroup list
      BoundedProgressPermitted: bool
      RequiresVerification: bool }

type PreflightError =
    | DuplicateFieldId of string
    | KnownFieldMissingProvenance of string
