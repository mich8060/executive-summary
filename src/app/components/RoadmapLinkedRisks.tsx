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
      className="rounded-[10px] border-l-[4px] border-[#9CA3AF] bg-[#D1D5DB]/25 pl-[20px] pr-[16px] py-[16px]"
      data-pending-detail="locumsmart"
    >
      <div className="mb-[12px] flex flex-wrap items-baseline gap-[12px] gap-y-[6px]">
        <h3 className="text-[20px] font-bold text-black">
          Locumsmart Deployment
        </h3>
        <span className="inline-block shrink-0 whitespace-nowrap rounded-full bg-[#D1D5DB] px-[10px] py-[2px] text-[12px] font-semibold text-gray-900">
          Pending
        </span>
      </div>
      <p className="text-[16px] leading-[26px] text-gray-700">
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
          <div className="mb-[12px] text-[24px] font-bold leading-[32px] tracking-normal text-[#7FBD4D]">
            Details
          </div>
          <p className="mb-[24px] text-[15px] leading-[24px] text-gray-600">
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
        <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#7FBD4D] mb-[12px]">
          Details
        </div>
        <p className="text-[15px] leading-[24px] text-gray-600 mb-[24px]">
          Directly tied to{" "}
          <span className="font-semibold text-gray-800">Roadmap Status</span>{" "}
          items marked{" "}
          <span className="font-semibold text-gray-900">At Risk</span> (yellow),{" "}
          <span className="font-semibold text-red-700">Blocked</span> (red), or{" "}
          <span className="font-semibold text-gray-800">Pending</span> (gray)
          below.
        </p>

        <div className="space-y-[28px]">
          {riskRows.map((row) => {
            const isBlocked = row.status === "Blocked";
            const accent = isBlocked
              ? "border-red-500 bg-red-50/60"
              : "border-[#EAB308] bg-[#FACC15]/15";

            return (
              <div
                key={row.initiative}
                className={`rounded-[10px] border-l-[4px] pl-[20px] pr-[16px] py-[16px] ${accent}`}
              >
                <div className="flex flex-wrap items-baseline gap-[12px] gap-y-[6px] mb-[14px]">
                  <h3 className="text-[20px] font-bold text-black">
                    {row.initiative}
                  </h3>
                  <span
                    className={`inline-block shrink-0 whitespace-nowrap rounded-full px-[10px] py-[2px] text-[12px] font-semibold ${
                      row.statusTextClass ?? "text-white"
                    }`}
                    style={{ backgroundColor: row.statusColor }}
                  >
                    {row.status}
                  </span>
                </div>

                {row.riskDetail ? (
                  <dl className="space-y-[16px] text-[16px] leading-[26px] text-gray-700">
                    <div>
                      <dt className="font-bold text-gray-900 mb-[4px]">
                        What are the issues?
                      </dt>
                      <dd className="whitespace-pre-line">
                        {row.riskDetail.issues}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900 mb-[4px]">
                        What is currently being done?
                      </dt>
                      <dd className="whitespace-pre-line">
                        {row.riskDetail.currentlyDoing}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900 mb-[4px]">
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
