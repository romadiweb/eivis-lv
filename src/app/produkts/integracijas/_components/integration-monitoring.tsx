import { Activity, ArrowDownToLine, ChevronRight, Cloud, Files, Link2, RefreshCw } from "lucide-react";

const exampleConnections = [
  { icon: Cloud, name: "Google Workspace", description: "Savienota sistēma" },
  { icon: Files, name: "DVS (Namejs)", description: "Dokumentu sinhronizācija" },
  { icon: ArrowDownToLine, name: "Mykoob", description: "Datu imports" },
];

const exampleActivity = ["Dokumentu sinhronizācija", "Datu importa pārbaude"];

export function IntegrationMonitoring() {
  return (
    <div className="integration-monitoring">
      <div className="integration-monitoring__dashboard">
        <div className="integration-monitoring__header">
          <div>
            <span className="integration-monitoring__example">Interfeisa piemērs</span>
            <h3>Integrāciju pārvaldība</h3>
            <p>Pārskatiet savienojumus un datu apmaiņu vienuviet.</p>
          </div>
          <Link2 className="integration-monitoring__signal" size={20} aria-hidden="true" />
        </div>
        <ul className="integration-monitoring__connections">
          {exampleConnections.map(({ icon: Icon, name, description }) => (
            <li key={name}>
              <span className="integration-monitoring__icon"><Icon size={16} aria-hidden="true" /></span>
              <div><strong>{name}</strong><p>{description}</p></div>
              <span className="integration-monitoring__status">Savienots</span>
              <ChevronRight className="integration-monitoring__detail" size={15} aria-hidden="true" />
            </li>
          ))}
        </ul>
        <div className="integration-monitoring__activity">
          <h4><Activity size={15} aria-hidden="true" /> Datu apmaiņas aktivitāte</h4>
          <ul>
            {exampleActivity.map((entry) => (
              <li key={entry}><RefreshCw size={13} aria-hidden="true" /> {entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
