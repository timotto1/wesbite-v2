import type { CSSProperties, ReactNode } from "react";
import "./listings.css";

/**
 * Staged Listings illustrations — the hero record + four feature panels for
 * the Listings product page. JSX is lifted from the design handoff
 * (claude.ai/design — heroes.html / heroes.jsx) and wrapped in a scaling
 * frame so the design's pixel-fixed canvas fits any container width via
 * container-query units.
 */

function StagedFrame({
  children,
  width = 1450,
  height = 600,
}: {
  children: ReactNode;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className="staged-listings staged-frame"
      style={{ aspectRatio: `${width} / ${height}` } as CSSProperties}
    >
      <div
        className="staged-canvas"
        style={
          {
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(calc(100cqi / ${width}px))`,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}

/* ----- Hero 1: Listings — multi-portal syndication ----- */
export function StagedListingsHero() {
  return (
    <StagedFrame width={1080} height={720}>
      <div className="hero h1">
        <div className="main panel">
          <div className="head">
            <div className="thumb" />
            <div className="head-info">
              <div className="addr">Flat 14, Maple Court</div>
              <div className="scheme">
                Northgate Housing Group · Plot MC-014
              </div>
              <div className="ref">REF NHG-MC-014 · 2 bed · 68 m²</div>
            </div>
            <div className="share-block">
              <div className="lab">Share offered</div>
              <div className="v">
                40<small>%</small>
              </div>
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <div className="lab">Full market</div>
              <div className="v num">£385,000</div>
            </div>
            <div className="field">
              <div className="lab">Share price</div>
              <div className="v num">£154,000</div>
            </div>
            <div className="field">
              <div className="lab">Rent /mo</div>
              <div className="v num">
                £528<small> retained</small>
              </div>
            </div>
            <div className="field">
              <div className="lab">Service ch.</div>
              <div className="v num">
                £142<small>/mo</small>
              </div>
            </div>
          </div>
          <div
            className="ph-row"
            style={{
              padding: "14px 18px",
              borderTop: "1px solid var(--border-soft)",
            }}
          >
            <span className="pill green">
              <span className="dot" />
              Live · accepting offers
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: "11px",
                color: "var(--muted)",
                fontFamily:
                  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              }}
            >
              Listed 14 May 2026
            </span>
          </div>
          <div className="activity">
            <div className="stat">
              <span className="n num">23</span>
              <span className="l">days listed</span>
            </div>
            <div className="stat">
              <span className="n num">47</span>
              <span className="l">viewings</span>
            </div>
            <div className="stat">
              <span className="n num">6</span>
              <span className="l">offers</span>
            </div>
            <div className="spacer" />
            <div className="ago">last update 09:42</div>
          </div>
        </div>

        <div className="layered panel">
          <div className="lh">
            <div className="t">Portal sync</div>
            <div className="syncing">All live</div>
          </div>
          <div className="pr">
            <div className="pl-mark">RM</div>
            <div className="nm">RightMove</div>
            <div className="ts">2m ago</div>
            <div className="st ok">●</div>
          </div>
          <div className="pr">
            <div className="pl-mark">Z</div>
            <div className="nm">Zoopla</div>
            <div className="ts">2m ago</div>
            <div className="st ok">●</div>
          </div>
          <div className="pr">
            <div className="pl-mark">SH</div>
            <div className="nm">Share to Buy</div>
            <div className="ts">4m ago</div>
            <div className="st ok">●</div>
          </div>
          <div className="pr">
            <div className="pl-mark">OM</div>
            <div className="nm">OnTheMarket</div>
            <div className="ts">11m ago</div>
            <div className="st warn">●</div>
          </div>
        </div>
      </div>
    </StagedFrame>
  );
}

/* ----- Feature 2: Multi-portal syndication ----- */
export function StagedFeatSyndication() {
  return (
    <StagedFrame>
      <div className="feat f2">
        <div className="frame">
          <div className="stage">
            <svg
              className="lines"
              viewBox="0 0 1180 480"
              preserveAspectRatio="none"
            >
              <g
                stroke="rgba(135, 133, 142, 0.55)"
                strokeWidth="1.2"
                fill="none"
                strokeDasharray="3 4"
              >
                <line x1="290" y1="80" x2="500" y2="220" />
                <line x1="890" y1="80" x2="680" y2="220" />
                <line x1="290" y1="400" x2="500" y2="260" />
                <line x1="890" y1="400" x2="680" y2="260" />
              </g>
            </svg>

            <div className="portal p-tl">
              <div className="ph">
                <div className="pn">
                  <span className="pm">RM</span>RightMove
                </div>
                <div className="live">Live</div>
              </div>
              <div className="pmeta">
                <div>
                  <div className="l">Views 7d</div>
                  <div className="v num">2,418</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="l">Synced</div>
                  <div className="ts">2m ago</div>
                </div>
              </div>
            </div>

            <div className="portal p-tr">
              <div className="ph">
                <div className="pn">
                  <span className="pm">Z</span>Zoopla
                </div>
                <div className="live">Live</div>
              </div>
              <div className="pmeta">
                <div>
                  <div className="l">Views 7d</div>
                  <div className="v num">1,206</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="l">Synced</div>
                  <div className="ts">2m ago</div>
                </div>
              </div>
            </div>

            <div className="portal p-bl">
              <div className="ph">
                <div className="pn">
                  <span className="pm">SH</span>Share to Buy
                </div>
                <div className="live">Live</div>
              </div>
              <div className="pmeta">
                <div>
                  <div className="l">Views 7d</div>
                  <div className="v num">894</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="l">Synced</div>
                  <div className="ts">4m ago</div>
                </div>
              </div>
            </div>

            <div className="portal p-br">
              <div className="ph">
                <div className="pn">
                  <span className="pm">OM</span>OnTheMarket
                </div>
                <div className="live">Live</div>
              </div>
              <div className="pmeta">
                <div>
                  <div className="l">Views 7d</div>
                  <div className="v num">612</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="l">Synced</div>
                  <div className="ts">11m ago</div>
                </div>
              </div>
            </div>

            <div className="center">
              <div className="ch">
                <div className="thumb" />
                <div>
                  <div className="nm">Flat 14, Maple Court</div>
                  <div className="sub">NHG-MC-014 · 2 bed · 68 m²</div>
                </div>
              </div>
              <div className="row">
                <div className="l">Full market value</div>
                <div className="v num">£385,000</div>
              </div>
              <div className="row">
                <div className="l">Share offered</div>
                <div style={{ position: "relative" }}>
                  <span className="editing">45%</span>
                  <span className="tooltip">Edit syncs to all portals</span>
                </div>
              </div>
              <div className="row">
                <div className="l">Share price</div>
                <div className="v num">£173,250</div>
              </div>
              <div className="row">
                <div className="l">Rent on retained</div>
                <div className="v num">£484/mo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StagedFrame>
  );
}

/* ----- Feature 3: Eligibility-aware applicant capture ----- */
export function StagedFeatEligibility() {
  return (
    <StagedFrame>
      <div className="feat f3">
        <div className="frame">
          <div className="ghost panel" />
          <div className="panel-main">
            <div className="form">
              <div className="ft">Applicant capture</div>
              <div className="nm">David Williams</div>
              <div className="grp">
                <div className="lab">Annual household income</div>
                <div className="input">
                  <span className="num">£48,500</span>
                </div>
              </div>
              <div className="grp">
                <div className="lab">First-time buyer</div>
                <div className="seg">
                  <div className="s on">Yes</div>
                  <div className="s">No</div>
                </div>
              </div>
              <div className="grp">
                <div className="lab">Region</div>
                <div className="input focus">
                  <span>Greater London</span>
                  <span className="chev">▾</span>
                </div>
              </div>
              <div className="grp">
                <div className="lab">Currently a homeowner</div>
                <div className="seg">
                  <div className="s">Yes</div>
                  <div className="s on">No</div>
                </div>
              </div>
              <div className="grp">
                <div className="lab">Military priority</div>
                <div className="seg">
                  <div className="s">Yes</div>
                  <div className="s on">No</div>
                </div>
              </div>
            </div>
            <div className="checks">
              <div className="ct">Eligibility checks · live</div>
              <div style={{ marginTop: "10px" }}>
                <div className="ch-row">
                  <div className="ck pass">✓</div>
                  <div className="ch-label">Income within £80k cap</div>
                  <div className="ch-meta">£48.5k</div>
                </div>
                <div className="ch-row">
                  <div className="ck pass">✓</div>
                  <div className="ch-label">First-time buyer</div>
                  <div className="ch-meta">yes</div>
                </div>
                <div className="ch-row">
                  <div className="ck pass">✓</div>
                  <div className="ch-label">London region match</div>
                  <div className="ch-meta">in scope</div>
                </div>
                <div className="ch-row">
                  <div className="ck pass">✓</div>
                  <div className="ch-label">No existing property</div>
                  <div className="ch-meta">cleared</div>
                </div>
                <div className="ch-row">
                  <div className="ck pass">✓</div>
                  <div className="ch-label">Affordability — 30% net</div>
                  <div className="ch-meta">28.4%</div>
                </div>
                <div className="ch-row">
                  <div className="ck pass">✓</div>
                  <div className="ch-label">Local connection</div>
                  <div className="ch-meta">borough</div>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="badge">✓</div>
              <div>
                <div className="ftt">Eligible — proceed to reservation</div>
                <div className="fts">
                  All 6 criteria pass · Maple Court Plot 14
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StagedFrame>
  );
}

/* ----- Feature 4: Case management to completion ----- */
export function StagedFeatCaseManagement() {
  return (
    <StagedFrame>
      <div className="feat f4">
        <div className="frame">
          <div className="ct">Case · Sarah Mitchell</div>
          <div className="nm">
            Flat 14, Maple Court{" "}
            <small>NHG-MC-014 · opened 02 Apr 2026</small>
          </div>

          <div className="track">
            <div className="stage done">
              <div className="node">✓</div>
              <div className="lab">Reservation</div>
              <div className="dt">02 Apr</div>
            </div>
            <div className="stage done">
              <div className="node">✓</div>
              <div className="lab">MoS issued</div>
              <div className="dt">09 Apr</div>
            </div>
            <div className="stage done">
              <div className="node">✓</div>
              <div className="lab">Mortgage offer</div>
              <div className="dt">28 Apr</div>
            </div>
            <div className="stage active">
              <div className="node">4</div>
              <div className="lab">Exchange</div>
              <div className="dt">in progress</div>
              <div className="sla">SLA · 3 days left</div>
            </div>
            <div className="stage">
              <div className="node">5</div>
              <div className="lab">Pre-completion</div>
              <div className="dt">—</div>
            </div>
            <div className="stage">
              <div className="node">6</div>
              <div className="lab">Completion</div>
              <div className="dt">—</div>
            </div>
          </div>

          <div className="auto">
            <div className="ico">⚡</div>
            <div className="at">
              <b>Auto-action:</b> chase email sent to solicitor (Howarth & Co.)
              — exchange contracts outstanding 4 days
            </div>
            <div className="ts">today · 09:14</div>
          </div>
        </div>
      </div>
    </StagedFrame>
  );
}

/* ----- Feature 5: Sales velocity reporting ----- */
const VELOCITY_SEGMENTS = [
  { label: "Share to Buy", value: 38, color: "#26045D" },
  { label: "RightMove", value: 28, color: "#7114E2" },
  { label: "Direct site", value: 22, color: "#AE78F1" },
  { label: "Zoopla", value: 12, color: "#D4C4F6" },
];

const FUNNEL_STAGES = [
  { label: "Enquiries", width: "100%", count: "1,284", pct: "100%" },
  { label: "Viewings", width: "62%", count: "796", pct: "62%" },
  { label: "Offers", width: "31%", count: "398", pct: "31%" },
  { label: "Reservations", width: "21%", count: "270", pct: "21%" },
];

export function StagedFeatVelocity() {
  const r = 60;
  const cx = 80;
  const cy = 80;
  const sw = 22;
  let acc = 0;
  const arcs = VELOCITY_SEGMENTS.map((s) => {
    const start = (acc / 100) * Math.PI * 2 - Math.PI / 2;
    acc += s.value;
    const end = (acc / 100) * Math.PI * 2 - Math.PI / 2;
    const large = s.value > 50 ? 1 : 0;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    return {
      d: `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`,
      color: s.color,
    };
  });

  return (
    <StagedFrame>
      <div className="feat f5">
        <div className="frame">
          <div className="kpis">
            <div className="kpi">
              <div className="l">Avg. days on market</div>
              <div className="row">
                <span className="n num">42</span>
                <span className="d">−18%</span>
              </div>
            </div>
            <div className="kpi">
              <div className="l">Reservation rate</div>
              <div className="row">
                <span className="n num">68%</span>
                <span className="d">+6 pts</span>
              </div>
            </div>
            <div className="kpi">
              <div className="l">Reservation → completion</div>
              <div className="row">
                <span className="n num">81 d</span>
                <span className="d red">+4 d</span>
              </div>
            </div>
          </div>

          <div className="charts">
            <div className="funnel">
              <div className="ft">Sales funnel · last 90 days</div>
              <div className="stages">
                {FUNNEL_STAGES.map((s) => (
                  <div className="stage" key={s.label}>
                    <div className="lab">{s.label}</div>
                    <div
                      className="bar"
                      style={{ width: s.width } as CSSProperties}
                    >
                      {s.count}
                    </div>
                    <div className="pct">{s.pct}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="donut">
              <div className="dt">Source mix · reservations</div>
              <div className="wrap">
                <svg viewBox="0 0 160 160">
                  {arcs.map((a, i) => (
                    <path
                      key={i}
                      d={a.d}
                      stroke={a.color}
                      strokeWidth={sw}
                      fill="none"
                    />
                  ))}
                  <text
                    x="80"
                    y="78"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="600"
                    fill="#26045D"
                    letterSpacing="-0.02em"
                  >
                    270
                  </text>
                  <text
                    x="80"
                    y="96"
                    textAnchor="middle"
                    fontSize="10"
                    fill="#87858E"
                    fontFamily="JetBrains Mono, ui-monospace, monospace"
                  >
                    total
                  </text>
                </svg>
                <div className="leg">
                  {VELOCITY_SEGMENTS.map((s) => (
                    <div className="li" key={s.label}>
                      <div
                        className="sw"
                        style={{ background: s.color } as CSSProperties}
                      />
                      <div className="nm">{s.label}</div>
                      <div className="vl">{s.value}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StagedFrame>
  );
}
