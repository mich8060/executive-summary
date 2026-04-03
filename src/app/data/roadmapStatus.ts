export type RoadmapRiskDetail = {
  issues: string;
  currentlyDoing: string;
  neededToUnblock: string;
};

export type RoadmapStatusRow = {
  initiative: string;
  status: string;
  statusColor: string;
  outcome: string;
  milestone: string;
  statusTextClass?: string;
  /** Present for At Risk / Blocked rows — drives Key Risks section */
  riskDetail?: RoadmapRiskDetail;
};

export const roadmapStatusRows: RoadmapStatusRow[] = [
  {
    initiative: "React Production Baseline",
    status: "In Progress",
    statusColor: "#7FBD4D",
    outcome: "Teams can build directly from DS React components",
    milestone: "Component library expansion",
  },
  {
    initiative: "Documents MVT Pilot",
    status: "In Progress",
    statusColor: "#7FBD4D",
    outcome: "Validated DS → React delivery model",
    milestone: "React component validation",
  },
  {
    initiative: "Governance Model",
    status: "At Risk",
    statusColor: "#FACC15",
    statusTextClass: "text-gray-900",
    outcome: "Clear ownership, standards, and scaling model",
    milestone: "Resourcing decision needed",
    riskDetail: {
      issues:
        "Ownership, escalation, and contribution rules are not yet anchored with executive sponsors. One person still spans design-system design and engineering, so adoption work competes with foundation delivery and will not scale past current pilot volume. We are still trying to find partners in Product and Engineering who can act as liaisons—carrying day-to-day alignment on what ships, when exceptions apply, and how partner requests flow into the design system team.",
      currentlyDoing:
        "Drafting governance guardrails, supporting the Documents MVT pilot, and sequencing RFCs and contribution paths. Surfacing capacity data to leadership so tradeoffs (depth vs. breadth) are explicit, and socializing the need for named Product and Engineering liaison roles.",
      neededToUnblock:
        "Product:\n• Name a product liaison to co-own intake and prioritization for design-system work against roadmap tradeoffs.\n• Represent partner teams in governance forums and help socialize standards and adoption expectations.\n\nEngineering:\n• Name an engineering liaison to co-sign technical standards, review contributions, and answer implementation questions quickly.\n• Align sprint capacity for shared fixes and migrations that depend on the React baseline.\n\nBeyond liaisons: a leadership decision on dedicated system ownership and FTE allocation, plus agreement on operating cadence (review board, intake, exceptions). Without that, the Roadmap Status milestone “Resourcing decision needed” cannot close.",
    },
  },
  {
    initiative: "Locumsmart Deployment",
    status: "Pending",
    statusColor: "#D1D5DB",
    statusTextClass: "text-gray-900",
    outcome: "First full product running on DS patterns",
    milestone: "Tier rollout",
  },
  {
    initiative: "Usage Standardization",
    status: "In Progress",
    statusColor: "#7FBD4D",
    outcome: "Consistent system adoption across teams",
    milestone: "Adoption guidelines",
  },
];

export function roadmapRowsWithRiskDetail(): RoadmapStatusRow[] {
  return roadmapStatusRows.filter(
    (r) =>
      r.riskDetail &&
      (r.status === "At Risk" || r.status === "Blocked"),
  );
}
