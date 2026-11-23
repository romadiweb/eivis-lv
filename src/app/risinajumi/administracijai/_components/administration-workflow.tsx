import { AcademicDataVisual, DocumentStructureVisual, InstitutionSettingsVisual, RequestAdministrationVisual } from "./administration-visuals";
import "./administration-workflow.css";

const features = [
  { label: "Iestādes pārvaldība", title: "Iestādes iestatījumi. Vienuviet.", description: "Pamatinformācija, rekvizīti, sadaļu iestatījumi un sistēmas teksti vienotā administrācijas vidē. EIVIS palīdz uzturēt sakārtotu digitālo darba vidi, kas atbilst jūsu iestādes organizācijai.", Visual: InstitutionSettingsVisual },
  { label: "Pieteikumi un atbildīgie", title: "Pieteikumi ar skaidru turpinājumu.", description: "Pieteikumu formas un izpildītāju grupas palīdz organizēt ikdienas pieprasījumus. Administrācija var veidot pārskatāmu kārtību, kurā ir skaidrs, kāds pieteikums saņemts un kurš atbild par tā izskatīšanu.", Visual: RequestAdministrationVisual },
  { label: "Dokumentu pārvaldība", title: "Dokumentiem sava kārtība.", description: "Veidnes, dokumentu grupas un lēmumu veidi palīdz uzturēt vienotu dokumentu struktūru. EIVIS ļauj pielāgot dokumentu organizēšanu iestādes administratīvajiem procesiem.", Visual: DocumentStructureVisual },
  { label: "Akadēmiskā administrācija", title: "Mācību struktūra sākas ar sakārtotiem datiem.", description: "Programmas, akadēmiskie gadi, grupas, brīvdienas un nodarbību parametri veido mācību organizācijas pamatu. EIVIS palīdz administrācijai uzturēt šo informāciju pārskatāmā un vienotā vidē.", Visual: AcademicDataVisual },
];

export function AdministrationWorkflowSection() {
  return (
    <section className="administration-workflow" aria-labelledby="administration-workflow-title">
      <header>
        <p className="administration-workflow__label">Administrācijas darba vide</p>
        <h2 id="administration-workflow-title">Mazāk sadrumstalota darba. Vairāk kārtības ikdienā.</h2>
        <p>EIVIS palīdz organizēt iestādes administratīvo darbu — no pamatinformācijas un pieteikumiem līdz dokumentu struktūrai un akadēmiskajiem datiem. Viss sakārtots atbilstoši jūsu iestādes procesiem.</p>
      </header>
      <div className="administration-workflow__rows">
        {features.map(({label,title,description,Visual}) => (
          <article className="administration-workflow__row" key={title}>
            <div className="administration-workflow__copy"><p className="administration-workflow__label">{label}</p><h3>{title}</h3><p>{description}</p></div>
            <Visual />
          </article>
        ))}
      </div>
    </section>
  );
}
