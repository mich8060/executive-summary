import React, { type ReactNode } from "react";
import { roadmapStatusRows } from "../data/roadmapStatus";
import { RoadmapLinkedRisks } from "./RoadmapLinkedRisks";

const progressThisMonthItems: { inMotion: boolean; body: ReactNode }[] = [
  {
    inMotion: false,
    body: (
      <>
        Delivered initial 79 React component patterns to Engineering. These
        components are now ready for integration into the Documents AI Squad pilot
        and are available for other squad/product teams to adopt in upcoming
        sprints.
      </>
    ),
  },
  {
    inMotion: false,
    body: (
      <>
        Validated with Engineering our approach for UX-authored React components,
        enabling the UX team to build components to 60-80% of the UI layer upfront.
        This offloads foundational component work from under-capacity
        Engineering teams and shortens the path from design to deployment.
      </>
    ),
  },
  {
    inMotion: false,
    body: (
      <>
        Advanced Documents AI Squad pilot from 
          concept and research to production-ready UI
        using the design-to-code workflow, proving out 20 components in production
        conditions and establishing the adoption pattern for future squad/product
        teams to follow.
      </>
    ),
  },
  {
    inMotion: true,
    body: (
      <>
        In motion: expanding the component library from simple to complex components
        by the end of July and onboarding 1-2 squads with product partner alignment
        to ensure prioritization and adoption.
      </>
    ),
  },
];

