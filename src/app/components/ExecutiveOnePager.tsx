import { roadmapStatusRows } from "../data/roadmapStatus";
import { RoadmapLinkedRisks } from "./RoadmapLinkedRisks";

export default function ExecutiveOnePager() {
  const roadmapRows = roadmapStatusRows;

  return (
    <div className="relative w-full min-h-screen bg-white overflow-auto">
      <div className="max-w-[1400px] mx-auto px-[110px] py-[80px]">
        {/* Header */}
        <div className="mb-[48px] print:break-inside-avoid text-[24px]">
          <h1 className="text-[48px] font-bold leading-[48px] text-black mb-1">
            Design System Update
          </h1>
          <div className="flex gap-[6px] leading-[29px] mb-[24px] text-gray-500">
            <div>April 2026</div>
            <div>&mdash;</div>
            <div>Michael Stevens, Design System Manager</div>
          </div>
        </div>

        {/* Headline */}
        <div className="border-l-[4px] border-[#1BA5DE] bg-gray-50 rounded-r-[16px] p-[20px] mb-[48px] print:break-inside-avoid">
          <p className="text-[24px] leading-[34px] text-black font-medium">
            The Design System is establishing a production-ready
            React foundation that enables teams to move from
            design to code with minimal translation.
          </p>
        </div>

        {/* Roadmap Status */}
        <div className="mb-[48px] print:break-inside-avoid">
          <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#1BA5DE] mb-[24px]">
            Roadmap Status
          </div>
          <div className="border border-gray-200 rounded-[12px] overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-[24px] py-[16px] text-[14px] font-semibold text-gray-700 font-bold">
                    Initiative
                  </th>
                  <th className="text-left px-[24px] py-[16px] text-[14px] font-semibold text-gray-700">
                    Outcome
                  </th>
                  <th className="text-left px-[24px] py-[16px] text-[14px] font-semibold text-gray-700">
                    Next Milestone
                  </th>
                  <th className="text-left px-[24px] py-[16px] text-[14px] font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {roadmapRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-200"
                  >
                    <td className="px-[24px] py-[20px] text-[16px] text-black font-bold">
                      {row.initiative}
                    </td>
                    <td className="px-[24px] py-[20px] text-[16px] text-gray-700">
                      {row.outcome}
                    </td>
                    <td className="px-[24px] py-[20px] text-[16px] text-gray-700">
                      {row.milestone}
                    </td>
                    <td className="px-[24px] py-[20px] text-right">
                      <span
                        className={`block px-[12px] py-[4px] rounded-full text-[14px] font-semibold text-center ${row.statusTextClass ?? "text-white"}`}
                        style={{
                          backgroundColor: row.statusColor,
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Details — At Risk / Blocked rows from Roadmap Status */}
        <div className="mb-[48px]">
          <RoadmapLinkedRisks />
        </div>

        {/* Progress This Month */}
        <div className="mb-[48px] print:break-inside-avoid">
          <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#7FBD4D] mb-[24px]">
            Progress This Month
          </div>
          <div className="grid grid-cols-2 gap-[24px]">
            {[
              "Delivered initial React component patterns aligned to design system",
              "Advanced Documents MVT pilot using design-to-code workflow",
              "Validated approach for UX-authored React components",
              "In motion: expanding component library and adoption support",
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-[12px] ${i === 3 ? 'bg-[#1BA5DE]/5' : 'bg-[#7FBD4D]/5'} rounded-[8px] p-[20px]`}
              >
                {i === 3 ? (
                  <div className="w-[24px] h-[24px] rounded-full bg-[#1BA5DE] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M5 2L10 7L5 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-[24px] h-[24px] rounded-full bg-[#7FBD4D] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                    >
                      <path
                        d="M1 5.5L5 9.5L13 1.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <span className="text-[16px] leading-[24px] text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next 30 Days */}
        <div className="mb-[48px] print:break-inside-avoid">
          <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#1BA5DE] mb-[24px]">
            Next 30 Days
          </div>
          <div className="flex gap-[24px]">
            {[
              "Expand Production-Ready React Component Library",
              "Support Documents Initiative Implementation",
              "Prepare Design System for LocumSmart Integration",
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 bg-gray-50 border border-gray-200 rounded-[12px] p-[24px] flex items-center justify-center"
              >
                <div className="text-[18px] leading-[24px] text-black font-bold">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live roadmap (embedded tool) */}
        <div className="mb-[48px] print:hidden">
          <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#7FBD4D] mb-[24px]">
            Roadmap
          </div>
          <div className="relative border border-gray-200 rounded-[12px] overflow-hidden bg-gray-50 h-[min(560px,70vh)] min-h-[320px]">
            <iframe
              src="https://roadmap-brown-nine.vercel.app/"
              title="Design System Roadmap"
              className="w-full h-full border-0"
            />
            <a
              href="https://roadmap-brown-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Design System roadmap in a new tab"
              className="absolute bottom-[20px] right-[20px] z-10 flex size-[48px] items-center justify-center rounded-[12px] border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:border-[#1BA5DE] hover:shadow-xl"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="shrink-0"
                aria-hidden
              >
                <path
                  d="M13 3H17V7M17 3L10 10M7 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V13"
                  stroke="#1BA5DE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Why This Matters + Value Snapshot (below embedded roadmap) */}
        <div className="grid grid-cols-2 gap-[48px] mb-[48px] print:break-inside-avoid">
          <div>
            <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#FE8C31] mb-[24px]">
              Why This Matters
            </div>
            <ul className="space-y-[16px]">
              {[
                "Reduces rework across design and engineering",
                "Creates a shared system for consistent product delivery",
                "Accelerates speed to production across initiatives",
                "Establishes foundation for AI-assisted development",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-[12px]"
                >
                  <div className="w-[8px] h-[8px] rounded-full bg-[#FE8C31] mt-[10px] flex-shrink-0" />
                  <span className="text-[18px] leading-[28px] text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#1BA5DE] mb-[24px]">
              Value Snapshot
            </div>
            <div className="space-y-[20px]">
              {[
                {
                  metric: "Components in production",
                  target: "Full library",
                  current: "Growing baseline",
                },
                {
                  metric: "Active teams using DS",
                  target: "All initiatives",
                  current: "Early adoption",
                },
                {
                  metric: "Engineering capacity freed",
                  target: "20.5 FTEs",
                  current: "Projected",
                },
                {
                  metric: "UX capacity freed",
                  target: "4.9 FTEs",
                  current: "Projected",
                },
                {
                  metric: "Design → Build cycle time",
                  target: "-50%",
                  current: "Improving",
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="border-b border-gray-200 pb-[12px]"
                >
                  <div className="text-[18px] font-semibold text-black mb-[8px]">
                    {row.metric}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-normal text-gray-600">
                      <span className="font-bold">Target:</span> {row.target}
                    </span>
                    <span className="text-[14px] text-[#7FBD4D] font-normal">
                      {row.current}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accomplishments — 2025 & Q1 2026 */}
        <div className="mb-[48px] print:break-inside-avoid">
          <div className="mb-[24px] text-[24px] font-bold leading-[32px] tracking-normal text-[#FE8C31]">
            Accomplishments in 2025 and Q1 2026
          </div>
          <ul className="grid grid-cols-1 gap-x-[40px] gap-y-[16px] sm:grid-cols-2">
            {[
              "Built shared infrastructure that lets us ship UI across CompHealth, Weatherby, and LocumSmart without rebuilding from scratch each time",
              "Created a triage model that routes design work by business impact — so high-priority initiatives get speed, and lower-priority work gets efficiency",
              "Accelerated S&P launch by an estimated 3 weeks by reusing pre-built components instead of designing from zero",
              "Positioned our design system as the UI layer for AI squad delivery in SE/FSP — so AISquads can ship faster without design becoming a bottleneck",
              "Eliminated the gap between design and code — components built once in Figma now ship directly as production-ready React, cutting rework between design and engineering",
            ].map((text, i) => (
              <li key={i} className="flex min-w-0 gap-[14px]">
                <span
                  className="mt-[7px] size-[10px] shrink-0 bg-[#FE8C31]"
                  aria-hidden
                />
                <span className="text-[17px] leading-[28px] text-gray-800">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reference */}
        <div className="print:break-inside-avoid">
          <div className="text-[24px] font-bold leading-[32px] tracking-normal text-[#7FBD4D] mb-[24px]">
            Reference
          </div>
          <div className="grid grid-cols-1 items-start gap-[16px] sm:grid-cols-2">
            {[
              { text: "Impact Analysis v3", href: "https://www.figma.com/deck/LtEBjdROWti4uVL4WM0255" },
              { text: "Unified DS Documentation", href: "https://unified-design-system-docs-zgkp.vercel.app/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex w-full items-start justify-between gap-[12px] bg-gradient-to-br from-[#1BA5DE]/5 to-[#1BA5DE]/10 border-2 border-[#1BA5DE]/20 rounded-[12px] p-[24px] hover:border-[#1BA5DE] hover:shadow-lg transition-all duration-200"
              >
                <div className="text-[16px] leading-[24px] text-black font-semibold">
                  {item.text}
                </div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="flex-shrink-0 mt-[2px]"
                >
                  <path
                    d="M13 3H17V7M17 3L10 10M7 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H16C16.5523 17 17 16.5523 17 16V13"
                    stroke="#1BA5DE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-[32px] text-[14px] text-gray-600 italic">
          *Questions? Contact Michael Stevens or Aaron Tate, Director of UX Experience Design.
        </div>

        {/* Footer */}
        <div className="mt-[60px] text-right text-[14px] font-semibold text-gray-400">
          CHG Healthcare
        </div>
      </div>
    </div>
  );
}