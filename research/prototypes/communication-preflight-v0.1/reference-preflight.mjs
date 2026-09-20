export function derivePreflight(scenario) {
  const requiredMissing = scenario.fields.filter(
    f => f.state === "unknown" && f.materiality === "RequiredNow"
  );

  const optionalUnknown = scenario.fields.filter(
    f => f.state === "unknown" && f.materiality === "UsefulButOptional"
  );

  const known = scenario.fields.filter(f => f.state === "known");
  const notApplicable = scenario.fields.filter(f => f.state === "not-applicable");

  const groups = new Map();
  for (const field of requiredMissing) {
    const key = field.group || "ungrouped";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(field.id);
  }

  const clarificationGroups = [...groups.entries()]
    .map(([group, fields]) => ({ group, fields }))
    .sort((a, b) => a.group.localeCompare(b.group));

  let activationDecision;

  if (scenario.authorityPermissionBlocked) {
    activationDecision = "AbstainForAuthorityOrPermission";
  } else if (requiredMissing.some(f => !f.safeDefault)) {
    activationDecision = "ClarificationRequired";
  } else if (requiredMissing.length > 0) {
    activationDecision = "PreflightNeeded";
  } else if (scenario.consequence === "high") {
    activationDecision = "HighConsequenceVerificationRequired";
  } else {
    activationDecision = "DraftNormally";
  }

  return {
    scenario: scenario.id,
    activationDecision,
    knownFields: known.map(f => ({ id: f.id, provenance: f.provenance })),
    missingMaterialFields: requiredMissing.map(f => f.id),
    optionalUnknownFields: optionalUnknown.map(f => f.id),
    notApplicableFields: notApplicable.map(f => f.id),
    clarificationGroups,
    boundedProgressPermitted:
      activationDecision === "PreflightNeeded" ||
      activationDecision === "DraftNormally" ||
      activationDecision === "HighConsequenceVerificationRequired",
    requiresVerification:
      scenario.consequence === "high" ||
      activationDecision === "HighConsequenceVerificationRequired",
    evidenceRule:
      "Unknown fields remain unknown. This engine does not infer missing values."
  };
}
