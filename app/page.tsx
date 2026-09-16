"use client";

const BASE_PATH = process.env.NODE_ENV === "production" ? "/newPortfolio" : "";

const aiChatbotPreview = `${BASE_PATH}/ai_bot.png`;

const liveTrainingPreview = `${BASE_PATH}/project3.png`;

const dataSeedingPreview =
  "https://raw.githubusercontent.com/admirerbrown/automated_data_seeding/main/assets/architecture.png";

const automationPreview = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
    <rect width="1200" height="720" rx="28" fill="#020617"/>
    <rect x="36" y="36" width="1128" height="648" rx="24" fill="#0f172a" stroke="#1e293b"/>
    <rect x="76" y="92" width="260" height="68" rx="16" fill="#111827" stroke="#334155"/>
    <rect x="76" y="188" width="320" height="120" rx="20" fill="#111827" stroke="#334155"/>
    <rect x="430" y="188" width="320" height="120" rx="20" fill="#111827" stroke="#334155"/>
    <rect x="784" y="188" width="340" height="120" rx="20" fill="#111827" stroke="#334155"/>
    <rect x="76" y="360" width="1048" height="220" rx="24" fill="#020617" stroke="#1e293b"/>
    <path d="M176 160v28" stroke="#34d399" stroke-width="8" stroke-linecap="round"/>
    <path d="M590 160v28" stroke="#8b5cf6" stroke-width="8" stroke-linecap="round"/>
    <path d="M954 160v28" stroke="#22d3ee" stroke-width="8" stroke-linecap="round"/>
    <circle cx="176" cy="160" r="18" fill="#34d399"/>
    <circle cx="590" cy="160" r="18" fill="#8b5cf6"/>
    <circle cx="954" cy="160" r="18" fill="#22d3ee"/>
    <rect x="112" y="214" width="56" height="56" rx="12" fill="#34d399" opacity="0.2"/>
    <rect x="466" y="214" width="56" height="56" rx="12" fill="#8b5cf6" opacity="0.2"/>
    <rect x="820" y="214" width="56" height="56" rx="12" fill="#22d3ee" opacity="0.2"/>
    <path d="M180 220h80" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round"/>
    <path d="M534 220h80" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round"/>
    <path d="M888 220h80" stroke="#cbd5e1" stroke-width="10" stroke-linecap="round"/>
    <path d="M396 240h34" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
    <path d="M750 240h34" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
    <rect x="112" y="402" width="128" height="20" rx="10" fill="#34d399" opacity="0.7"/>
    <rect x="112" y="438" width="240" height="16" rx="8" fill="#475569"/>
    <rect x="112" y="470" width="316" height="16" rx="8" fill="#475569"/>
    <rect x="664" y="402" width="128" height="20" rx="10" fill="#8b5cf6" opacity="0.7"/>
    <rect x="664" y="438" width="220" height="16" rx="8" fill="#475569"/>
    <rect x="664" y="470" width="258" height="16" rx="8" fill="#475569"/>
    <path d="M448 250h80" stroke="#22d3ee" stroke-width="8" stroke-linecap="round"/>
    <path d="M816 250h80" stroke="#22d3ee" stroke-width="8" stroke-linecap="round"/>
    <text x="106" y="128" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="28" font-weight="700">Workflow state engine</text>
    <text x="106" y="420" fill="#f8fafc" font-family="Arial, sans-serif" font-size="28" font-weight="700">Context + handoff + memory</text>
  </svg>
