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
        We are working with cross-functional (XFN) partners to prioritize the
        Locumsmart refactoring. Full deployment on design-system patterns stays
        pending until that work is sequenced alongside other product
        commitments.
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
                    <div>
                      <dt className="mb-1 font-bold text-gray-900 sm:mb-1.5 md:mb-[4px]">
                        What are the issues?
                      </dt>
                      <dd className="whitespace-pre-line">
                        {row.riskDetail.issues}
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-bold text-gray-900 sm:mb-1.5 md:mb-[4px]">
                        What is currently being done?
                      </dt>
                      <dd className="whitespace-pre-line">
                        {row.riskDetail.currentlyDoing}
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1 font-bold text-gray-900 sm:mb-1.5 md:mb-[4px]">
                        What is needed to unblock?
                      </dt>
                      <dd className="whitespace-pre-line">
                        {row.riskDetail.neededToUnblock}
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
