import type { RoadmapStatusRow } from "../data/roadmapStatus";
import { roadmapRowsWithRiskDetail } from "../data/roadmapStatus";

type Props = {
  /** Defaults to rows that have riskDetail and At Risk / Blocked status */
  rows?: RoadmapStatusRow[];
  className?: string;
};

function LocumsmartPendingDetail() {
  return (
    <div
      className="rounded-lg border-l-[4px] border-[#9CA3AF] bg-[#D1D5DB]/25 py-3 pl-4 pr-3 sm:rounded-[10px] sm:py-4 sm:pl-5 sm:pr-4 md:py-4 md:pl-5 md:pr-4"
      data-pending-detail="locumsmart"
    >
      <div className="mb-2 flex flex-wrap items-baseline gap-2 gap-y-1 sm:mb-3 sm:gap-3 md:mb-[12px] md:gap-[12px]">
        <h3 className="text-lg font-bold text-black sm:text-xl md:text-[20px]">
          Locumsmart Deployment
        </h3>
        <span className="inline-block shrink-0 whitespace-nowrap rounded-full bg-[#D1D5DB] px-2 py-0.5 text-[11px] font-semibold text-gray-900 sm:px-[10px] sm:py-[2px] sm:text-[12px]">
          Pending
        </span>
      </div>
      <p className="text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed md:text-[16px] md:leading-[26px]">
      We are working with Matt Patterson and Arpi Khanpapyan to prioritize the Locumsmart refactoring. Full deployment on design-system patterns stays pending until that work is sequenced alongside other product commitments. Tate met with Matt Patterson on 04/23 to kick-off the discussion. Deeper conversations about DS integration will occur first week in May. 
      </p>
    </div>
  );
}

