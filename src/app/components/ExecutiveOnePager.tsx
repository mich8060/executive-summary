import { roadmapStatusRows } from "../data/roadmapStatus";
import { RoadmapLinkedRisks } from "./RoadmapLinkedRisks";

export default function ExecutiveOnePager() {
  const roadmapRows = roadmapStatusRows;

  return (
    <div className="relative w-full min-h-screen bg-white overflow-auto">
      <div className="max-w-[1400px] mx-auto px-[110px] py-[80px]">
        {/* Header */}
        <div className="mb-[48px] print:break-inside-avoid text-[24px]">
          <h1 className="text-[48px] font-bold leading-[48px] text-black">
            Design System Executive Update
          </h1>
          <div className="flex gap-[6px] leading-[29px] mb-[24px] text-gray-500">
            <div>March 2026</div>
            <div>&mdash;</div>
            <div>Michael Stevens, Design System Manager</div>
          </div>
        </div>

        {/* Headline */}
        <div className="border-l-[4px] border-[#1BA5DE] bg-gray-50 rounded-r-[16px] p-[20px] mb-[48px] print:break-inside-avoid">
          <p className="text-[24px] leading-[34px] text-black font-semibold">
            The Design System is establishing a production-ready
            React foundation that enables teams to move from
            design to code with minimal translation.
          </p>
        </div>

        {/* Roadmap Status */}
        <div className="mb-[48px] print:break-inside-avoid">
          <div className="text-[14px] font-bold tracking-[0.15em] text-[#1BA5DE] mb-[24px]">
            ROADMAP STATUS
          </div>
          <div className="border border-gray-200 rounded-[12px] overflow-hidden">
            <table className="w-full">
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

        {/* Progress This Month */}
        <div className="mb-[48px] print:break-inside-avoid">
          <div className="text-[14px] font-bold tracking-[0.15em] text-[#7FBD4D] mb-[24px]">
            PROGRESS THIS MONTH
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

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-[48px] mb-[48px] print:break-inside-avoid">
          {/* Why This Matters */}
          <div>
            <div className="text-[14px] font-bold tracking-[0.15em] text-[#1BA5DE] mb-[24px]">
              WHY THIS MATTERS
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
                  <div className="w-[8px] h-[8px] rounded-full bg-[#1BA5DE] mt-[10px] flex-shrink-0" />
                  <span className="text-[18px] leading-[28px] text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value Snapshot */}
          <div>
            <div className="text-[14px] font-bold tracking-[0.15em] text-[#7FBD4D] mb-[24px]">
              VALUE SNAPSHOT
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

        {/* Key Risks — driven by At Risk / Blocked rows in Roadmap Status */}
        <div className="mb-[48px]">
          <RoadmapLinkedRisks />
        </div>

        {/* Next 30 Days */}
        <div className="mb-[48px] print:break-inside-avoid">
          <div className="text-[14px] font-bold tracking-[0.15em] text-[#1BA5DE] mb-[24px]">
            NEXT 30 DAYS
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

        {/* Bottom Line */}
        <div className="bg-[#7FBD4D]/10 rounded-[16px] p-[48px] print:break-inside-avoid">
          <div className="text-[14px] font-bold tracking-[0.15em] text-[#7FBD4D] mb-[24px]">
            BOTTOM LINE
          </div>
          <p className="text-[28px] leading-[40px] text-black font-semibold">
            We are shifting from designing interfaces to
            delivering production-ready systems—enabling faster,
            scalable, and more consistent product delivery.
          </p>
        </div>

        {/* Reference */}
        <div className="mt-[48px] print:break-inside-avoid">
          <div className="text-[14px] font-bold tracking-[0.15em] text-[#1BA5DE] mb-[24px]">
            REFERENCE
          </div>
          <div className="grid grid-cols-3 gap-[16px]">
            {[
              { text: "Impact Analysis v3", href: "https://www.figma.com/deck/LtEBjdROWti4uVL4WM0255" },
              { text: "Design System 2026 Roadmap", href: "#" },
              { text: "Unified DS Documentation", href: "https://unified-design-system-docs-zgkp.vercel.app/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-start justify-between gap-[12px] bg-gradient-to-br from-[#1BA5DE]/5 to-[#1BA5DE]/10 border-2 border-[#1BA5DE]/20 rounded-[12px] p-[24px] hover:border-[#1BA5DE] hover:shadow-lg transition-all duration-200"
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