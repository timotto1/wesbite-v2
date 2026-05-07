"use client";

import { Fragment, useLayoutEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import "./styles.css";
import { Icon, type IconKey } from "./icons";
import {
  CaseManagementView,
  ComplianceView,
  DevelopmentsView,
  EnquiriesView,
  InsightsView,
  ListingsView,
  ReportingView,
  UnitsView,
} from "./views";

type ViewId =
  | "case"
  | "reporting"
  | "insights"
  | "listings"
  | "enquiries"
  | "units"
  | "developments"
  | "compliance";

const NAV: { group: string; items: { id: ViewId; label: string; icon: IconKey }[] }[] = [
  {
    group: "Residents",
    items: [
      { id: "insights", label: "Insights", icon: "Insights" },
      { id: "case", label: "Case management", icon: "CaseMgmt" },
      { id: "reporting", label: "Reporting", icon: "Reporting" },
    ],
  },
  {
    group: "Sales and marketing",
    items: [
      { id: "listings", label: "Listings", icon: "Listings" },
      { id: "enquiries", label: "Enquiries", icon: "Enquiries" },
    ],
  },
  {
    group: "Units",
    items: [
      { id: "units", label: "Units", icon: "Units" },
      { id: "developments", label: "Developments", icon: "Devs" },
      { id: "compliance", label: "Compliance", icon: "Compliance" },
    ],
  },
];

const VIEW_FOR: Record<ViewId, { url: string; Component: () => JSX.Element }> = {
  case: { url: "/case-management", Component: CaseManagementView },
  reporting: { url: "/reporting", Component: ReportingView },
  insights: { url: "/insights", Component: InsightsView },
  listings: { url: "/listings", Component: ListingsView },
  enquiries: { url: "/enquiries", Component: EnquiriesView },
  units: { url: "/units", Component: UnitsView },
  developments: { url: "/developments", Component: DevelopmentsView },
  compliance: { url: "/compliance", Component: ComplianceView },
};

export function ProductDemoWindow() {
  const [active, setActive] = useState<ViewId>("case");
  const [hovered, setHovered] = useState<ViewId | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Drag state — bounded within the stage
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const drag = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const winRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const win = winRef.current;
    if (!stage || !win) return;
    setPos({
      x: Math.max(0, (stage.clientWidth - win.offsetWidth) / 2),
      y: 16,
    });
    setReady(true);
  }, []);

  function clamp(x: number, y: number) {
    const stage = stageRef.current;
    const win = winRef.current;
    if (!stage || !win) return { x, y };
    const maxX = Math.max(0, stage.clientWidth - win.offsetWidth);
    const maxY = Math.max(0, stage.clientHeight - win.offsetHeight);
    return { x: Math.max(0, Math.min(x, maxX)), y: Math.max(0, Math.min(y, maxY)) };
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { startX: e.clientX, startY: e.clientY, baseX: pos.x, baseY: pos.y };
    setIsDragging(true);
  }
  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;
    setPos(clamp(drag.current.baseX + dx, drag.current.baseY + dy));
  }
  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    drag.current = null;
    setIsDragging(false);
  }

  // Scroll main area to top on view change
  useLayoutEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, [active]);

  const view = VIEW_FOR[active];
  const ViewComponent = view.Component;

  return (
    <div
      className="product-demo-scope"
      ref={stageRef}
      style={{ position: "relative", width: "100%", height: 820, overflow: "hidden" }}
    >
      <div
        ref={winRef}
        className="pd-window"
        style={{
          position: "absolute",
          width: "min(1180px, 100%)",
          left: pos.x,
          top: pos.y,
          opacity: ready ? 1 : 0,
        }}
      >
        <div
          className="pd-window-bar"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <div className="pd-lights">
            <span className="pd-light r" />
            <span className="pd-light y" />
            <span className="pd-light g" />
          </div>
          <div className="pd-url-bar">
            <Icon.Search style={{ width: 12, height: 12, opacity: 0.6 }} />
            <span className="host">stairpay.com</span>
            <span className="path">{view.url}</span>
          </div>
          <div className="pd-window-tools">
            <div className="pd-tool-dot"><Icon.Plus style={{ width: 14, height: 14 }} /></div>
          </div>
        </div>

        <div className="pd-app">
          <aside className={`pd-sidebar ${collapsed ? "collapsed" : ""}`}>
            <div className="pd-org">
              <div className="who">
                <span style={{ color: "var(--pd-primary)", fontWeight: 600 }}>Tim</span>
                <span className="slash">/</span>
                <span>Landlord</span>
                <Icon.Caret style={{ width: 12, height: 12, opacity: 0.5 }} />
              </div>
              <button
                type="button"
                className="pd-search-i"
                onClick={() => setCollapsed((c) => !c)}
                title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                style={{ border: "none", background: "transparent" }}
              >
                <Icon.Collapse
                  style={{
                    width: 14,
                    height: 14,
                    transform: collapsed ? "rotate(180deg)" : undefined,
                    transition: "transform 200ms ease",
                  }}
                />
              </button>
            </div>

            {NAV.map((group, gi) => (
              <Fragment key={gi}>
                <div className="pd-nav-group-label">{group.group}</div>
                {group.items.map((item) => {
                  const I = Icon[item.icon];
                  const isActive = active === item.id;
                  const isHovered = hovered === item.id;
                  return (
                    <button
                      key={item.id}
                      className={`pd-nav-item ${isActive ? "active" : ""}`}
                      onClick={() => setActive(item.id)}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered((h) => (h === item.id ? null : h))}
                      type="button"
                      title={collapsed ? item.label : undefined}
                    >
                      <I active={isActive || isHovered} style={{ width: 16, height: 16, flexShrink: 0, opacity: 0.85 }} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </Fragment>
            ))}

            <div className="pd-sidebar-foot">
              <button className="pd-nav-item" type="button" title={collapsed ? "Help" : undefined}>
                <Icon.Help style={{ width: 14, height: 14 }} />
                <span>Help</span>
              </button>
            </div>
          </aside>

          <main className="pd-main" ref={mainRef}>
            <ViewComponent key={active} />
          </main>
        </div>
      </div>
    </div>
  );
}
