import { CalendarDays, Monitor, PanelsTopLeft } from "lucide-react";
import type { ReactNode } from "react";

function Panel({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return <div className={`teacher-ui ${className}`}><h3>{title}</h3>{children}</div>;
}

export function TeacherVisual({ kind }: { kind: number }) {
  return (
    <div className="teacher-visual" data-guides={kind === 1 || kind === 2}>
      <div className="teacher-visual__composition">
        {kind === 0 && (
          <Panel title="Žurnāls" className="teacher-journal">
            <p className="teacher-ui__meta"><CalendarDays />Nedēļas piemērs</p>
            <div className="teacher-journal__layout">
              <div className="teacher-journal__groups"><strong>Informātika</strong>{["M-11","M-12","S-11","S-12"].map((g,i) => <span key={g} data-selected={i===1}>{g}</span>)}</div>
              <div className="teacher-journal__lessons">
                <p>Pirmdiena</p>
                <div data-state="done"><small>08:30–09:55</small><strong>M-12 · Informātika</strong><span>Teksta ievade un rediģēšana</span><em>Aizvadīta</em></div>
                <div data-state="planned"><small>10:05–11:30</small><strong>S-11 · Informātika</strong><span>Tabulēšanas pieturu lietošana</span><em>Ieplānota</em></div>
                <p>Otrdiena</p>
                <div data-state="done"><small>08:30–09:55</small><strong>S-12 · Informātika</strong><span>Attēlu apstrādes pamati</span><em>Aizvadīta</em></div>
              </div>
            </div>
          </Panel>
        )}
        {kind === 1 && (
          <>
            <Panel title="PD plāns" className="teacher-plan">
              <p className="teacher-ui__meta">1. semestris · Piemērs <span>Melnraksts</span></p>
              <h4>Pārbaudes darba uzdevumi</h4>
              <ul className="teacher-plan__tasks">{[5,10,5].map((points,i) => <li key={i}><span>Uzdevums {i+1}</span><strong>{points} p.</strong></li>)}</ul>
              <strong className="teacher-plan__total">Kopā: 20 punkti</strong>
            </Panel>
            <Panel title="Nodarbība" className="teacher-plan__lesson"><p><CalendarDays />Pārbaudes darbs</p></Panel>
          </>
        )}
        {kind === 2 && (
          <Panel title="Testa izpilde" className="teacher-test">
            <p className="teacher-ui__meta">Ilustratīvs piemērs</p>
            <h4>Informātika — pārbaudes darbs</h4>
            <div className="teacher-test__participant"><span>Dalībnieks A</span><span className="teacher-ui__badge">Izpildē</span></div>
            <div className="teacher-test__connection" />
            <h4>Izpildes notikumi</h4>
            <ul className="teacher-test__events"><li><PanelsTopLeft />Pārslēgta pārlūka cilne</li><li><Monitor />Piekļuve no citas ierīces</li></ul>
            <p>Papildu konteksts rezultātu izvērtēšanai</p>
          </Panel>
        )}
        {kind === 3 && (
          <>
            <Panel title="Parādu pieteikums" className="teacher-grade__request"><p className="teacher-ui__meta">Ilustratīvs piemērs</p><h4>Informātika</h4><p>Vērtējuma uzlabošana</p><span className="teacher-ui__badge">Nosūtīts pasniedzējam</span></Panel>
            <Panel title="Konsultācija" className="teacher-grade__consultation"><dl>{[["Datums","Trešdiena"],["Laiks","14:30"],["Vieta","203. kabinets"]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p>Norādīta konsultācijas informācija</p></Panel>
          </>
        )}
        <svg className="teacher-visual__connector" viewBox="0 0 400 300" fill="none" aria-hidden="true"><path d={kind===0 ? "M20 50H170" : "M180 120C295 120 185 225 300 225"} pathLength="100" /></svg>
      </div>
      {(kind===1 || kind===2) && <svg className="teacher-visual__guides" viewBox="0 0 500 500" fill="none" aria-hidden="true"><path d="M70 0v500M430 0v500M0 85h500M0 415h500" stroke="#ffffff" strokeOpacity=".07" strokeDasharray="2 4" /><path d="M66 85h8m-4-4v8m356 326h8m-4-4v8" stroke="#ffffff" strokeOpacity=".24" /></svg>}
    </div>
  );
}

