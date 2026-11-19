import { Activity, CalendarDays, Check, CircleCheck, CircleHelp, ClipboardList, Layers, Plug, TriangleAlert, Users } from "lucide-react";
import type { ReactNode } from "react";
import "./feature-previews.css";

export function EivisFeaturePreview({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="eivis-feature-preview" role="img" aria-label={label}>
      <div className="eivis-feature-preview__panel" aria-hidden="true">{children}</div>
    </div>
  );
}

export function EivisRequestProgressGraphic() {
  return (
    <EivisFeaturePreview label="Ilustratīvs aprīkojuma pieprasījums ar trim pabeigtiem soļiem">
      <div className="request-preview__header"><strong>PIEPRASĪJUMA IZPILDE</strong><span>Pabeigts</span></div>
      <div className="request-preview__summary">
        <ClipboardList /><div><h4>Aprīkojuma pieprasījums</h4><p>Iekšējais pieprasījums</p></div><CircleCheck />
      </div>
      <div className="request-preview__progress-label"><span>PROGRESS</span><strong>3/3</strong></div>
      <div className="request-preview__progress">
        <span /><span /><span />
        <svg viewBox="0 0 360 8" fill="none"><path d="M0 1H360" pathLength="100" className="feature-preview__signal" /></svg>
      </div>
      <ol className="request-preview__steps">
        {[["Pieprasījums iesniegts", "09:15"], ["Nodots saskaņošanai", "10:42"], ["Pieprasījums apstiprināts", "11:08"]].map(([label, time]) => (
          <li key={time}><CircleCheck /><span>{label}</span><time>{time}</time></li>
        ))}
      </ol>
    </EivisFeaturePreview>
  );
}

const chartPath = "M30 73C44 69 49 81 63 74S79 62 94 66 111 53 127 59 143 48 160 53 178 40 195 47 214 55 232 47 249 52 267 44 281 23 297 29 315 55 335 48 352 34 370 40 385 29 394 32";
const metrics = [
  { icon: Layers, label: "Aktīvās integrācijas", value: "8", tone: "blue" },
  { icon: Check, label: "Darbojas", value: "7", tone: "green" },
  { icon: TriangleAlert, label: "Nepieciešama uzmanība", value: "1", tone: "amber" },
  { icon: Activity, label: "Pieejamība", value: "99,9%", tone: "blue" },
];

export function EivisOverviewAnalyticsGraphic() {
  return (
    <EivisFeaturePreview label="Ilustratīvs apmeklējuma pārskats ar 1284 aktīvajiem lietotājiem un integrāciju statusiem">
      <div className="analytics-preview__top">
      <div className="analytics-preview__header">
        <h4>Sistēmas apmeklējums <CircleHelp /></h4><span><CalendarDays />Pēdējās 30 dienas</span>
      </div>
      <strong className="analytics-preview__value">1284</strong>
      <p className="analytics-preview__caption">Aktīvie lietotāji pēdējās 30 dienās</p>
      <p className="analytics-preview__change">+12,8% salīdzinājumā ar iepriekšējo periodu</p>
      </div>
      <div className="analytics-preview__plot">
      <div className="analytics-preview__chart">
        <div className="analytics-preview__axis">{["1400", "1200", "1000", "800", "600"].map(v => <span key={v}>{v}</span>)}</div>
        <svg viewBox="0 0 410 110" fill="none" preserveAspectRatio="none">
          {[25, 45, 65, 85, 105].map(y => <path key={y} d={`M30 ${y}H394`} stroke="#e2e6ee" strokeDasharray="3 3" />)}
          <path d={chartPath + "V105H30Z"} fill="#3777db" fillOpacity=".12" />
          <path d={chartPath} stroke="#3777db" strokeWidth="1.5" />
          <path d={chartPath} pathLength="100" className="feature-preview__signal" />
          {[124, 242, 347].map(x => <path key={x} d={`M${x} 15V105`} stroke="#a3bfea" strokeDasharray="2 3" />)}
        </svg>
        <div className="analytics-preview__events">{[Users, Layers, Plug].map((Icon, i) => <span key={i}><Icon /></span>)}</div>
      </div>
      <div className="analytics-preview__dates"><span>1. nov.</span><span>8. nov.</span><span>15. nov.</span><span>22. nov.</span></div>
      </div>
      <div className="analytics-preview__integrations">
        <h4>Integrāciju stāvoklis <CircleHelp /></h4>
        <div className="analytics-preview__metrics">
          {metrics.map(({ icon: Icon, label, value, tone }) => (
            <div key={label}><span data-tone={tone}><Icon /></span><div><p>{label}</p><strong>{value}</strong></div></div>
          ))}
        </div>
      </div>
    </EivisFeaturePreview>
  );
}
