"use client";

import { Project } from "@/data/projects";

function Scene({ slug, accent }: { slug: string; accent: string }) {
  switch (slug) {
    case "pettag":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <circle cx="240" cy="120" r="70" fill={`${accent}18`} stroke={accent} strokeOpacity="0.45" strokeWidth="2" />
          <ellipse cx="210" cy="108" rx="14" ry="18" fill={accent} fillOpacity="0.85" />
          <ellipse cx="270" cy="108" rx="14" ry="18" fill={accent} fillOpacity="0.85" />
          <circle cx="240" cy="138" r="28" fill={`${accent}33`} stroke={accent} strokeOpacity="0.6" />
          <circle cx="228" cy="134" r="3" fill="#e6edf3" />
          <circle cx="252" cy="134" r="3" fill="#e6edf3" />
          <path d="M230 150 Q240 158 250 150" stroke="#e6edf3" strokeWidth="2" strokeLinecap="round" />
          <rect x="40" y="40" width="90" height="50" rx="12" fill="rgba(255,255,255,0.04)" stroke={accent} strokeOpacity="0.35" />
          <text x="85" y="70" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">Vet Panel</text>
          <rect x="350" y="40" width="90" height="50" rx="12" fill="rgba(255,255,255,0.04)" stroke={accent} strokeOpacity="0.35" />
          <text x="395" y="70" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">Pet App</text>
          <path d="M130 65 H170" stroke={accent} strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M310 65 H350" stroke={accent} strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" />
          <text x="240" y="230" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Pet Health Ecosystem</text>
        </svg>
      );

    case "finderdev":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((col) => {
              const x = 100 + col * 100;
              const y = 36 + row * 58;
              return (
                <g key={`${row}-${col}`}>
                  <rect x={x} y={y} width="72" height="44" rx="10" fill={`${accent}${row === 1 && col === 1 ? "33" : "14"}`} stroke={accent} strokeOpacity="0.45" />
                  <circle cx={x + 20} cy={y + 22} r="8" fill={accent} fillOpacity="0.7" />
                  <rect x={x + 34} y={y + 14} width="28" height="5" rx="2" fill="rgba(255,255,255,0.25)" />
                  <rect x={x + 34} y={y + 24} width="20" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
                </g>
              );
            })
          )}
          <text x="240" y="240" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Developer Social Graph</text>
        </svg>
      );

    case "nexus-commerce-api":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <rect x="48" y="50" width="110" height="140" rx="14" fill={`${accent}15`} stroke={accent} strokeOpacity="0.5" />
          <text x="103" y="78" textAnchor="middle" fill={accent} fontSize="12" fontFamily="Inter,sans-serif">Cart</text>
          <rect x="64" y="92" width="78" height="18" rx="4" fill="rgba(255,255,255,0.08)" />
          <rect x="64" y="118" width="78" height="18" rx="4" fill="rgba(255,255,255,0.08)" />
          <rect x="64" y="144" width="78" height="18" rx="4" fill={`${accent}44`} />
          <path d="M158 120 H210" stroke={accent} strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="210" y="70" width="120" height="100" rx="14" fill="rgba(123,97,255,0.15)" stroke="#7b61ff" strokeOpacity="0.55" />
          <text x="270" y="100" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontFamily="Inter,sans-serif">Order API</text>
          <circle cx="270" cy="130" r="16" stroke="#7b61ff" strokeWidth="2" fill="none" />
          <path d="M270 118 V130 L280 136" stroke="#7b61ff" strokeWidth="2" />
          <path d="M330 120 H380" stroke={accent} strokeWidth="2" />
          <rect x="380" y="85" width="60" height="70" rx="12" fill={`${accent}22`} stroke={accent} strokeOpacity="0.5" />
          <text x="410" y="125" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">Pay</text>
          <text x="240" y="235" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Commerce Pipeline</text>
        </svg>
      );

    case "pulse-realtime-chat":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <rect x="60" y="40" width="160" height="160" rx="16" fill="rgba(255,255,255,0.03)" stroke={accent} strokeOpacity="0.35" />
          <rect x="78" y="58" width="100" height="28" rx="10" fill={`${accent}33`} />
          <rect x="98" y="98" width="104" height="28" rx="10" fill="rgba(255,255,255,0.08)" />
          <rect x="78" y="138" width="88" height="28" rx="10" fill={`${accent}33`} />
          <rect x="260" y="40" width="160" height="160" rx="16" fill="rgba(255,255,255,0.03)" stroke={accent} strokeOpacity="0.35" />
          <rect x="278" y="70" width="110" height="28" rx="10" fill="rgba(255,255,255,0.08)" />
          <rect x="298" y="110" width="100" height="28" rx="10" fill={`${accent}44`} />
          <rect x="278" y="150" width="80" height="20" rx="8" fill="rgba(255,255,255,0.06)" />
          <path d="M220 120 H260" stroke={accent} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="3 4" />
          <circle cx="240" cy="120" r="8" fill={accent} fillOpacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <text x="240" y="235" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Realtime Messaging</text>
        </svg>
      );

    case "aurora-analytics":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <rect x="40" y="36" width="400" height="180" rx="16" fill="rgba(255,255,255,0.03)" stroke={accent} strokeOpacity="0.3" />
          <polyline
            points="70,170 130,120 190,140 250,80 310,100 370,55 410,70"
            fill="none"
            stroke={accent}
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polyline
            points="70,170 130,120 190,140 250,80 310,100 370,55 410,70 410,180 70,180 Z"
            fill={`${accent}18`}
            stroke="none"
          />
          {[70, 130, 190, 250, 310, 370].map((x, i) => (
            <circle key={x} cx={x} cy={[170, 120, 140, 80, 100, 55][i]} r="4" fill={accent} />
          ))}
          <text x="240" y="240" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Live Metrics Dashboard</text>
        </svg>
      );

    case "shield-auth-gateway":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <path
            d="M240 40 L310 70 V130 C310 175 275 205 240 220 C205 205 170 175 170 130 V70 Z"
            fill={`${accent}22`}
            stroke={accent}
            strokeWidth="2.5"
            strokeOpacity="0.7"
          />
          <rect x="220" y="105" width="40" height="50" rx="8" fill={accent} fillOpacity="0.35" stroke={accent} />
          <circle cx="240" cy="100" r="14" stroke={accent} strokeWidth="2.5" fill="none" />
          <rect x="40" y="90" width="90" height="50" rx="10" fill="rgba(255,255,255,0.04)" stroke={accent} strokeOpacity="0.3" />
          <text x="85" y="120" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">Client</text>
          <rect x="350" y="90" width="90" height="50" rx="10" fill="rgba(255,255,255,0.04)" stroke={accent} strokeOpacity="0.3" />
          <text x="395" y="120" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">Services</text>
          <path d="M130 115 H168" stroke={accent} strokeOpacity="0.45" strokeWidth="2" />
          <path d="M312 115 H350" stroke={accent} strokeOpacity="0.45" strokeWidth="2" />
          <text x="240" y="245" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Auth Gateway Shield</text>
        </svg>
      );

    case "orbit-mobile-companion":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <rect x="175" y="28" width="130" height="200" rx="24" fill={`${accent}12`} stroke={accent} strokeOpacity="0.55" strokeWidth="2.5" />
          <rect x="195" y="42" width="90" height="10" rx="5" fill="rgba(255,255,255,0.12)" />
          <rect x="190" y="70" width="100" height="50" rx="10" fill={`${accent}28`} stroke={accent} strokeOpacity="0.4" />
          <rect x="190" y="132" width="100" height="22" rx="6" fill="rgba(255,255,255,0.08)" />
          <rect x="190" y="164" width="100" height="22" rx="6" fill="rgba(255,255,255,0.08)" />
          <circle cx="240" cy="208" r="8" stroke={accent} strokeOpacity="0.5" />
          <circle cx="90" cy="90" r="28" fill={`${accent}18`} stroke={accent} strokeOpacity="0.35" />
          <text x="90" y="95" textAnchor="middle" fill={accent} fontSize="10" fontFamily="Inter,sans-serif">Offline</text>
          <circle cx="390" cy="150" r="28" fill={`${accent}18`} stroke={accent} strokeOpacity="0.35" />
          <text x="390" y="155" textAnchor="middle" fill={accent} fontSize="10" fontFamily="Inter,sans-serif">Sync</text>
          <path d="M118 100 H175" stroke={accent} strokeOpacity="0.35" strokeDasharray="3 3" />
          <path d="M305 160 H362" stroke={accent} strokeOpacity="0.35" strokeDasharray="3 3" />
          <text x="240" y="250" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Field Mobile App</text>
        </svg>
      );

    case "helix-ai-assistant":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <circle cx="240" cy="120" r="36" fill={`${accent}30`} stroke={accent} strokeWidth="2" />
          <circle cx="240" cy="120" r="12" fill={accent} fillOpacity="0.9" />
          {[0, 60, 120, 180, 240, 300].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const x = 240 + Math.cos(rad) * 78;
            const y = 120 + Math.sin(rad) * 58;
            return (
              <g key={deg}>
                <line x1="240" y1="120" x2={x} y2={y} stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" />
                <circle cx={x} cy={y} r={8 + (i % 2) * 3} fill={`${accent}22`} stroke={accent} strokeOpacity="0.55" />
              </g>
            );
          })}
          <rect x="60" y="200" width="360" height="28" rx="10" fill="rgba(255,255,255,0.05)" stroke={accent} strokeOpacity="0.25" />
          <text x="240" y="219" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">RAG · Embeddings · PR Summary</text>
        </svg>
      );

    case "vault-pipeline":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          {["Commit", "Test", "Build", "Deploy"].map((label, i) => {
            const x = 40 + i * 110;
            return (
              <g key={label}>
                <rect x={x} y="90" width="90" height="60" rx="12" fill={`${accent}${i === 3 ? "33" : "15"}`} stroke={accent} strokeOpacity="0.5" />
                <text x={x + 45} y="125" textAnchor="middle" fill={accent} fontSize="12" fontFamily="Inter,sans-serif">{label}</text>
                {i < 3 && (
                  <path d={`M${x + 90} 120 H${x + 110}`} stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
                )}
              </g>
            );
          })}
          <path d="M40 70 H440" stroke={accent} strokeOpacity="0.15" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="85" cy="70" r="6" fill={accent} />
          <circle cx="195" cy="70" r="6" fill={accent} fillOpacity="0.7" />
          <circle cx="305" cy="70" r="6" fill={accent} fillOpacity="0.5" />
          <circle cx="415" cy="70" r="6" fill={accent} fillOpacity="0.35" />
          <text x="240" y="200" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">CI/CD Blue-Green Flow</text>
          <text x="240" y="222" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif" opacity="0.7">GitHub Actions → K8s</text>
        </svg>
      );

    case "ledger-fintech-core":
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <rect x="70" y="45" width="340" height="150" rx="16" fill="rgba(255,255,255,0.03)" stroke={accent} strokeOpacity="0.35" />
          <line x1="240" y1="45" x2="240" y2="195" stroke={accent} strokeOpacity="0.25" />
          <text x="155" y="70" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">Debit</text>
          <text x="325" y="70" textAnchor="middle" fill={accent} fontSize="11" fontFamily="Inter,sans-serif">Credit</text>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x="90" y={88 + i * 24} width="120" height="14" rx="4" fill={`${accent}${i % 2 ? "28" : "14"}`} />
              <rect x="270" y={88 + i * 24} width="120" height="14" rx="4" fill={`${accent}${i % 2 ? "14" : "28"}`} />
            </g>
          ))}
          <text x="240" y="230" textAnchor="middle" fill="rgba(230,237,243,0.7)" fontSize="13" fontFamily="Inter,sans-serif">Double-Entry Ledger</text>
        </svg>
      );

    default:
      return (
        <svg className="project-mockup-svg" viewBox="0 0 480 260" fill="none">
          <rect x="80" y="60" width="320" height="120" rx="16" fill={`${accent}18`} stroke={accent} strokeOpacity="0.4" />
          <text x="240" y="130" textAnchor="middle" fill={accent} fontSize="16" fontFamily="Orbitron,sans-serif">
            {slug}
          </text>
        </svg>
      );
  }
}

export default function ProjectMockup({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const nodes = project.tags.slice(0, 4);

  return (
    <div
      className={`project-mockup${compact ? " compact" : ""}`}
      style={{ ["--project-accent" as string]: project.accent }}
      aria-hidden
    >
      <div className="project-mockup-chrome">
        <span />
        <span />
        <span />
        <div className="project-mockup-url">{project.slug}.app</div>
      </div>
      <div className="project-mockup-stage">
        <div className="project-mockup-grid" />
        <Scene slug={project.slug} accent={project.accent} />
        <div className="project-mockup-nodes">
          {nodes.map((tag) => (
            <span key={tag} className="project-mockup-node">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
