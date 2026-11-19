import { CalendarDays, Check, Clock3, Laptop, Layers, RefreshCw, Tag } from "lucide-react";
import "./continuous-development-graphic.css";

export function EivisContinuousDevelopmentGraphic() {
  return (
    <div className="continuous-development" role="img" aria-label="Ilustratīvs EIVIS atjauninājuma pārskats ar pabeigtu ieviešanu">
      <div className="continuous-development__interface" aria-hidden="true">
        <div className="continuous-development__notification">
          <RefreshCw />
          <strong>EIVIS atjauninājumi <span>#v2.4</span></strong>
          <small>Pirms 2 min</small>
          <span className="continuous-development__pill">Atjauninājums</span>
        </div>
        <div className="continuous-development__panel">
          <div className="continuous-development__header">
            <span className="continuous-development__icon"><Layers /></span>
            <div>
              <h4>Jauns atjauninājums pieejams</h4>
              <p>Uzlabojumi, jaunas iespējas un veiktspējas optimizācija.</p>
            </div>
          </div>
          <dl className="continuous-development__metadata">
            <div><dt><Tag />Versija</dt><dd>v2.4</dd></div>
            <div><dt><CalendarDays />Izlaista</dt><dd>13. nov., 2026</dd></div>
            <div><dt><Clock3 />Instalēšanas ilgums</dt><dd>~ 2 min</dd></div>
          </dl>
          <div className="continuous-development__progress">
            <div><Laptop /><strong>Atjaunināšanas ieviešana</strong></div>
            <span className="continuous-development__track" />
            <strong className="continuous-development__percent">100%</strong>
            <span className="continuous-development__success"><Check /></span>
          </div>
        </div>
        <svg className="continuous-development__glint" viewBox="0 0 440 215" fill="none">
          <path d="M30 25H405" pathLength="100" />
        </svg>
      </div>
    </div>
  );
}