`)}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section - Full Viewport */}
      <section className="relative z-10 flex h-screen flex-col items-center justify-center overflow-visible glitch-hero">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.24)_1px,transparent_1px)] bg-[length:50px_50px] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/50 to-slate-950" />
        </div>

        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-violet-500/60" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500/60" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-500/60" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-500/60" />

        {/* Main Content Container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/admirerbrown"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-violet-500/60 hover:text-violet-400 hover:bg-violet-950/30"
                title="GitHub"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-ntow-kyere/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-violet-500/60 hover:text-violet-400 hover:bg-violet-950/30"
                title="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://medium.com/@mr.kyere.s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/30"
                title="Medium"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6.5" cy="12" r="5.5" />
                  <ellipse cx="15.5" cy="12" rx="4" ry="5.5" />
                  <ellipse cx="21.5" cy="12" rx="1.5" ry="5.5" />
                </svg>
              </a>
              <a
                href="mailto:mr.kyere.s@gmail.com"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-purple-500/60 hover:text-purple-400 hover:bg-purple-950/30"
                title="Email"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
            <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700/70 bg-slate-950/90 px-4 py-4 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.95)] backdrop-blur-sm glitch-card">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-violet-500/70 bg-slate-950/80 p-1 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.15)] sm:h-24 sm:w-24 animate-heartbeat">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-900/70 shadow-[0_16px_40px_-24px_rgba(99,102,241,0.4)]">
                  <img
                    src={`${BASE_PATH}/sammyNewProfile2.png`}
                    alt="Profile picture of Samuel Kyere"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full ring-2 ring-emerald-400/20" />
              </div>
              <div className="space-y-2 text-left">
                <p className="font-mono text-xs text-slate-500 tracking-wide">
                  user@sammy:~${" "}
                  <span className="text-violet-400">// profile</span>
                </p>
                <p className="font-mono text-base font-semibold text-slate-100">
                  Samuel Kyere
                </p>
                <p className="font-mono text-sm text-emerald-300">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Column 1: Core Value Proposition (Left Side) */}
            <div className="relative -top-8 space-y-8">
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/60 bg-emerald-950/30 px-3 py-1.5">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-emerald-300">
                    SYSTEMS ACTIVE // AVAILABLE FOR ENGINEERING ROLES
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-5xl">
                  Software &{" "}
                  <span
                    className="glitch-text bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
                    data-text="Integration Engineer"
                  >
                    Integration Engineer
                  </span>
                </h1>
              </div>

              {/* Primary Body Copy */}
              <p className="text-lg leading-relaxed text-slate-300">
                I build the systems that connect code, data, automation, and AI.
                I design backend services, multi-system integrations,
                event-driven webhook architectures, and automated data pipelines
                using Node.js, Python, n8n, and modern AI infrastructure.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-lg border border-violet-600/60 bg-violet-950/40 px-5 py-2.5 text-sm font-semibold text-violet-200 transition hover:border-violet-500 hover:bg-violet-900/60 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  See My Works
                </a>
                {/* <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-600/60 bg-emerald-950/40 px-5 py-2.5 font-mono text-sm font-semibold text-emerald-200 transition hover:border-emerald-500 hover:bg-emerald-900/60 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  Download Technical Resume (PDF)
                </a> */}
              </div>
            </div>

            {/* Column 2: Live System Status Component (Right Side) */}
            <div className="relative">
              {/* Gradient Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-600/20 via-emerald-600/10 to-purple-600/20 rounded-lg blur-xl opacity-50" />

              <div className="relative space-y-4 rounded-lg border border-zinc-800/80 bg-gradient-to-br from-zinc-900/60 to-zinc-950/80 p-6 backdrop-blur-sm">
                {/* Dashboard Header */}
                <div className="pb-4 border-b border-zinc-800/60">
                  <p className="font-mono text-xs text-slate-500 tracking-wide">
                    <span className="text-violet-400">➤</span> Host:
                    Localhost:8000 // Database:{" "}
                    <span className="text-emerald-400 font-semibold">
                      Active
                    </span>
                  </p>
                </div>

                {/* System Footprint Row 1 */}
                <div className="space-y-2 pb-2">
                  <p className="font-mono text-xs uppercase tracking-wide text-violet-400 font-semibold">
                    ◆ Manvelle Menswear PRODUCTION ENGINE
                  </p>
                  <p className="text-sm text-slate-200 pl-4 border-l-2 border-violet-600/50">
                    ~70% reduction in manual operations via multi-modal GPT-4o
                    state streams.
                  </p>
                </div>

                {/* System Footprint Row 2 */}
                <div className="space-y-2 py-2 border-t border-zinc-800/60">
                  <p className="font-mono text-xs uppercase tracking-wide text-emerald-400 font-semibold">
                    ◆ DATAOPS SEEDING PIPELINE
                  </p>
                  <p className="text-sm text-slate-200 pl-4 border-l-2 border-emerald-600/50">
                    Cloudflare Edge Workers processing high-volume CSV scrubbing
                    into Confluence API hooks.
                  </p>
                </div>

                {/* System Footprint Row 3 */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                  <p className="font-mono text-xs uppercase tracking-wide text-purple-400 font-semibold">
                    ◆ LOCALIZED RAG CLUSTER
                  </p>
                  <p className="text-sm text-slate-200 pl-4 border-l-2 border-purple-600/50">
                    Python-driven semantic querying pipeline running over
                    localized ChromaDB vector indexes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
          <p className="font-mono text-xs tracking-widest text-slate-400">
            /* FEATURED SYSTEMS */
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="terminal-projects relative overflow-hidden border-t border-zinc-800/40 pb-24 pt-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/75 to-slate-950" />
          <div className="terminal-orbit terminal-orbit-one">
            <span className="terminal-orbit-node terminal-orbit-node-one" />
          </div>
          <div className="terminal-orbit terminal-orbit-two">
            <span className="terminal-orbit-node terminal-orbit-node-two" />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="space-y-14">
            <div className="space-y-3 text-center">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Featured Work
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Projects & Case Studies
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                A selection of projects that showcase my expertise in building
                scalable systems and automation.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-zinc-950/90 p-4 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.95)] transition duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-slate-900 glitch-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.18),transparent_30%)]" />
                <div className="relative flex h-full flex-col gap-2.5">
                  <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
                    <img
                      src={aiChatbotPreview}
                      alt="Screenshot of the FAQ-driven AI chatbot project"
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400">
                      RAG / AI CHATBOT
                    </span>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      Systems Integration
                    </span>
                  </div>

                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-white">
                    FAQ knowledge agent for web experiences
                  </h3>

                  <div className="grid gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Core stack
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• Python + LangChain</li>
                        <li>• ChromaDB vector search</li>
                        <li>• n8n workflow automation</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Impact
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• &lt; 2s FAQ response time</li>
                        <li>• 90%+ relevant answers</li>
                        <li>• Easy PDF ingestion flow</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                    <a
                      href="https://github.com/admirerbrown/AI-chatbot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-violet-600/60 bg-violet-950/40 px-3 py-2 text-sm font-semibold text-violet-200 transition hover:border-violet-500 hover:bg-violet-900/60"
                    >
                      View GitHub Repo
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1rzq_0bF4m-tnse6y5DMj3vHGlid1gkNB/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                    >
                      Watch Demo
                    </a>
                  </div>
                </div>
              </article>

              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-zinc-950/90 p-4 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.95)] transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-slate-900 glitch-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_30%)]" />
                <div className="relative flex h-full flex-col gap-2.5">
                  <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
                    <img
                      src={`${BASE_PATH}/whatsapp.png`}
                      alt="Workflow diagram for the WhatsApp lead qualification automation"
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                      WHATSAPP / SALES AUTOMATION
                    </span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      Workflow Orchestration
                    </span>
                  </div>

                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-white">
                    Stateful inbound lead qualification engine
                  </h3>

                  <div className="grid gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Core stack
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• n8n orchestration</li>
                        <li>• LangChain + GPT-4o</li>
                        <li>• Google Sheets memory</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Impact
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• ~70% manual workload reduction</li>
                        <li>• Multi-modal awareness</li>
                        <li>• Human handoff gate</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                    <a
                      href="https://github.com/admirerbrown/facebook_ad_whatsapp_inbound_automation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-emerald-600/60 bg-emerald-950/40 px-3 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-500 hover:bg-emerald-900/60"
                    >
                      View GitHub Repo
                    </a>
                    <a
                      href="https://github.com/admirerbrown/facebook_ad_whatsapp_inbound_automation#readme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                    >
                      Watch Demo
                    </a>
                  </div>
                </div>
              </article>

              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-zinc-950/90 p-4 shadow-[0_24px_90px_-40px_rgba(34,211,238,0.16)] transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900 glitch-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%)]" />
                <div className="relative flex h-full flex-col gap-2.5">
                  <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
                    <img
                      src={dataSeedingPreview}
                      alt="Architecture diagram for the client data seeding automation"
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400">
                      DATAOPS / SEEDING PIPELINE
                    </span>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                      Production Automation
                    </span>
                  </div>

                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-white">
                    Client data seeding automation
                  </h3>

                  <div className="grid gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Core stack
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• n8n workflow orchestration</li>
                        <li>• Python + Node.js processing</li>
                        <li>• Slack, Confluence + Drive APIs</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Impact
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• 85% analyst effort reduction</li>
                        <li>• 100% Confluence status updates</li>
                        <li>• Auditable run logs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                    <a
                      href="https://github.com/admirerbrown/automated_data_seeding"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-cyan-600/60 bg-cyan-950/40 px-3 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-500 hover:bg-cyan-900/60"
                    >
                      View GitHub Repo
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1WKuH7R5j5fHHXBaAp302QaRSE1Wpz2Ks/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                    >
                      Watch Demo
                    </a>
                  </div>
                </div>
              </article>

              <article className="group order-first relative h-full overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-zinc-950/90 p-4 shadow-[0_24px_90px_-40px_rgba(16,185,129,0.16)] transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-slate-900 glitch-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_30%)]" />
                <div className="relative flex h-full flex-col gap-2.5">
                  <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70">
                    <img
                      src={liveTrainingPreview}
                      alt="Instructor workspace for the corporate live training platform"
                      className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                      REAL-TIME / LEARNING PLATFORM
                    </span>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      WebSocket Systems
                    </span>
                  </div>

                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-white">
                    Corporate live training platform
                  </h3>

                  <div className="grid gap-2 rounded-xl border border-slate-800/80 bg-slate-950/60 p-2.5 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Core stack
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• React + Vite frontend</li>
                        <li>• Node.js + Express API</li>
                        <li>• WebSockets + PostgreSQL</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Key capabilities
                      </p>
                      <ul className="mt-1 space-y-0.5 text-[13px] leading-5 text-slate-300">
                        <li>• Instructor-led playback control</li>
                        <li>• Late-join state recovery</li>
                        <li>• Clock drift correction</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                    <a
                      href="https://github.com/admirerbrown/coporate_live_training_platform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-emerald-600/60 bg-emerald-950/40 px-3 py-2 text-sm font-semibold text-emerald-200 transition hover:border-emerald-500 hover:bg-emerald-900/60"
                    >
                      View GitHub Repo
                    </a>
                    <a
                      href="https://www.loom.com/share/9f5c7e9fcbf44673a7fc8e114ac44b4a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                    >
                      Watch Demo
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Profile Section */}
      <section
        id="capabilities"
        className="relative border-t border-zinc-800/40 bg-slate-950 py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(129,140,248,0.12),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(16,185,129,0.08),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-5 lg:sticky lg:top-10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                System Profile
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built for the work between systems.
              </h2>
              <p className="max-w-xl leading-relaxed text-slate-400">
                I turn disconnected tools and manual operations into reliable
                workflows. The focus is not only on shipping an integration, but
                making it observable, maintainable, and useful to the people who
                run it.
              </p>
              <div className="border-l-2 border-emerald-500/50 pl-4 font-mono text-xs leading-6 text-slate-400">
                <p className="text-emerald-300">$ engineering_principles</p>
                <p>reliable inputs → clear state → traceable outputs</p>
              </div>

              {/* Core Technology Stack */}
              <div className="pt-5">
                <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Core Stack
                </p>

                <div className="grid grid-cols-4 gap-x-4 gap-y-5">
                  {[
                    {
                      name: "Claude",
                      src: `${BASE_PATH}/claude.svg`,
                      color: "#D97757",
                    },
                    {
                      name: "Python",
                      src: `${BASE_PATH}/python.svg`,
                      color: "#3776AB",
                    },
                    {
                      name: "JavaScript",
                      src: `${BASE_PATH}/javascript.svg`,
                      color: "#F7DF1E",
                    },
                    {
                      name: "Node.js",
                      src: `${BASE_PATH}/nodedotjs.svg`,
                      color: "#5FA04E",
                    },
                    {
                      name: "React",
                      src: `${BASE_PATH}/react.svg`,
                      color: "#61DAFB",
                    },
                    {
                      name: "n8n",
                      src: `${BASE_PATH}/n8n.svg`,
                      color: "#EA4B71",
                    },
                    {
                      name: "MongoDB",
                      src: `${BASE_PATH}/mongodb.svg`,
                      color: "#47A248",
                    },
                    {
                      name: "MySQL",
                      src: `${BASE_PATH}/mysql.svg`,
                      color: "#4479A1",
                    },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="flex h-10 w-10 items-center justify-center">
                        <span
                          role="img"
                          aria-label={tool.name}
                          className="block h-8 w-8 bg-current bg-contain bg-center bg-no-repeat"
                          style={{
                            color: tool.color,
                            WebkitMaskImage: `url(${tool.src})`,
                            maskImage: `url(${tool.src})`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                          }}
                        />
                      </div>

                      <span
                        className="font-mono text-[9px] text-slate-500 transition-colors duration-200 group-hover:text-[var(--tool-color)]"
                        style={
                          {
                            "--tool-color": tool.color,
                          } as React.CSSProperties
                        }
                      >
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 transition hover:border-violet-500/40 hover:bg-slate-900/80 glitch-card">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet-400">
                  01 / Backend + APIs
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Integration-ready services
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Backend logic, webhooks, payload validation, and API contracts
                  that keep systems communicating predictably.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 transition hover:border-emerald-500/40 hover:bg-slate-900/80 glitch-card">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">
                  02 / Automation
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Workflow orchestration
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Event-driven n8n workflows that connect teams, tools, and
                  operational processes without fragile manual handoffs.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 transition hover:border-cyan-500/40 hover:bg-slate-900/80 glitch-card">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400">
                  03 / AI Systems
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Grounded AI workflows
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Retrieval, automation, and human handoff patterns designed to
                  make AI useful inside real operating environments.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 transition hover:border-purple-500/40 hover:bg-slate-900/80 glitch-card">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-purple-400">
                  04 / Data Operations
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-100">
                  Clean, traceable pipelines
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Data normalization, audit-friendly status updates, and
                  pragmatic monitoring around every critical workflow.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Draft Section */}
      <section
        id="experience"
        className="relative border-t border-zinc-800/40 bg-slate-950 py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.08),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Experience Log
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Engineering experience
              </h2>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber-300">
              // production experiences
            </p>
          </div>

          <div className="space-y-5 border-l border-slate-800 pl-5 sm:pl-8">
            <article className="relative border border-slate-800/80 bg-slate-900/50 p-5 shadow-[0_18px_60px_-38px_rgba(15,23,42,0.9)] glitch-card">
              <span className="absolute -left-[29px] top-6 h-3 w-3 rounded-full border-2 border-emerald-400 bg-slate-950 sm:-left-[41px]" />
              <div className="font-mono text-xs leading-6 text-slate-400">
                <p className="text-emerald-400">commit 7f3a91c</p>
                <p>Author: Samuel Kyere &lt;visual@alpha.com&gt;</p>
                <p>Date: Jan 2023 - Jan 2026</p>
              </div>
              <h3 className="mt-4 font-mono text-base font-semibold text-violet-400">
                feat(experience): Software and automation Engineer @ Visual
                Alpha
              </h3>
              <p>
                Owned the engineering and automation layer across data pipelines
                and AI-assisted tooling, taking systems from ingestion and
                processing through validation and quality control.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-400">
                <li>
                  • Architected and maintained Python-based data pipelines and
                  AI agent workflows as the sole engineer on the codebase.
                </li>
                <li>
                  • Automated 40–85% of previously manual operational workflows,
                  reducing repetitive work while maintaining production
                  reliability.
                </li>
                <li>
                  • Built validation and quality-control mechanisms that
                  improved consistency across data processing workflows.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-dashed border-amber-400/60 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  Python
                </span>
                <span className="rounded-full border border-dashed border-amber-400/60 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  Node.js
                </span>
                <span className="rounded-full border border-dashed border-amber-400/60 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  Git
                </span>
                <span className="rounded-full border border-dashed border-amber-400/60 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  MySQL
                </span>
              </div>
              <div className="mt-5 border-t border-slate-800 pt-4 font-mono text-xs leading-6 text-slate-500">
                <p className="mt-2 text-slate-400">
                  3 files changed, 214 insertions(+), 58 deletions(-)
                </p>
              </div>
            </article>

            <article className="relative border border-dashed border-slate-700/80 bg-slate-900/30 p-5">
              <span className="absolute -left-[29px] top-6 h-3 w-3 rounded-full border-2 border-slate-600 bg-slate-950 sm:-left-[41px]" />
              <div className="font-mono text-xs leading-6 text-slate-500">
                <p>commit 4d82c6e</p>
                <p>Author: Samuel Kyere &lt;samuelkyere@microverse.com&gt;</p>
                <p>Date: March 2022 - Dec 2022</p>
              </div>
              <p className="mt-4 font-mono text-sm text-violet-400">
                feat(experience): Code Reviewer @ Microverse
              </p>
              <p>
                Evaluated production-style applications and capstone projects
                against technical specifications, code-quality standards, and
                architectural requirements.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-400">
                <li>
                  • Conducted structured code reviews across React, Redux, Ruby
                  on Rails, and PostgreSQL projects, identifying implementation,
                  architectural, and specification issues.
                </li>
                <li>
                  • Provided actionable technical feedback that guided
                  developers toward maintainable, specification-compliant
                  solutions.
                </li>
                <li>
                  • Evaluated and approved final capstone submissions against
                  defined engineering and quality standards.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  React
                </span>
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  Redux
                </span>
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  Ruby on Rails
                </span>
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  PostgreSQL
                </span>
              </div>
              <p className="mt-4 font-mono text-xs text-slate-600">
                6 files changed, 142 insertions(+), 37 deletions(-)
              </p>
            </article>

            <article className="relative border border-dashed border-slate-700/80 bg-slate-900/30 p-5">
              <span className="absolute -left-[29px] top-6 h-3 w-3 rounded-full border-2 border-slate-600 bg-slate-950 sm:-left-[41px]" />
              <div className="font-mono text-xs leading-6 text-slate-500">
                <p>commit 2b88e4d</p>
                <p>Author: Samuel Kyere &lt;samuel@eziticket.com&gt;</p>
                <p>Date: Apr 2021 - Dec 2021</p>
              </div>
              <p className="mt-4 font-mono text-sm text-violet-400">
                feat(experience): Backend Engineer @ eziticket
              </p>
              <p>
                Designed and built the backend infrastructure for a mobile
                ticketing MVP, translating insights from user interviews at bus
                terminals into a functional booking and ticketing system.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-400">
                <li>
                  • Built the Node.js backend and REST APIs supporting the
                  Flutter mobile application.
                </li>
                <li>
                  • Designed data models and backend services using Node.js and
                  MongoDB to support ticketing and booking workflows.
                </li>
                <li>
                  • Took the product from concept to working MVP within six
                  months, validating the product against real-world user demand
                  before discontinuing it due to insufficient commercial
                  traction.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  Flutter
                </span>
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  Node.js
                </span>
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  Express.js
                </span>
                <span className="rounded-full border border-dashed border-amber-400/50 bg-amber-400/5 px-2.5 py-1 font-mono text-[11px] text-amber-200/80">
                  MongoDB
                </span>
              </div>
              <p className="mt-4 font-mono text-xs text-slate-600">
                5 files changed, 168 insertions(+), 22 deletions(-)
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Writing Draft Section */}
      <section
        id="writing"
        className="relative border-t border-zinc-800/40 bg-slate-950 py-24"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Engineering Notes
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Writing & technical thinking
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-right">
              Short notes on reliable automation, integrations, and practical AI
              systems.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="flex min-h-60 flex-col rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition hover:border-cyan-500/40 hover:bg-slate-900/70 glitch-card">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-400">
                Integration Patterns · 3 min read
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-200">
                Webhook vs. API: Understanding the difference and when to use
                each one
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                A practical guide to choosing pull-based APIs or event-driven
                webhooks based on how a system&apos;s data changes.
              </p>
              <a
                href="https://medium.com/techtrends-digest/webhook-vs-api-understanding-the-difference-and-when-to-use-each-one-93cf4aefccc6?sharedUserId=mr.kyere.s"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300 transition hover:text-cyan-100"
              >
                Read article →
              </a>
            </article>

            <article className="flex min-h-60 flex-col rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition hover:border-violet-500/40 hover:bg-slate-900/70 glitch-card">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-violet-400">
                JavaScript Fundamentals · 4 min read
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-200">
                Understanding “not defined” and “undefined” in JavaScript
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                A clear walkthrough of reference errors, scope, declared values,
                and the debugging difference between these two terms.
              </p>
              <a
                href="https://medium.com/techtrends-digest/understanding-the-difference-between-not-defined-and-undefined-as-a-javascript-developer-cd16fe0e487?sharedUserId=mr.kyere.s"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-violet-300 transition hover:text-violet-100"
              >
                Read article →
              </a>
            </article>

            <article className="flex min-h-60 flex-col rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 transition hover:border-emerald-500/40 hover:bg-slate-900/70 glitch-card">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-400">
                AI Systems · 8 min read
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-200">
                The Shift from Deterministic Automation to Probabilistic
                Automation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Why reliable workflows need different design choices when the
                task moves from repeatable execution to judgment and ambiguity.
              </p>
              <a
                href="https://pub.towardsai.net/the-shift-from-deterministic-automation-to-probabilistic-automation-7d99b115116e?sharedUserId=mr.kyere.s"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300 transition hover:text-emerald-100"
              >
                Read article →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section  details for reaching out*/}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-zinc-800/40 bg-slate-950 py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Connection Ready
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build reliable systems.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-400">
            Have a process that could be automated or a system that needs
            building? Let's talk, I'm open to engineering roles and automation
            collaborations.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:mr.kyere.s@gmail.com"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-600/60 bg-emerald-950/40 px-5 py-3 font-mono text-sm font-semibold text-emerald-200 transition hover:border-emerald-500 hover:bg-emerald-900/60 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Email Samuel
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-ntow-kyere/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
            >
              View LinkedIn
            </a>
          </div>
          <p className="mt-6 font-mono text-xs text-slate-500">
            status: Available for collaborations
          </p>
          <p className="mt-2 font-mono text-xs text-slate-600">
            location: Accra, Ghana · preference: Open to remote, hybrid, or
            onsite
          </p>
        </div>
      </section>

      <footer className="border-t border-violet-500/20 bg-gradient-to-r from-violet-950/40 via-slate-900 to-cyan-950/30 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>samuel@systems:~$ portfolio --status active</p>
          <p className="text-slate-500">
            © {new Date().getFullYear()} Samuel Kyere
          </p>
        </div>
      </footer>
    </div>
  );
}
