"use client";

import { useState } from "react";
import { Icon, type IconKey } from "./icons";
import { AreaChart, BarChart, DonutChart, ScatterChart, Spark } from "./charts";

/* ───────────────── Case Management ───────────────── */
export function CaseManagementView() {
  const [tab, setTab] = useState("Support");
  const [scope, setScope] = useState<"All" | "Mine">("All");
  const [period, setPeriod] = useState<"Y" | "Q" | "M">("Y");

  const dataMap = {
    Y: [13, 14, 12, 15, 17, 16, 18, 17, 19, 20, 18, 15],
    Q: [12, 14, 16, 15, 17, 18, 17, 19, 20, 15],
    M: [16, 15, 14, 16, 17, 18, 16, 17, 15],
  };
  const months: Record<typeof period, string[]> = {
    Y: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    Q: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    M: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "M2", "T2"],
  };

  type ProcColor = "pink" | "indigo" | "gray";
  const enquiries: {
    name: string;
    addr: string;
    ic: "Mail" | "Phone";
    proc: { l: string; c: ProcColor };
    signed: string;
    date: string;
    sup: { i: string; n: string; c: string };
  }[] = [
    { name: "Patricia Adeyemi", addr: "14 Beechwood Close", ic: "Mail", proc: { l: "Resales", c: "pink" }, signed: "15/01/26", date: "01/03/26", sup: { i: "M", n: "Mary", c: "#5b3fd6" } },
    { name: "Taiwo Ogundimu", addr: "3 Rosamund Close", ic: "Phone", proc: { l: "Staircasing", c: "indigo" }, signed: "20/06/24", date: "02/03/26", sup: { i: "E", n: "Elena", c: "#d63d8a" } },
    { name: "Marcus Williams", addr: "11 Rowan Court", ic: "Mail", proc: { l: "Resales", c: "pink" }, signed: "10/03/22", date: "02/03/26", sup: { i: "D", n: "Dionne", c: "#2bb39a" } },
    { name: "Anonymous Resident", addr: "Address to be confirmed", ic: "Mail", proc: { l: "Other", c: "gray" }, signed: "—", date: "02/03/26", sup: { i: "M", n: "Mary", c: "#5b3fd6" } },
    { name: "Babatunde Ola", addr: "6 Chestnut Grove", ic: "Phone", proc: { l: "Staircasing", c: "indigo" }, signed: "04/07/21", date: "03/03/26", sup: { i: "D", n: "Dionne", c: "#2bb39a" } },
    { name: "Helen Asare", addr: "22 Linden Way", ic: "Mail", proc: { l: "Resales", c: "pink" }, signed: "12/09/23", date: "03/03/26", sup: { i: "E", n: "Elena", c: "#d63d8a" } },
  ];

  type StageColor = "indigo" | "pink" | "amber" | "blue" | "gray" | "green";
  const staircasingCases: {
    name: string;
    addr: string;
    amount: string;
    status: { l: string; c: StageColor };
    days: number;
    mgr: string | null;
  }[] = [
    { name: "Mohammed Al-Rashid", addr: "2 Granary Square, Kings Cross, Lo…", amount: "£110,000", status: { l: "MOS", c: "indigo" }, days: 58, mgr: null },
    { name: "Taiwo Ogundimu", addr: "3 Rosamund Close, Stratford, Lond…", amount: "£97,500", status: { l: "MOS", c: "indigo" }, days: 31, mgr: null },
    { name: "Funmilayo Adedoyin", addr: "17 Maple Court, Tooting, London S…", amount: "£96,250", status: { l: "Pre-…", c: "pink" }, days: 72, mgr: "Tracey" },
    { name: "Josephine Tremblay", addr: "7 Willowmere Close, Peckham, Lon…", amount: "£93,750", status: { l: "AML", c: "indigo" }, days: 18, mgr: "Dionne" },
    { name: "Chioma Ihejirika", addr: "7 Bethnal Green Road, London E2 7…", amount: "£84,000", status: { l: "Post-…", c: "amber" }, days: 91, mgr: null },
    { name: "Anna Korhonen", addr: "9 Bluebell Walk, Leyton, London E10…", amount: "£82,500", status: { l: "Details", c: "blue" }, days: 1, mgr: null },
  ];

  const resalesCases: {
    name: string;
    addr: string;
    amount: string;
    status: { l: string; c: StageColor };
    days: number;
    mgr: string | null;
  }[] = [
    { name: "Helen Asare", addr: "22 Linden Way, Camden, London NW1…", amount: "£325,000", status: { l: "Listed", c: "blue" }, days: 12, mgr: "Mary" },
    { name: "Patricia Adeyemi", addr: "14 Beechwood Close, Hackney, Lond…", amount: "£298,500", status: { l: "Viewing", c: "indigo" }, days: 27, mgr: null },
    { name: "Marcus Williams", addr: "11 Rowan Court, Lewisham, London…", amount: "£275,000", status: { l: "Offer", c: "pink" }, days: 41, mgr: "Elena" },
    { name: "Sade Adekunle", addr: "5 Birchwood Mews, Brixton, London…", amount: "£312,750", status: { l: "Exchange", c: "amber" }, days: 64, mgr: "Dionne" },
    { name: "Oliver Hartley", addr: "29 Sycamore Drive, Greenwich, Lond…", amount: "£260,000", status: { l: "Comp.", c: "green" }, days: 88, mgr: "Mary" },
    { name: "Niamh O'Brien", addr: "8 Elderflower Lane, Walthamstow, L…", amount: "£289,000", status: { l: "Listed", c: "blue" }, days: 4, mgr: null },
  ];

  return (
    <div className="pd-view">
      <div className="pd-page-head">
        <h1 className="pd-page-title">Case Management</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div className="pd-tabs" style={{ marginBottom: 0 }}>
          {["Support", "Staircasing", "Resales"].map((t) => (
            <button key={t} className={`pd-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="pd-period-switch">
          {(["All", "Mine"] as const).map((s) => (
            <button key={s} className={scope === s ? "on" : ""} onClick={() => setScope(s)} style={{ width: "auto", padding: "0 10px" }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {tab === "Support" && (
        <>
          <div className="pd-grid c-2-1" style={{ marginBottom: 16 }}>
            <div className="pd-card">
              <div className="pd-card-head">
                <div>
                  <div className="pd-card-title">Total Enquiries</div>
                  <div style={{ fontSize: 12, color: "var(--pd-ink-3)", marginTop: 8 }}>Enquiries</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
                    <span className="pd-stat-value" style={{ color: "var(--pd-magenta)" }}>15</span>
                    <span className="pd-pill pink tiny">↓ 5%</span>
                  </div>
                </div>
                <div className="pd-period-switch">
                  {(["Y", "Q", "M"] as const).map((p) => (
                    <button key={p} className={period === p ? "on" : ""} onClick={() => setPeriod(p)}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <AreaChart data={dataMap[period]} months={months[period]} height={170} />
            </div>

            <div className="pd-card">
              <div className="pd-card-title" style={{ marginBottom: 12 }}>Enquiry Type</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                <DonutChart data={[{ value: 9, color: "#5b3fd6" }, { value: 6, color: "#ff8eb6" }]} size={110} thickness={16} />
                <div className="pd-legend">
                  <div className="pd-legend-row"><span className="pd-legend-dot" style={{ background: "#5b3fd6" }} />Staircasing</div>
                  <div className="pd-legend-row"><span className="pd-legend-dot" style={{ background: "#ff8eb6" }} />Resales</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pd-card">
            <div className="pd-card-head">
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <div className="pd-card-title">Enquiries</div>
                <span className="pd-pill indigo tiny">{enquiries.length} total enquiries</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div className="pd-search-input"><Icon.Search style={{ width: 13, height: 13 }} />Search</div>
                <button className="pd-btn icon"><Icon.Filter style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Columns style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Download style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn primary"><Icon.Plus style={{ width: 13, height: 13 }} />Add enquiry</button>
              </div>
            </div>

            <div className="pd-table-wrap"><table className="pd-table">
              <thead>
                <tr>
                  <th style={{ width: 24 }}><input type="checkbox" /></th>
                  <th>Name</th><th>Address</th><th>Type</th><th>Process</th><th>Signed up</th><th>Started in...</th><th>Enquiry date</th><th>Support</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((r, i) => {
                  const Ic = Icon[r.ic];
                  return (
                    <tr key={i}>
                      <td><input type="checkbox" /></td>
                      <td className="name">{r.name}</td>
                      <td>{r.addr}</td>
                      <td><span style={{ color: "var(--pd-ink-3)" }}><Ic style={{ width: 14, height: 14 }} /></span></td>
                      <td><span className={`pd-pill ${r.proc.c} tiny`}>{r.proc.l}</span></td>
                      <td>{r.signed}</td>
                      <td className="pd-empty">—</td>
                      <td>{r.date}</td>
                      <td>
                        <span className="pd-avatar-row">
                          <span className="pd-avatar" style={{ background: r.sup.c }}>{r.sup.i}</span>
                          {r.sup.n}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table></div>
          </div>
        </>
      )}

      {tab === "Staircasing" && (
        <>
          <div className="pd-grid c-2-1" style={{ marginBottom: 16 }}>
            <div className="pd-card">
              <div className="pd-card-head">
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <div className="pd-card-title">Staircasing</div>
                  <span className="pd-pill gray tiny">38 total</span>
                </div>
              </div>
              <div className="pd-grid c-3" style={{ marginTop: 4 }}>
                {[
                  { l: "Active", v: 19, sub: "Open cases", pct: 50, active: true },
                  { l: "Completed", v: 18, sub: "Completed cases", pct: 47, active: false },
                  { l: "Archived", v: 1, sub: "Archived cases", pct: 3, active: false },
                ].map((c) => (
                  <div
                    key={c.l}
                    style={{
                      border: c.active ? "1px solid var(--pd-primary)" : "1px solid var(--pd-line)",
                      background: c.active ? "var(--pd-primary-soft)" : "white",
                      borderRadius: 12,
                      padding: 14,
                    }}
                  >
                    <div className="pd-stat-label">{c.l}</div>
                    <div className="pd-stat-value" style={{ marginTop: 4 }}>{c.v}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, fontSize: 11, color: "var(--pd-ink-3)" }}>
                      <span>{c.sub}</span>
                      <span style={{ color: "var(--pd-ink)", fontWeight: 500 }}>{c.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: "var(--pd-line)", borderRadius: 99, marginTop: 6, overflow: "hidden" }}>
                      <div style={{ width: c.pct + "%", height: "100%", background: "var(--pd-ink)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pd-card" style={{ display: "flex", flexDirection: "column" }}>
              <div className="pd-card-head">
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <div className="pd-card-title">Active Cases</div>
                  <span style={{ fontSize: 11, color: "var(--pd-ink-3)" }}>· 19 across stages</span>
                </div>
              </div>
              <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                  <BarChart
                    groups={["Det", "AML", "MOS", "Pre", "Post"]}
                    series={[{ name: "Stages", color: "#5b3fd6", values: [3, 4, 6, 5, 1] }]}
                    groupColors={["#7eb6e8", "#7c5cf0", "#a78bfa", "#f4a8c5", "#fcd34d"]}
                    yTicks={4}
                    max={8}
                    fillHeight
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pd-card">
            <div className="pd-card-head">
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <div className="pd-card-title">Active Cases</div>
                <span className="pd-pill indigo tiny">19</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div className="pd-search-input"><Icon.Search style={{ width: 13, height: 13 }} />Search…</div>
                <button className="pd-btn icon"><Icon.Columns style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Filter style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Sort style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Expand style={{ width: 14, height: 14 }} /></button>
              </div>
            </div>

            <div className="pd-table-wrap"><table className="pd-table">
              <thead>
                <tr>
                  <th style={{ width: 24 }}><input type="checkbox" /></th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Transaction size</th>
                  <th>Status</th>
                  <th>Days since start</th>
                  <th>Case manager</th>
                </tr>
              </thead>
              <tbody>
                {staircasingCases.map((r, i) => (
                  <tr key={i}>
                    <td><input type="checkbox" /></td>
                    <td className="name">{r.name}</td>
                    <td>{r.addr}</td>
                    <td>{r.amount}</td>
                    <td>
                      <span className={`pd-pill ${r.status.c} tiny`} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        {r.status.l}
                        <Icon.Caret style={{ width: 10, height: 10, opacity: 0.7 }} />
                      </span>
                    </td>
                    <td>{r.days}</td>
                    <td>
                      {r.mgr ? (
                        <span className="pd-pill gray tiny" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                          {r.mgr}
                          <Icon.Caret style={{ width: 10, height: 10, opacity: 0.7 }} />
                        </span>
                      ) : (
                        <span className="pd-pill gray tiny" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--pd-ink-4)" }}>
                          <Icon.Caret style={{ width: 10, height: 10, opacity: 0.7 }} />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 4px 4px", fontSize: 12, color: "var(--pd-ink-3)" }}>
              <span>Showing 1 to 6 of 19</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button className="pd-btn icon" style={{ width: 26, height: 26 }}><Icon.Caret style={{ width: 12, height: 12, transform: "rotate(90deg)" }} /></button>
                <span style={{ fontWeight: 500, color: "var(--pd-ink)" }}>1 / 4</span>
                <button className="pd-btn icon" style={{ width: 26, height: 26 }}><Icon.Caret style={{ width: 12, height: 12, transform: "rotate(-90deg)" }} /></button>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "Resales" && (
        <>
          <div className="pd-grid c-2-1" style={{ marginBottom: 16 }}>
            <div className="pd-card">
              <div className="pd-card-head">
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <div className="pd-card-title">Resales</div>
                  <span className="pd-pill gray tiny">24 total</span>
                </div>
              </div>
              <div className="pd-grid c-3" style={{ marginTop: 4 }}>
                {[
                  { l: "Active", v: 11, sub: "Open cases", pct: 46, active: true },
                  { l: "Completed", v: 12, sub: "Completed cases", pct: 50, active: false },
                  { l: "Archived", v: 1, sub: "Archived cases", pct: 4, active: false },
                ].map((c) => (
                  <div
                    key={c.l}
                    style={{
                      border: c.active ? "1px solid var(--pd-primary)" : "1px solid var(--pd-line)",
                      background: c.active ? "var(--pd-primary-soft)" : "white",
                      borderRadius: 12,
                      padding: 14,
                    }}
                  >
                    <div className="pd-stat-label">{c.l}</div>
                    <div className="pd-stat-value" style={{ marginTop: 4 }}>{c.v}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, fontSize: 11, color: "var(--pd-ink-3)" }}>
                      <span>{c.sub}</span>
                      <span style={{ color: "var(--pd-ink)", fontWeight: 500 }}>{c.pct}%</span>
                    </div>
                    <div style={{ height: 4, background: "var(--pd-line)", borderRadius: 99, marginTop: 6, overflow: "hidden" }}>
                      <div style={{ width: c.pct + "%", height: "100%", background: "var(--pd-ink)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pd-card" style={{ display: "flex", flexDirection: "column" }}>
              <div className="pd-card-head">
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <div className="pd-card-title">Active Cases</div>
                  <span style={{ fontSize: 11, color: "var(--pd-ink-3)" }}>· 11 across stages</span>
                </div>
              </div>
              <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0 }}>
                  <BarChart
                    groups={["List", "View", "Off", "Exch", "Comp"]}
                    series={[{ name: "Stages", color: "#5b3fd6", values: [3, 2, 3, 2, 1] }]}
                    groupColors={["#7eb6e8", "#7c5cf0", "#f4a8c5", "#fcd34d", "#86d3a4"]}
                    yTicks={4}
                    max={6}
                    fillHeight
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pd-card">
            <div className="pd-card-head">
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <div className="pd-card-title">Active Cases</div>
                <span className="pd-pill indigo tiny">11</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div className="pd-search-input"><Icon.Search style={{ width: 13, height: 13 }} />Search…</div>
                <button className="pd-btn icon"><Icon.Columns style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Filter style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Sort style={{ width: 14, height: 14 }} /></button>
                <button className="pd-btn icon"><Icon.Expand style={{ width: 14, height: 14 }} /></button>
              </div>
            </div>

            <div className="pd-table-wrap"><table className="pd-table">
              <thead>
                <tr>
                  <th style={{ width: 24 }}><input type="checkbox" /></th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Sale price</th>
                  <th>Status</th>
                  <th>Days since listed</th>
                  <th>Case manager</th>
                </tr>
              </thead>
              <tbody>
                {resalesCases.map((r, i) => (
                  <tr key={i}>
                    <td><input type="checkbox" /></td>
                    <td className="name">{r.name}</td>
                    <td>{r.addr}</td>
                    <td>{r.amount}</td>
                    <td>
                      <span className={`pd-pill ${r.status.c} tiny`} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        {r.status.l}
                        <Icon.Caret style={{ width: 10, height: 10, opacity: 0.7 }} />
                      </span>
                    </td>
                    <td>{r.days}</td>
                    <td>
                      {r.mgr ? (
                        <span className="pd-pill gray tiny" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                          {r.mgr}
                          <Icon.Caret style={{ width: 10, height: 10, opacity: 0.7 }} />
                        </span>
                      ) : (
                        <span className="pd-pill gray tiny" style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--pd-ink-4)" }}>
                          <Icon.Caret style={{ width: 10, height: 10, opacity: 0.7 }} />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 4px 4px", fontSize: 12, color: "var(--pd-ink-3)" }}>
              <span>Showing 1 to 6 of 11</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button className="pd-btn icon" style={{ width: 26, height: 26 }}><Icon.Caret style={{ width: 12, height: 12, transform: "rotate(90deg)" }} /></button>
                <span style={{ fontWeight: 500, color: "var(--pd-ink)" }}>1 / 2</span>
                <button className="pd-btn icon" style={{ width: 26, height: 26 }}><Icon.Caret style={{ width: 12, height: 12, transform: "rotate(-90deg)" }} /></button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ───────────────── Reporting ───────────────── */
export function ReportingView() {
  const [tab, setTab] = useState("Monthly Performance");
  const [years, setYears] = useState<Record<string, boolean>>({ "21/22": false, "22/23": false, "23/24": true, "24/25": true, "25/26": true });

  const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const colors: Record<string, string> = { "21/22": "#94a3b8", "22/23": "#94a3b8", "23/24": "#21c0ff", "24/25": "#5b3fd6", "25/26": "#ff2e7d" };
  const instructionData: Record<string, (number | null)[]> = {
    "23/24": [185, 225, null, null, 358, 420, 520, 565, 620, 640, 720, 895],
    "24/25": [180, 205, null, null, 395, 450, 540, 580, 650, 710, 760, 850],
    "25/26": [195, 235, null, null, 440, 485, 565, 610, 670, 755, 830, null],
  };
  const completionData: Record<string, (number | null)[]> = {
    "23/24": [70, 130, null, null, 335, 370, 410, 470, 495, 560, 605, 670],
    "24/25": [105, 180, null, null, 310, 365, 425, 495, 540, 580, 625, 695],
    "25/26": [90, 200, null, null, 295, 330, 440, 510, 555, 610, 705, null],
  };
  const activeYears = Object.keys(years).filter((y) => years[y]);
  const seriesA = activeYears.map((y) => ({ name: y, color: colors[y], values: instructionData[y] || months.map(() => null) }));
  const seriesB = activeYears.map((y) => ({ name: y, color: colors[y], values: completionData[y] || months.map(() => null) }));

  return (
    <div className="pd-view">
      <div className="pd-page-head"><h1 className="pd-page-title">Reporting</h1></div>
      <div className="pd-tabs">
        {["SOM Forecast", "Weekly Ops", "Monthly Performance", "Trends", "Monthly Summary"].map((t) => (
          <button key={t} className={`pd-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      <div style={{ marginBottom: 12 }}>
        <h2 style={{ fontSize: 17, fontWeight: 600, margin: 0 }}>Monthly Performance</h2>
        <div className="pd-page-sub">Volume, completions and receipt tracking by month</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 12, color: "var(--pd-ink-3)", fontWeight: 400 }}>Financial Years:</span>
        <div className="pd-chip-row">
          {Object.keys(years).map((y) => {
            const isOn = years[y];
            const cMap: Record<string, string> = { "23/24": "on-blue", "24/25": "on-purple", "25/26": "on-pink" };
            return (
              <button key={y} className={`pd-chip ${isOn ? cMap[y] || "" : ""}`} onClick={() => setYears({ ...years, [y]: !years[y] })}>
                {y}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pd-caption">A — Volume comparison</div>

      <div className="pd-grid c-2">
        <div className="pd-card">
          <div className="pd-card-head"><div className="pd-card-title">Instructions by Month</div></div>
          <BarChart groups={months} series={seriesA} height={200} max={1000} />
          <div style={{ display: "flex", gap: 16, fontSize: 11, marginTop: 6, justifyContent: "center" }}>
            {activeYears.map((y) => (
              <span key={y} style={{ color: colors[y], fontWeight: 600 }}>■ {y}</span>
            ))}
          </div>
        </div>
        <div className="pd-card">
          <div className="pd-card-head"><div className="pd-card-title">Completions by Month</div></div>
          <BarChart groups={months} series={seriesB} height={200} max={800} />
          <div style={{ display: "flex", gap: 16, fontSize: 11, marginTop: 6, justifyContent: "center" }}>
            {activeYears.map((y) => (
              <span key={y} style={{ color: colors[y], fontWeight: 600 }}>■ {y}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────── Insights ───────────────── */
export function InsightsView() {
  type Cat = "gray" | "green" | "pink";
  type Tx = "indigo" | "green" | "amber";
  const residents: { name: string; email: string; cat: { l: string; c: Cat }; tx: { l: string; c: Tx } | null; date: string; unit: string; pct: number }[] = [
    { name: "James Wilson", email: "james.wilson@example.com", cat: { l: "Exploring", c: "gray" }, tx: null, date: "18/04/26", unit: "Flat 2, 14 Glenloch Road", pct: 30 },
    { name: "David Chen", email: "david.chen@example.com", cat: { l: "In progress", c: "gray" }, tx: { l: "Mortgage offer received", c: "indigo" }, date: "10/04/26", unit: "15 Glenloch Road", pct: 76 },
    { name: "Sarah Thompson", email: "sarah.thompson@example.com", cat: { l: "Ready to transact", c: "gray" }, tx: { l: "Valuation received", c: "green" }, date: "05/04/26", unit: "Flat 1, 14 Glenloch Road", pct: 85 },
    { name: "Maria Garcia", email: "maria.garcia@example.com", cat: { l: "Ready to transact", c: "gray" }, tx: { l: "Offer submitted", c: "amber" }, date: "20/03/26", unit: "Flat 3, 14 Glenloch Road", pct: 92 },
    { name: "Emma Roberts", email: "emma.roberts@example.com", cat: { l: "Completed", c: "green" }, tx: { l: "Completion", c: "green" }, date: "14/02/26", unit: "Apt 1, Riverside House", pct: 100 },
    { name: "Tom Baker", email: "tom.baker@example.com", cat: { l: "New", c: "pink" }, tx: null, date: "05/01/26", unit: "Apt 2, Riverside House", pct: 20 },
    { name: "Lisa Patel", email: "lisa.patel@example.com", cat: { l: "Ready to transact", c: "gray" }, tx: { l: "RICS survey booked", c: "amber" }, date: "22/11/25", unit: "Apt 3, Riverside House", pct: 65 },
    { name: "Tim Otto", email: "timothydavidotto@gmail.com", cat: { l: "Ready to transact", c: "gray" }, tx: { l: "RICS survey booked", c: "amber" }, date: "12/05/25", unit: "50a Glenloch Road", pct: 70 },
  ];
  const stats: { i: IconKey; l: string; v: string; delta?: { v: string; up: boolean; sub: string } }[] = [
    { i: "CaseMgmt", l: "Total residents", v: "847" },
    { i: "Enquiries", l: "Signed up this month", v: "24", delta: { v: "12%", up: true, sub: "vs last month" } },
    { i: "Pound", l: "Average salary", v: "£46,800", delta: { v: "18%", up: false, sub: "vs national avg" } },
    { i: "PiggyBank", l: "Average savings", v: "£18,400", delta: { v: "32%", up: true, sub: "vs national avg" } },
  ];

  return (
    <div className="pd-view">
      <div className="pd-page-head">
        <div>
          <h1 className="pd-page-title">Insights</h1>
          <div className="pd-page-sub">Residents signed up to Stairpay</div>
        </div>
        <div className="pd-search-input"><Icon.Search style={{ width: 13, height: 13 }} />Search name, email, address</div>
      </div>

      <div className="pd-grid c-4" style={{ marginBottom: 16 }}>
        {stats.map((s, i) => {
          const I = Icon[s.i];
          return (
            <div key={i} className="pd-card">
              <div className="pd-stat-label">{s.l}</div>
              <div className="pd-stat-value" style={s.delta ? undefined : { fontSize: 36 }}>{s.v}</div>
              {s.delta && (
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--pd-ink-3)" }}>
                  <span style={{ color: s.delta.up ? "var(--pd-green)" : "var(--pd-red)", fontWeight: 500 }}>
                    {s.delta.up ? "↑" : "↓"} {s.delta.v}
                  </span>
                  <span>{s.delta.sub}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pd-card" style={{ padding: "4px 6px" }}>
        <div className="pd-table-wrap"><table className="pd-table">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Transaction status</th><th>Sign-up date</th><th>Unit</th><th style={{ textAlign: "right" }}>Profile</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((r, i) => (
              <tr key={i}>
                <td className="name">{r.name}</td>
                <td>{r.email}</td>
                <td>{r.tx ? <span className={`pd-pill ${r.tx.c} tiny`}>{r.tx.l}</span> : <span className="pd-empty">—</span>}</td>
                <td>{r.date}</td>
                <td>{r.unit}</td>
                <td style={{ textAlign: "right" }}>
                  <span className="pd-progress"><div style={{ width: r.pct + "%" }} /></span>
                  <span style={{ marginLeft: 8, fontSize: 11, color: "var(--pd-ink-3)", fontWeight: 400 }}>{r.pct}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table></div>
      </div>
    </div>
  );
}

/* ───────────────── Listings ───────────────── */
export function ListingsView() {
  type StatusColor = "green" | "amber" | "indigo" | "gray";
  const listings: { addr: string; dev: string; beds: number; price: string; share: string; rent: string; status: { l: string; c: StatusColor }; viewings: number[] }[] = [
    { addr: "14 Beechwood Close", dev: "Glenloch Gardens", beds: 2, price: "£295,000", share: "50%", rent: "£648/mo", status: { l: "Live", c: "green" }, viewings: [3, 5, 4, 6, 8, 7, 9, 10] },
    { addr: "3 Rosamund Close", dev: "Maple Gardens", beds: 3, price: "£345,000", share: "65%", rent: "£720/mo", status: { l: "Reserved", c: "amber" }, viewings: [4, 4, 5, 7, 7, 6, 8, 9] },
    { addr: "11 Rowan Court", dev: "Maple Gardens", beds: 1, price: "£198,000", share: "40%", rent: "£492/mo", status: { l: "Live", c: "green" }, viewings: [2, 3, 5, 4, 6, 7, 9, 11] },
    { addr: "6 Chestnut Grove", dev: "Glenloch Gardens", beds: 2, price: "£275,000", share: "55%", rent: "£612/mo", status: { l: "Under offer", c: "indigo" }, viewings: [5, 6, 5, 7, 8, 9, 10, 12] },
    { addr: "22 Linden Way", dev: "Riverside House", beds: 2, price: "£310,000", share: "50%", rent: "£665/mo", status: { l: "Live", c: "green" }, viewings: [3, 4, 5, 4, 5, 6, 7, 9] },
    { addr: "50a Glenloch Road", dev: "Glenloch Gardens", beds: 4, price: "£420,000", share: "70%", rent: "£840/mo", status: { l: "Live", c: "green" }, viewings: [4, 5, 6, 7, 8, 9, 11, 13] },
    { addr: "Apt 3, Riverside Hs", dev: "Riverside House", beds: 1, price: "£185,000", share: "35%", rent: "£478/mo", status: { l: "Draft", c: "gray" }, viewings: [1, 2, 2, 3, 4, 3, 5, 6] },
  ];

  return (
    <div className="pd-view">
      <div className="pd-page-head">
        <h1 className="pd-page-title">Listings</h1>
        <button className="pd-btn primary"><Icon.Plus style={{ width: 13, height: 13 }} />Publish listing</button>
      </div>

      <div className="pd-grid c-4" style={{ marginBottom: 16 }}>
        <div className="pd-card">
          <div className="pd-stat-label">Live listings</div>
          <div className="pd-stat-value">42</div>
          <div style={{ fontSize: 11, color: "var(--pd-green)", marginTop: 2 }}>+8 this month</div>
        </div>
        <div className="pd-card">
          <div className="pd-stat-label">Avg viewings / week</div>
          <div className="pd-stat-value">7.4</div>
          <div style={{ fontSize: 11, color: "var(--pd-green)", marginTop: 2 }}>+1.2 vs prev</div>
        </div>
        <div className="pd-card">
          <div className="pd-stat-label">Median price</div>
          <div className="pd-stat-value">£295k</div>
          <div style={{ fontSize: 11, color: "var(--pd-ink-3)", marginTop: 2 }}>across 7 developments</div>
        </div>
        <div className="pd-card">
          <div className="pd-stat-label">Avg time to offer</div>
          <div className="pd-stat-value">23d</div>
          <div style={{ fontSize: 11, color: "var(--pd-red)", marginTop: 2 }}>+2d vs target</div>
        </div>
      </div>

      <div className="pd-card">
        <div className="pd-card-head">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div className="pd-card-title">All listings</div>
            <span className="pd-pill indigo tiny">{listings.length} active</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div className="pd-search-input"><Icon.Search style={{ width: 13, height: 13 }} />Search address</div>
            <button className="pd-btn icon"><Icon.Filter style={{ width: 14, height: 14 }} /></button>
            <button className="pd-btn icon"><Icon.Sort style={{ width: 14, height: 14 }} /></button>
          </div>
        </div>
        <div className="pd-table-wrap"><table className="pd-table">
          <thead>
            <tr>
              <th style={{ width: 24 }}><input type="checkbox" /></th>
              <th>Address</th><th>Development</th><th>Beds</th>
              <th style={{ textAlign: "right" }}>Full price</th><th>Share</th>
              <th style={{ textAlign: "right" }}>Rent on retained</th><th>Status</th>
              <th style={{ width: 110 }}>Viewings (8w)</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((r, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td className="name">{r.addr}</td>
                <td>{r.dev}</td>
                <td>{r.beds}</td>
                <td style={{ textAlign: "right", fontWeight: 400, color: "var(--pd-ink)" }}>{r.price}</td>
                <td>{r.share}</td>
                <td style={{ textAlign: "right" }}>{r.rent}</td>
                <td><span className={`pd-pill ${r.status.c} tiny`}>{r.status.l}</span></td>
                <td><Spark data={r.viewings} color="#5b3fd6" height={28} /></td>
              </tr>
            ))}
          </tbody>
        </table></div>
      </div>
    </div>
  );
}

/* ───────────────── Enquiries ───────────────── */
export function EnquiriesView() {
  type StageColor = "green" | "indigo" | "amber" | "gray" | "pink";
  const stats: { i: IconKey; l: string; v: string; sub?: string; color?: string; highlight?: boolean }[] = [
    { i: "Mail", l: "All enquiries", v: "12", color: "var(--pd-ink)" },
    { i: "Cal", l: "New today", v: "0", sub: "received today", color: "var(--pd-ink)" },
    { i: "Home", l: "At reservation", v: "2", color: "var(--pd-primary)" },
    { i: "Warn", l: "Stalled", v: "11", sub: "in stage > 7 days", color: "var(--pd-amber)", highlight: true },
  ];
  const rows: { stage: { l: string; c: StageColor }; next: string; days: number; lead: string; listing: string; dev: string; mgr: string; recv: string }[] = [
    { stage: { l: "Completion", c: "green" }, next: "Ready to advance", days: 62, lead: "Tim Otto", listing: "2-bed apartment at M…", dev: "Maple Gardens", mgr: "James Carter", recv: "02/03/26" },
    { stage: { l: "Reserved", c: "indigo" }, next: "Ready to advance", days: 62, lead: "Jane Smith", listing: "2-bed apartment at M…", dev: "Maple Gardens", mgr: "James Carter", recv: "02/03/26" },
    { stage: { l: "Completion", c: "green" }, next: "Ready to advance", days: 63, lead: "Sophie Allen", listing: "2-bed apartment at M…", dev: "Maple Gardens", mgr: "Sarah Mitchell", recv: "01/03/26" },
    { stage: { l: "Contacted", c: "indigo" }, next: "Contact method recorded", days: 67, lead: "James Carter", listing: "2-bed apartment at M…", dev: "Maple Gardens", mgr: "James Carter", recv: "25/02/26" },
    { stage: { l: "Broker", c: "amber" }, next: "Preferred share recorded", days: 71, lead: "Priya Sharma", listing: "3-bed apartment at M…", dev: "Maple Gardens", mgr: "James Carter", recv: "20/02/26" },
    { stage: { l: "Qualified", c: "amber" }, next: "Application data complete", days: 75, lead: "Tom Wright", listing: "2-bed apartment at M…", dev: "Maple Gardens", mgr: "James Carter", recv: "12/02/26" },
    { stage: { l: "Lost", c: "gray" }, next: "", days: 83, lead: "Daniel Moore", listing: "2-bed apartment at M…", dev: "Maple Gardens", mgr: "James Carter", recv: "10/02/26" },
    { stage: { l: "Viewing", c: "pink" }, next: "Ready to advance", days: 83, lead: "Hannah Lewis", listing: "2-bed apartment at M…", dev: "Maple Gardens", mgr: "James Carter", recv: "02/02/26" },
  ];

  return (
    <div className="pd-view">
      <div className="pd-page-head">
        <h1 className="pd-page-title">Enquiries</h1>
        <button className="pd-btn primary"><Icon.Plus style={{ width: 13, height: 13 }} />New enquiry</button>
      </div>

      <div className="pd-grid c-4" style={{ marginBottom: 16 }}>
        {stats.map((s, i) => {
          const I = Icon[s.i];
          return (
            <div key={i} className="pd-card" style={s.highlight ? { borderColor: "#f0c97b", background: "#fffaef" } : {}}>
              <div className="pd-stat-label">{s.l}</div>
              <div className="pd-stat-value" style={{ color: s.color }}>{s.v}</div>
              {s.sub && <div style={{ fontSize: 11, color: "var(--pd-ink-3)", marginTop: 2 }}>{s.sub}</div>}
            </div>
          );
        })}
      </div>

      <div className="pd-card">
        <div className="pd-card-head">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div className="pd-card-title">All enquiries</div>
            <span className="pd-pill indigo tiny">{rows.length} enquiries</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div className="pd-search-input"><Icon.Search style={{ width: 13, height: 13 }} />Search leads, listings…</div>
            <button className="pd-btn icon"><Icon.Filter style={{ width: 14, height: 14 }} /></button>
            <button className="pd-btn icon"><Icon.Download style={{ width: 14, height: 14 }} /></button>
          </div>
        </div>
        <div className="pd-table-wrap"><table className="pd-table">
          <thead>
            <tr>
              <th style={{ width: 24 }}><input type="checkbox" /></th>
              <th>Stage</th><th>Next action</th><th>Days in stage</th><th>Lead</th><th>Listing</th><th>Development</th><th>Case manager</th><th>Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td><span className={`pd-pill ${r.stage.c} tiny`}>{r.stage.l}</span></td>
                <td style={{ color: r.next ? "var(--pd-green)" : "var(--pd-ink-4)" }}>
                  {r.next ? (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <Icon.Check style={{ width: 12, height: 12 }} />{r.next}
                    </span>
                  ) : "—"}
                </td>
                <td style={{ color: r.days > 60 ? "var(--pd-red)" : "var(--pd-ink-2)", fontWeight: 400 }}>{r.days}d</td>
                <td className="name">{r.lead}</td>
                <td>{r.listing}</td>
                <td>{r.dev}</td>
                <td>{r.mgr}</td>
                <td>{r.recv}</td>
              </tr>
            ))}
          </tbody>
        </table></div>
      </div>
    </div>
  );
}

/* ───────────────── Units ───────────────── */
export function UnitsView() {
  const [period, setPeriod] = useState<"Y" | "Q" | "M">("Y");
  const data: Record<typeof period, number[]> = {
    Y: [988, 992, 990, 1004, 1003, 999, 1014, 1011, 1008, 1006],
    Q: [1002, 1008, 1006, 1009, 1004, 1011, 1007, 1006],
    M: [1003, 1007, 1004, 1008, 1005, 1010, 1006],
  };
  const months: Record<typeof period, string[]> = {
    Y: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT"],
    Q: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
    M: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  };
  const units = [
    { addr: "Flat 1, 27 Glenloch Ro", addr2: "Belsize Park", pc: "NW3 4DL", dev: "Glenloch Gardens", rent: "£784", share: "60%", val: "£310,000", occ: "Tim Otto", ch: 5.08, up: true },
    { addr: "Flat 2, 27 Glenloch Ro", addr2: "Belsize Park", pc: "NW3 4DL", dev: "Glenloch Gardens", rent: "£820", share: "65%", val: "£299,000", occ: "Sarah Chen", ch: 4.91, up: true },
    { addr: "Flat 3, 27 Glenloch Ro", addr2: "Belsize Park", pc: "NW3 4DL", dev: "Glenloch Gardens", rent: "£758", share: "55%", val: "£295,000", occ: "James Wilson", ch: 4.84, up: false },
    { addr: "Flat 4, 27 Glenloch Ro", addr2: "Belsize Park", pc: "NW3 4DL", dev: "Glenloch Gardens", rent: "£890", share: "70%", val: "£288,000", occ: "Emma Thompson", ch: 4.73, up: true },
    { addr: "Flat 5, 27 Glenloch Ro", addr2: "Belsize Park", pc: "NW3 4DL", dev: "Glenloch Gardens", rent: "£720", share: "50%", val: "£298,000", occ: "—", ch: 5.86, up: false },
    { addr: "Flat 6, 29 Glenloch Ro", addr2: "Belsize Park", pc: "NW3 4DL", dev: "Glenloch Gardens", rent: "£845", share: "65%", val: "£278,000", occ: "Michael Brown", ch: 4.91, up: true },
  ];
  return (
    <div className="pd-view">
      <div className="pd-page-head">
        <h1 className="pd-page-title">Units</h1>
        <button className="pd-btn primary"><Icon.Plus style={{ width: 13, height: 13 }} />Generate HPI statements</button>
      </div>

      <div className="pd-grid c-2-1" style={{ marginBottom: 16 }}>
        <div className="pd-card">
          <div className="pd-card-head">
            <div>
              <div className="pd-card-title">Total units</div>
              <div style={{ fontSize: 12, color: "var(--pd-ink-3)", marginTop: 8 }}>Active units in stock</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 2 }}>
                <span className="pd-stat-value">1,006</span>
                <span style={{ fontSize: 11, color: "var(--pd-green)", fontWeight: 500 }}>↑ 12</span>
                <span style={{ fontSize: 11, color: "var(--pd-ink-3)" }}>YTD</span>
              </div>
            </div>
            <div className="pd-period-switch">
              {(["Y", "Q", "M"] as const).map((p) => (
                <button key={p} className={period === p ? "on" : ""} onClick={() => setPeriod(p)}>{p}</button>
              ))}
            </div>
          </div>
          <AreaChart data={data[period]} months={months[period]} height={115} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 0 }}>
          <div className="pd-card">
            <div className="pd-stat-label">Units with short leases</div>
            <div className="pd-stat-value" style={{ marginTop: 4 }}>42</div>
            <div style={{ marginTop: 8, fontSize: 11, color: "var(--pd-ink-3)" }}>
              <span style={{ color: "var(--pd-red)", fontWeight: 500 }}>↑ 6</span> since last quarter · &lt;80 yrs remaining
            </div>
          </div>
          <div className="pd-card">
            <div className="pd-stat-label">Staircasing restrictions in lease</div>
            <div className="pd-stat-value" style={{ marginTop: 4 }}>17</div>
            <div style={{ marginTop: 8, fontSize: 11, color: "var(--pd-ink-3)" }}>
              <span style={{ color: "var(--pd-amber)", fontWeight: 500 }}>2.0%</span> of total stock · review required
            </div>
          </div>
        </div>
      </div>

      <div className="pd-card">
        <div className="pd-card-head">
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div className="pd-card-title">All units</div>
            <span className="pd-pill indigo tiny">1,006 active units</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div className="pd-search-input"><Icon.Search style={{ width: 13, height: 13 }} />Search</div>
            <button className="pd-btn icon"><Icon.Filter style={{ width: 14, height: 14 }} /></button>
            <button className="pd-btn icon"><Icon.Sort style={{ width: 14, height: 14 }} /></button>
            <button className="pd-btn"><Icon.Download style={{ width: 14, height: 14 }} />Export</button>
          </div>
        </div>
        <div className="pd-table-wrap"><table className="pd-table">
          <thead>
            <tr>
              <th style={{ width: 24 }}><input type="checkbox" /></th>
              <th>Address line 1</th><th>Address line 2</th><th>Postcode</th><th>Development name</th>
              <th style={{ textAlign: "right" }}>Rent</th><th>Retained share</th>
              <th style={{ textAlign: "right" }}>HPI valuation</th><th>Occupant</th>
              <th>HPI change</th><th>Lease uploaded</th>
            </tr>
          </thead>
          <tbody>
            {units.map((r, i) => (
              <tr key={i}>
                <td><input type="checkbox" /></td>
                <td className="name">{r.addr}</td>
                <td>{r.addr2}</td>
                <td>{r.pc}</td>
                <td>{r.dev}</td>
                <td style={{ textAlign: "right" }}>{r.rent}</td>
                <td>{r.share}</td>
                <td style={{ textAlign: "right", fontWeight: 400, color: "var(--pd-ink)" }}>{r.val}</td>
                <td>{r.occ}</td>
                <td>
                  <span className={`pd-pill ${r.ch === 5.86 ? "red" : "green"} tiny`}>
                    {r.ch === 5.86 ? "↓" : "↑"} {Math.abs(r.ch).toFixed(2)}%
                  </span>
                </td>
                <td><span className={`pd-pill ${r.up ? "green" : "red"} tiny`}>{r.up ? "Uploaded" : "Not uploaded"}</span></td>
              </tr>
            ))}
          </tbody>
        </table></div>
      </div>
    </div>
  );
}

/* ───────────────── Developments ───────────────── */
export function DevelopmentsView() {
  const devs = [
    { name: "Glenloch Gardens", addr: "Belsize Park, NW3", units: 24, occ: 96, rev: "£18.4k/mo", delta: 4.2, trend: [12, 14, 15, 17, 18, 19, 21, 22, 22, 23, 24, 24] },
    { name: "Maple Gardens", addr: "Walthamstow, E17", units: 18, occ: 89, rev: "£12.1k/mo", delta: 2.1, trend: [8, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 18] },
    { name: "Riverside House", addr: "Greenwich, SE10", units: 32, occ: 78, rev: "£21.7k/mo", delta: -1.4, trend: [22, 24, 26, 27, 28, 29, 30, 30, 31, 31, 32, 32] },
    { name: "Linden Terrace", addr: "Brixton, SW2", units: 12, occ: 100, rev: "£9.6k/mo", delta: 5.8, trend: [4, 6, 7, 8, 9, 10, 11, 11, 12, 12, 12, 12] },
    { name: "Oakfield Place", addr: "Hackney, E8", units: 28, occ: 82, rev: "£17.2k/mo", delta: 1.0, trend: [18, 19, 21, 22, 23, 24, 25, 26, 26, 27, 28, 28] },
    { name: "Beacon Hill Mews", addr: "Tooting, SW17", units: 16, occ: 94, rev: "£11.8k/mo", delta: 3.4, trend: [10, 11, 12, 13, 14, 15, 15, 16, 16, 16, 16, 16] },
  ];

  return (
    <div className="pd-view">
      <div className="pd-page-head">
        <div>
          <h1 className="pd-page-title">Developments</h1>
          <div className="pd-page-sub">130 units across 6 active sites</div>
        </div>
        <button className="pd-btn primary"><Icon.Plus style={{ width: 13, height: 13 }} />New development</button>
      </div>

      <div className="pd-grid c-3" style={{ marginBottom: 16 }}>
        <div className="pd-card">
          <div className="pd-stat-label">Active developments</div>
          <div className="pd-stat-value">6</div>
          <div style={{ fontSize: 11, color: "var(--pd-green)", marginTop: 2 }}>+1 in pipeline</div>
        </div>
        <div className="pd-card">
          <div className="pd-stat-label">Total units</div>
          <div className="pd-stat-value">130</div>
          <div style={{ fontSize: 11, color: "var(--pd-ink-3)", marginTop: 2 }}>89.8% occupied</div>
        </div>
        <div className="pd-card">
          <div className="pd-stat-label">Monthly revenue</div>
          <div className="pd-stat-value">£90.8k</div>
          <div style={{ fontSize: 11, color: "var(--pd-green)", marginTop: 2 }}>↑ 2.6% vs prev</div>
        </div>
      </div>

      <div className="pd-grid c-2" style={{ gap: 12 }}>
        {devs.map((d, i) => (
          <div key={i} className="pd-card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--pd-ink)" }}>{d.name}</div>
                <div style={{ fontSize: 12, color: "var(--pd-ink-3)", marginTop: 2 }}>{d.addr}</div>
              </div>
              <span className={`pd-pill ${d.delta > 0 ? "green" : "red"} tiny`}>
                {d.delta > 0 ? "↑" : "↓"} {Math.abs(d.delta).toFixed(1)}%
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, fontSize: 12 }}>
              <div>
                <div style={{ color: "var(--pd-ink-3)" }}>Units</div>
                <div style={{ fontWeight: 600, fontSize: 16, color: "var(--pd-ink)" }}>{d.units}</div>
              </div>
              <div>
                <div style={{ color: "var(--pd-ink-3)" }}>Occupancy</div>
                <div style={{ fontWeight: 600, fontSize: 16, color: "var(--pd-ink)" }}>{d.occ}%</div>
              </div>
              <div>
                <div style={{ color: "var(--pd-ink-3)" }}>Revenue</div>
                <div style={{ fontWeight: 600, fontSize: 16, color: "var(--pd-ink)" }}>{d.rev}</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--pd-ink-3)", marginBottom: 4 }}>Units occupied (12mo)</div>
              <Spark data={d.trend} color="#5b3fd6" height={36} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────── Compliance ───────────────── */
export function ComplianceView() {
  const [tab, setTab] = useState("Overview");
  const [scope, setScope] = useState("All");

  const points = Array.from({ length: 36 }, (_, i) => {
    if (i < 3) return { x: 50 + i * 30, atRisk: true, y: 0.3 + i * 0.2 };
    if (i > 30) return { x: 950 + (i - 30) * 8, atRisk: false, y: ((i * 37) % 100) / 100 };
    return { x: 110 + (i - 3) * 4, atRisk: false, y: ((i * 53) % 100) / 100 };
  });

  return (
    <div className="pd-view">
      <div className="pd-page-head"><h1 className="pd-page-title">Compliance</h1></div>

      <div className="pd-tabs">
        {["Overview", "Documents", "Raw data", "Actions", "Reports"].map((t) => (
          <button key={t} className={`pd-tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>

      <div className="pd-grid" style={{ gridTemplateColumns: "1fr 280px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="pd-grid c-3">
            <div className="pd-card">
              <div className="pd-stat-label">Lease coverage</div>
              <div className="pd-stat-value">82%</div>
              <div style={{ fontSize: 11, color: "var(--pd-ink-3)", marginTop: 2 }}>45 of 55 leases uploaded</div>
            </div>
            <div className="pd-card">
              <div className="pd-stat-label">Lease extensions</div>
              <div className="pd-stat-value">3</div>
              <div style={{ fontSize: 11, color: "var(--pd-ink-3)", marginTop: 2 }}>requiring extension attention</div>
            </div>
            <div className="pd-card">
              <div className="pd-stat-label">Anomalous terms</div>
              <div className="pd-stat-value" style={{ color: "var(--pd-red)" }}>30 flagged</div>
              <div style={{ fontSize: 11, color: "var(--pd-ink-3)", marginTop: 2 }}>leases with non-standard terms</div>
            </div>
          </div>

          <div className="pd-card">
            <div className="pd-card-head">
              <div>
                <div className="pd-card-title">Years remaining on lease, by unit</div>
                <div style={{ marginTop: 6, fontSize: 13 }}>
                  <span style={{ fontSize: 24, fontWeight: 700, color: "var(--pd-ink)" }}>3</span>
                  <span style={{ fontSize: 12, color: "var(--pd-ink-3)", marginLeft: 6 }}>leases at risk</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, fontSize: 11, color: "var(--pd-ink-2)" }}>
                <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#5b3fd6", marginRight: 4 }} />Safe</span>
                <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#e0436b", marginRight: 4 }} />At risk</span>
              </div>
            </div>
            <ScatterChart points={points} height={210} />
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 4 }}>
              {["100 yrs", "150 yrs", "200 yrs", "250 yrs", "All"].map((s) => (
                <button
                  key={s}
                  className={`pd-chip ${scope === s ? "on-purple" : ""}`}
                  onClick={() => setScope(s)}
                  style={{ padding: "4px 12px", fontSize: 11 }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="pd-card" style={{ background: "linear-gradient(170deg, #efe5ff, #f8f0ff)", border: "1px dashed #c5b3f0", textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "var(--pd-primary)", marginBottom: 12 }}>UPLOAD</div>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "white", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(91,63,214,0.15)", marginBottom: 10 }}>
              <Icon.Upload style={{ width: 20, height: 20, color: "var(--pd-primary)" }} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "var(--pd-ink)" }}>Add lease documents</div>
            <div style={{ fontSize: 12, color: "var(--pd-ink-3)", marginTop: 4 }}>Drop in PDFs to auto-match units</div>
          </div>

          <div className="pd-card">
            <div className="pd-card-sub">Total uploads</div>
            <div className="pd-stat-value" style={{ marginTop: 6 }}>48</div>
            <div style={{ marginTop: 8 }}>
              <Spark data={[20, 22, 28, 26, 32, 40, 38, 42, 44, 46, 47, 48]} color="#5b3fd6" height={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