export default function ExecutiveOnePager() {
  const roadmapRows = roadmapStatusRows;

  return (
    <div className="relative w-full min-h-screen bg-white overflow-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-16 xl:px-24 xl:py-20 2xl:px-[110px] 2xl:py-[80px]">
        {/* Header */}
        <div className="mb-8 text-base print:break-inside-avoid sm:mb-10 md:mb-12 lg:text-[24px]">
          <h1 className="mb-1 text-[1.65rem] font-bold leading-tight text-black sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-[48px] lg:leading-[1.05]">
            Design System Update
          </h1>
          <div className="mb-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm leading-snug text-gray-500 sm:text-base sm:leading-normal md:mb-6 md:text-lg">
            <div>May 2026</div>
            <div>&mdash;</div>
            <div>Michael Stevens, Design System Manager</div>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-8 rounded-r-[12px] border-l-[4px] border-[#1BA5DE] bg-gray-50 p-4 print:break-inside-avoid sm:mb-10 sm:rounded-r-[16px] sm:p-5 md:mb-12 md:p-6">
          <p className="text-base leading-relaxed text-black sm:text-lg sm:leading-relaxed md:text-xl md:leading-snug lg:text-[20px] lg:leading-[32px]">
          The Design System is CHG's shared foundation for efficiently building software at scale — the standards and components that keep every product consistent, intuitive, and on-brand. Common UI elements like buttons, forms, and search experiences: are built once and used everywhere. As AI-powered development becomes the norm, the Design System is a critical layer that keeps every AI-produced experience consistent, trustworthy, and ready to ship while reducing the need for extensive re-work.
          </p>
        </div>

        {/* Progress This Month */}
        <div className="mb-8 print:break-inside-avoid sm:mb-10 md:mb-12">
          <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#7FBD4D] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Progress This Month
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
            {progressThisMonthItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 rounded-lg p-4 sm:gap-[12px] sm:rounded-[8px] sm:p-5 md:p-5 ${item.inMotion ? "bg-[#1BA5DE]/5" : "bg-[#7FBD4D]/5"}`}
              >
                {item.inMotion ? (
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1BA5DE]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden
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
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FBD4D]">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="none"
                      aria-hidden
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
                <span className="text-sm leading-snug text-gray-700 sm:text-base sm:leading-normal md:text-[16px] md:leading-[24px]">
                  {item.body}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Showcase — visual highlights for the month */}
        <div className="mb-8 print:break-inside-avoid sm:mb-10 md:mb-12">
          <div className="mb-3 text-lg font-bold leading-snug tracking-normal text-[#1BA5DE] sm:mb-4 sm:text-xl sm:leading-normal md:mb-5 md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Showcase
          </div>
          <p className="mb-5 max-w-3xl text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base md:mb-8 md:text-[17px] md:leading-relaxed">
            A quick visual pass at what shipped this period—new patterns in the
            library, product UI from the pilot, and where to explore the system
            itself—so the Design System feels tangible, not abstract.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
            <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm print:break-inside-avoid">
              <div className="relative aspect-[4/3] bg-gray-100">
                <a
                  href="https://unified-design-system-docs-zgkp.vercel.app/docs/components/button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute inset-0 block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA5DE] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label="Open Button component documentation in a new tab"
                >
                  <img
                    src="/showcase/button-component-documentation.png"
                    alt="Design system docs: Button component with Tailwind variants preview and JSX example"
                    className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 border-t border-gray-100 p-4 sm:gap-2 sm:p-5">
                <h3 className="text-base font-bold leading-snug text-black sm:text-lg">
                  New React patterns in the library
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                  Production-ready components teams can pull into upcoming sprints—patterns
                  you can see in code, not just on a slide.
                </p>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm print:break-inside-avoid">
              <div className="relative aspect-[4/3] bg-gray-100">
                <a
                  href="https://documents-aisquad.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute inset-0 block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA5DE] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label="Open Documents AI Squad MVT pilot app in a new tab"
                >
                  <img
                    src="/showcase/documents-aisquad-pilot.png"
                    alt="Documents dashboard: search, document categories with status, and overview sidebar in the pilot UI"
                    className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 border-t border-gray-100 p-4 sm:gap-2 sm:p-5">
                <h3 className="text-base font-bold leading-snug sm:text-lg">
                  <a
                    href="https://documents-aisquad.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline-offset-2 transition-colors hover:text-[#1BA5DE] hover:underline"
                  >
                    Documents AI Squad pilot UI
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                  Design-to-code workflow showing up as real screens—proof the
                  system can carry a squad from research to production-ready UI.
                </p>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm print:break-inside-avoid">
              <div className="relative aspect-[4/3] bg-gray-100">
                <a
                  href="https://unified-design-system-docs-zgkp.vercel.app/docs/foundations/colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute inset-0 block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA5DE] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label="Open Colors foundations documentation in a new tab"
                >
                  <img
                    src="/showcase/uds-accent-colors-documentation.png"
                    alt="Unified Design System documentation: accent color scales for charts, badges, and emphasis, with CSS variable naming"
                    className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 border-t border-gray-100 p-4 sm:gap-2 sm:p-5">
                <h3 className="text-base font-bold leading-snug sm:text-lg">
                  <a
                    href="https://unified-design-system-docs-zgkp.vercel.app/docs/foundations/colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline-offset-2 transition-colors hover:text-[#1BA5DE] hover:underline"
                  >
                    The library, end to end
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                  Documentation and token layer that make the system legible for
                  partners who need to understand scope, reuse, and where to plug in.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Roadmap Status */}
        <div className="mb-8 print:break-inside-avoid sm:mb-10 md:mb-12">
          <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#1BA5DE] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Roadmap Status
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-200 sm:rounded-[12px]">
            <div className="max-w-full min-w-0 touch-pan-x overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] md:overflow-x-visible">
              <table className="w-full min-w-0 table-fixed text-balance md:min-w-[720px] md:table-auto">
                <colgroup>
                  <col className="w-[24%] md:w-auto" />
                  <col className="w-[30%] md:w-auto" />
                  <col className="w-[30%] md:w-auto" />
                  <col className="w-[16%] md:w-auto" />
                </colgroup>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 py-2.5 text-left text-[11px] font-bold leading-tight text-gray-700 sm:px-4 sm:py-3.5 sm:text-sm md:px-6 md:py-4 md:text-[14px]">
                      Initiative
                    </th>
                    <th className="px-2 py-2.5 text-left text-[11px] font-semibold leading-tight text-gray-700 sm:px-4 sm:py-3.5 sm:text-sm md:px-6 md:py-4 md:text-[14px]">
                      Outcome
                    </th>
                    <th className="px-2 py-2.5 text-left text-[11px] font-semibold leading-tight text-gray-700 sm:px-4 sm:py-3.5 sm:text-sm md:px-6 md:py-4 md:text-[14px]">
                      Next Milestone
                    </th>
                    <th className="px-2 py-2.5 text-left text-[11px] font-semibold leading-tight text-gray-700 sm:px-4 sm:py-3.5 sm:text-sm md:px-6 md:py-4 md:text-[14px]">
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
                      <td className="break-words px-2 py-2.5 text-xs font-bold leading-snug text-black sm:px-4 sm:py-4 sm:text-base sm:leading-normal md:px-6 md:py-5 md:text-[16px]">
                        {row.initiative}
                      </td>
                      <td className="break-words px-2 py-2.5 text-xs leading-snug text-gray-700 sm:px-4 sm:py-4 sm:text-base sm:leading-normal md:px-6 md:py-5 md:text-[16px]">
                        {row.outcome}
                      </td>
                      <td className="break-words px-2 py-2.5 text-xs leading-snug text-gray-700 sm:px-4 sm:py-4 sm:text-base sm:leading-normal md:px-6 md:py-5 md:text-[16px]">
                        {row.milestone}
                      </td>
                      <td className="px-2 py-2.5 text-right align-top sm:px-4 sm:py-4 md:px-6 md:py-5">
                        <span
                          className={`inline-block max-w-full whitespace-nowrap rounded-full px-2 py-0.5 text-center text-[10px] font-semibold sm:px-3 sm:py-1 sm:text-[13px] md:px-[12px] md:py-[4px] md:text-[14px] ${row.statusTextClass ?? "text-white"}`}
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
        </div>

        {/* Details — At Risk / Blocked rows from Roadmap Status */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <RoadmapLinkedRisks />
        </div>

        {/* Next 30 Days */}
        <div className="mb-8 print:break-inside-avoid sm:mb-10 md:mb-12">
          <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#1BA5DE] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Next 30 Days
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6">
            <div className="flex min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:rounded-[12px] sm:p-5 md:p-6">
              <div className="text-left text-sm font-normal leading-relaxed text-gray-800 sm:text-base md:text-[17px]">
                <strong className="font-bold text-black">
                  Expand Production-Ready React Component Library
                </strong>
                {" "}
                – Complete transition from an in-house design system to a
                Shadcn/Tailwind framework, aligning with widely adopted frameworks
                that AI can more easily understand and generate against, enabling
                faster development and scalable growth.{" "}
                <a
                  href="https://unified-design-system-docs-zgkp.vercel.app/"
                  className="font-semibold text-[#1BA5DE] underline decoration-[#1BA5DE]/45 underline-offset-2 hover:text-[#1793c4] hover:decoration-[#1BA5DE]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </div>
            </div>
            <div className="flex min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:rounded-[12px] sm:p-5 md:p-6">
              <div className="text-left text-sm font-normal leading-relaxed text-gray-800 sm:text-base md:text-[17px]">
                <strong className="font-bold text-black">
                  Support Documents Initiative Implementation
                </strong>
                {" "}
                – Shifting from build and design to supporting DS and UX
                implementation with Engineering to ensure successful hand-off.
              </div>
            </div>
            <div className="flex min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 p-4 sm:rounded-[12px] sm:p-5 md:p-6">
              <div className="text-left text-sm font-normal leading-relaxed text-gray-800 sm:text-base md:text-[17px]">
                Prepare Design System for LocumSmart Integration – Ensure divisional
                branding identity variant of the DS is prepared, including creating
                complex components for the redesign.
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-16 border-t border-gray-300 sm:my-20 md:my-24 lg:my-28"
          role="separator"
          aria-hidden
        />

        {/* Live roadmap (embedded tool) */}
        <div className="mb-8 print:hidden sm:mb-10 md:mb-12">
          <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#7FBD4D] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Roadmap
          </div>
          <div className="relative h-[min(42vh,420px)] min-h-[220px] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 sm:min-h-[280px] sm:rounded-[12px] md:h-[min(50vh,480px)] lg:h-[min(560px,70vh)] lg:min-h-[320px]">
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
              className="absolute bottom-3 right-3 z-10 flex size-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:border-[#1BA5DE] hover:shadow-xl sm:bottom-5 sm:right-5 sm:size-12 sm:rounded-[12px]"
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
        <div className="mb-8 grid grid-cols-1 gap-8 print:break-inside-avoid sm:mb-10 md:mb-12 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div>
            <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#FE8C31] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
              Why This Matters
            </div>
            <ul className="space-y-3 sm:space-y-4 md:space-y-[16px]">
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
                  <span className="text-base leading-relaxed text-gray-700 sm:text-lg sm:leading-relaxed md:text-[18px] md:leading-[28px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#1BA5DE] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
              Value Snapshot
            </div>
            <div className="space-y-4 sm:space-y-5 md:space-y-[20px]">
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
                  <div className="mb-1.5 text-base font-semibold text-black sm:mb-2 sm:text-lg md:mb-[8px] md:text-[18px]">
                    {row.metric}
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                    <span className="text-xs font-normal text-gray-600 sm:text-sm md:text-[14px]">
                      <span className="font-bold">Target:</span> {row.target}
                    </span>
                    <span className="text-xs font-normal text-[#7FBD4D] sm:text-sm md:text-[14px]">
                      {row.current}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accomplishments — 2025 & Q1 2026 */}
        <div className="mb-8 print:break-inside-avoid sm:mb-10 md:mb-12">
          <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#FE8C31] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Accomplishments in 2025 and Q1 2026
          </div>
          <ul className="grid grid-cols-1 gap-x-0 gap-y-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 md:gap-x-10 md:gap-y-[16px]">
            {[
              "Built shared infrastructure that lets us ship UI across CompHealth, Weatherby, and LocumSmart without rebuilding from scratch each time",
              "Created a triage model that routes design work by business impact — so high-priority initiatives get speed, and lower-priority work gets efficiency",
              "Accelerated S&P launch by an estimated 3 weeks by reusing pre-built components instead of designing from zero",
              "Positioned our design system as the UI layer for AI squad delivery in SE/FSP — so AISquads can ship faster without design becoming a bottleneck",
              "Eliminated the gap between design and code — components built once in Figma now ship directly as production-ready React, cutting rework between design and engineering",
            ].map((text, i) => (
              <li key={i} className="flex min-w-0 gap-3 sm:gap-[14px]">
                <span
                  className="mt-1.5 size-2 shrink-0 bg-[#FE8C31] sm:mt-[7px] sm:size-[10px]"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-gray-800 sm:text-base sm:leading-relaxed md:text-[17px] md:leading-[28px]">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reference */}
        <div className="print:break-inside-avoid">
          <div className="mb-4 text-lg font-bold leading-snug tracking-normal text-[#7FBD4D] sm:mb-5 sm:text-xl sm:leading-normal md:mb-6 md:text-2xl lg:text-[24px] lg:leading-[32px]">
            Reference
          </div>
          <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 sm:gap-4 md:gap-[16px]">
            {[
              { text: "Impact Analysis v3", href: "https://www.figma.com/deck/LtEBjdROWti4uVL4WM0255" },
              { text: "Unified DS Documentation", href: "https://unified-design-system-docs-zgkp.vercel.app/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex w-full items-start justify-between gap-3 rounded-lg border-2 border-[#1BA5DE]/20 bg-gradient-to-br from-[#1BA5DE]/5 to-[#1BA5DE]/10 p-4 transition-all duration-200 hover:border-[#1BA5DE] hover:shadow-lg sm:gap-[12px] sm:rounded-[12px] sm:p-5 md:p-6"
              >
                <div className="text-sm font-semibold leading-snug text-black sm:text-base sm:leading-normal md:text-[16px] md:leading-[24px]">
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
        <div className="mt-6 text-xs italic leading-relaxed text-gray-600 sm:mt-8 sm:text-sm md:mt-[32px] md:text-[14px]">
          *Questions? Contact Michael Stevens or Aaron Tate, Director of UX Experience Design.
        </div>

        {/* Footer */}
        <div className="mt-8 text-right text-xs font-semibold text-gray-400 sm:mt-12 sm:text-sm md:mt-[60px] md:text-[14px]">
          CHG Healthcare
        </div>
      </div>
    </div>
  );
}