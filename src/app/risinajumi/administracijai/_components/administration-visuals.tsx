import { FileText, Settings2, Users } from "lucide-react";
import type { ReactNode } from "react";

export function AdministrationFeatureVisual({ children }: { children: ReactNode }) {
  return <div className="administration-visual"><div className="administration-visual__composition">{children}</div></div>;
}

function Navigation({ title, items, selected }: { title: string; items: string[]; selected: string }) {
  return (
    <nav className="administration-visual__nav" aria-label={title}>
      <strong>{title}</strong>
      {items.map(item => <span key={item} data-selected={item === selected}>{item}</span>)}
    </nav>
  );
}

function Glint() {
  return <svg className="administration-visual__glint" viewBox="0 0 400 260" fill="none" aria-hidden="true"><path d="M20 64H145" pathLength="100" /></svg>;
}

export function InstitutionSettingsVisual() {
  return (
    <AdministrationFeatureVisual>
      <div className="administration-visual__window">
        <Navigation title="Iestatījumi" items={["Iestāde", "Iestādes rekvizīti", "Sadaļu iestatījumi", "Teksti", "Moduļi"]} selected="Iestāde" />
        <div className="administration-visual__content">
          <h3><Settings2 />Iestādes informācija</h3>
          <span className="administration-visual__example">Konfigurācijas piemērs</span>
          <dl className="administration-visual__fields">
            {[["Iestādes nosaukums", "Izglītības iestāde"], ["Darba valoda", "Latviešu"], ["Laika josla", "Europe/Riga"]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <p className="administration-visual__footnote">Iestādes pamatinformācija</p>
        </div>
        <Glint />
      </div>
    </AdministrationFeatureVisual>
  );
}

export function RequestAdministrationVisual() {
  return (
    <AdministrationFeatureVisual>
      <svg className="administration-visual__connector" viewBox="0 0 400 300" fill="none" aria-hidden="true">
        <path d="M245 122C310 122 245 207 304 207" />
        <path className="administration-visual__signal" d="M245 122C310 122 245 207 304 207" pathLength="100" />
      </svg>
      <div className="administration-visual__form-panel">
        <h3><FileText />Pieteikumu formas</h3>
        <span className="administration-visual__example">Formas piemērs</span>
        <dl className="administration-visual__fields">
          <div><dt>Formas nosaukums</dt><dd>Aprīkojuma pieprasījums</dd></div>
          <div><dt>Apraksts</dt><dd>Iekšējais pieprasījums</dd></div>
          <div><dt>Izpildītāju grupa</dt><dd>Atbalsta grupa</dd></div>
        </dl>
      </div>
      <div className="administration-visual__groups">
        <h3><Users />Izpildītāju grupas</h3>
        {["Atbalsta grupa", "Administrācijas grupa", "Saimniecības grupa"].map((group,i) => <div key={group} data-selected={i === 0}><Users />{group}</div>)}
      </div>
    </AdministrationFeatureVisual>
  );
}

export function DocumentStructureVisual() {
  return (
    <AdministrationFeatureVisual>
      <div className="administration-visual__window">
        <Navigation title="Dokumenti" items={["Dokumentu veidnes", "Veidnes mainīgie", "Dokumentu grupu veidi", "Dokumentu lēmumu veidi"]} selected="Dokumentu veidnes" />
        <div className="administration-visual__content">
          <h3>Dokumentu veidnes</h3>
          <span className="administration-visual__example">Veidnes struktūra</span>
          <div className="administration-visual__document">
            <FileText />
            <span /><span /><span /><hr /><span /><span />
          </div>
        </div>
        <Glint />
      </div>
    </AdministrationFeatureVisual>
  );
}

export function AcademicDataVisual() {
  return (
    <AdministrationFeatureVisual>
      <div className="administration-visual__window">
        <Navigation title="Akadēmiskie dati" items={["Programmas", "Akadēmiskie gadi", "Grupas", "Brīvdienas", "Nodarbību laiki"]} selected="Grupas" />
        <div className="administration-visual__content">
          <h3>Grupu pārvaldība</h3>
          <span className="administration-visual__example">Struktūras piemērs</span>
          <div className="administration-visual__table">
            <span>Grupa</span><span>Programma</span><span>Akadēmiskais gads</span>
            {[0,1,2,3,4,5,6,7,8].map(i => <div key={i}><i /></div>)}
          </div>
          <p className="administration-visual__footnote">Akadēmisko datu struktūra</p>
        </div>
        <Glint />
      </div>
    </AdministrationFeatureVisual>
  );
}