export function RoadmapLinkedRisks({ rows, className = "" }: Props) {
  const riskRows = rows ?? roadmapRowsWithRiskDetail();
  const hasRiskCallouts = riskRows.length > 0;

  if (!hasRiskCallouts) {
    return (
      <div className={`print:break-inside-avoid ${className}`}>
        <div>
          <div className="mb-2 text-lg font-bold leading-snug tracking-normal text-[#7FBD4D] sm:mb-3 sm:text-xl md:mb-[12px] md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Details
          </div>
          <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-[15px] sm:leading-normal md:mb-6 md:leading-[24px]">
            Context for{" "}
            <span className="font-semibold text-gray-800">Roadmap Status</span>{" "}
            items that need more than the table shows.
          </p>
          <LocumsmartPendingDetail />
        </div>
      </div>
    );
  }

  return (
    <div className={`print:break-inside-avoid ${className}`}>
      <div>
        <div className="mb-2 text-lg font-bold leading-snug tracking-normal text-[#7FBD4D] sm:mb-3 sm:text-xl md:mb-[12px] md:text-2xl lg:text-[24px] lg:leading-[32px]">
          Details
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-[15px] sm:leading-normal md:mb-6 md:leading-[24px]">
          Directly tied to{" "}
          <span className="font-semibold text-gray-800">Roadmap Status</span>{" "}
          items marked{" "}
          <span className="font-semibold text-gray-900">At Risk</span> (yellow),{" "}
          <span className="font-semibold text-red-700">Blocked</span> (red), or{" "}
          <span className="font-semibold text-gray-800">Pending</span> (gray)
          below.
        </p>

        <div className="space-y-5 sm:space-y-6 md:space-y-[28px]">
          {riskRows.map((row) => {
            const isBlocked = row.status === "Blocked";
            const accent = isBlocked
              ? "border-red-500 bg-red-50/60"
              : "border-[#EAB308] bg-[#FACC15]/15";

            return (
              <div
                key={row.initiative}
                className={`rounded-lg border-l-[4px] py-3 pl-4 pr-3 sm:rounded-[10px] sm:py-4 sm:pl-5 sm:pr-4 md:py-4 md:pl-5 md:pr-4 ${accent}`}
              >
                <div className="mb-3 flex flex-wrap items-baseline gap-2 gap-y-1 sm:mb-3.5 sm:gap-3 md:mb-[14px] md:gap-[12px]">
                  <h3 className="text-lg font-bold text-black sm:text-xl md:text-[20px]">
                    {row.initiative}
                  </h3>
                  <span
                    className={`inline-block shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold sm:px-[10px] sm:py-[2px] sm:text-[12px] ${
                      row.statusTextClass ?? "text-white"
                    }`}
                    style={{ backgroundColor: row.statusColor }}
                  >
                    {row.status}
                  </span>
                </div>

                {row.riskDetail ? (
                  <dl className="space-y-3 text-sm leading-relaxed text-gray-700 sm:space-y-4 sm:text-base sm:leading-relaxed md:space-y-[16px] md:text-[16px] md:leading-[26px]">
                    <div>Building the Design System has three major phases: building the foundation, building the organization around it, and maintenance and scaling. We're at the point where the second phase can no longer wait — the decisions made now about stewardship, partnership, and process will determine how far and how fast the system can scale</div>
                    <div>
                      <dt className="mb-1 font-bold text-gray-900 sm:mb-1.5 md:mb-[4px]">
                        What are the issues?
                      </dt>
                      <dd className="whitespace-pre-line">
                        <p className="mb-3">The design system has no named partners in Product or Engineering. Without them, every adoption conversation, exception request, and contribution goes through one person, which caps how fast the system can scale past the Documents pilot.</p>
                        <p className="mb-3">Capacity is also split. One person currently spans both design-system design and engineering work, which forces a weekly tradeoff between building the foundation and supporting teams trying to adopt it. Neither side gets what it needs.</p>
                        <p>Contribution, intake, and exception-handling paths are drafted but not yet operating. Until they are, teams don’t know how to request components, when custom work is acceptable, or how their contributions get reviewed. That ambiguity slows adoption and pushes squads back toward building their own one-off components.</p>
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-bold text-gray-900 sm:mb-1.5 md:mb-[4px]">
                        What is currently being done?
                      </dt>
                      <dd className="whitespace-pre-line">
                        <p className="mb-3">Building the React foundation and supporting the Documents MVT pilot as the first production adoption case.</p>
                        <p className="mb-3">Drafting the intake, review, and exception paths so the system can operate as shared infrastructure rather than a request queue.</p>
                        <p>Surfacing capacity data to leadership so the depth-versus-breadth tradeoff is explicit, and making the case for named Product and Engineering liaisons</p>
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-bold text-gray-900 sm:mb-1.5 md:mb-[4px]">
                        What is needed to unblock?
                      </dt>
                      <dd className="whitespace-pre-line">
                        <p className="italic">To enable the below, leadership needs to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '32px', marginBottom: 16, display:'flex', flexDirection:'column', gap:8 }}>
                            <li>Name a Product liaison and an Engineering liaison to co-own intake, prioritization, and technical review with the design system team.</li>
                            <li>Make a resourcing decision on dedicated system ownership and FTE allocation.</li>
                        </ul>
                        <p className="italic">From the Product Partner (some examples):</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '32px', marginBottom: 16, display:'flex', flexDirection:'column', gap:8 }}>
                            <li>Help ensure design system components and adoption work are included in upcoming product roadmaps. Surface the scoped component work during planning conversations, so it gets sequenced alongside other priorities rather than continually deferred.</li>
                            <li>Flag component needs early in feature scoping. When a squad is planning work that will require UI patterns we don’t have, loop in the design system team before decisions are made to build custom.</li>
                            <li>Serve as the intake point for partner squads. Route adoption questions, exception requests, and new component requests through a single path so the design system team isn’t chasing alignment across teams.</li>
                        </ul>
                        <p className="italic">From the Product Partner (some examples):</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '32px', marginBottom: 16, display:'flex', flexDirection:'column', gap:8 }}>
                            <li>Co-sign technical standards and review contributions. Give the design system team a partner on the engineering side who can validate React patterns, API decisions, and release practices before they ship.</li>
                            <li>Surface duplication across squads. When multiple teams are rebuilding the same component, flag it so we can prioritize generalization instead of letting drift continue.</li>
                            <li>Help squads use the system in new builds. Answer implementation questions quickly so teams aren’t blocked, and coach squads toward system-first decisions in day-to-day build conversations.</li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                ) : null}
              </div>
            );
          })}
          <LocumsmartPendingDetail />
        </div>
      </div>
    </div>
  );
}
