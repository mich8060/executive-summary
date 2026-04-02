import type { RoadmapStatusRow } from "../data/roadmapStatus";
import { roadmapRowsWithRiskDetail } from "../data/roadmapStatus";

type Props = {
  /** Defaults to rows that have riskDetail and At Risk / Blocked status */
  rows?: RoadmapStatusRow[];
  className?: string;
};

export function RoadmapLinkedRisks({ rows, className = "" }: Props) {
  const riskRows = rows ?? roadmapRowsWithRiskDetail();

  if (riskRows.length === 0) {
    return null;
  }

  return (
    <div className={`print:break-inside-avoid ${className}`}>
      <div className="bg-[#FE8C31]/10 border-l-[6px] border-[#FE8C31] rounded-[12px] p-[32px]">
        <div className="text-[14px] font-bold tracking-[0.15em] text-[#FE8C31] mb-[8px]">
          KEY RISKS
        </div>
        <p className="text-[15px] leading-[24px] text-gray-600 mb-[24px]">
          Directly tied to{" "}
          <span className="font-semibold text-gray-800">Roadmap Status</span>{" "}
          items marked{" "}
          <span className="font-semibold text-gray-900">At Risk</span> (yellow)
          or <span className="font-semibold text-red-700">Blocked</span>{" "}
          (red).
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
                    className={`inline-block px-[10px] py-[2px] rounded-full text-[12px] font-semibold shrink-0 ${
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
                      <dd>{row.riskDetail.issues}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900 mb-[4px]">
                        What is currently being done?
                      </dt>
                      <dd>{row.riskDetail.currentlyDoing}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900 mb-[4px]">
                        What is needed to unblock?
                      </dt>
                      <dd>{row.riskDetail.neededToUnblock}</dd>
                    </div>
                  </dl>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
