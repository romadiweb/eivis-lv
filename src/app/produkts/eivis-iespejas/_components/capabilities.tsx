import { ApprovalIllustration, PermissionsIllustration, RequestsIllustration } from "./capability-illustrations";
import "./capabilities.css";

const cards = [
  {
    Illustration: RequestsIllustration,
    title: "Pieteikumi bez liekas dokumentu aprites",
    description: "Veidojiet iestādes vajadzībām pielāgotas pieteikumu formas, apkopojiet iesniegumus un pārvaldiet to izskatīšanu vienuviet.",
  },
  {
    Illustration: ApprovalIllustration,
    title: "Saskaņošana bez liekiem soļiem",
    description: "Organizējiet pieprasījumu un uzdevumu saskaņošanu ar skaidriem atbildīgajiem, apstiprināšanas posmiem un pārskatāmiem statusiem.",
  },
  {
    Illustration: PermissionsIllustration,
    title: "Katram sava darba vide",
    description: "Pielāgojiet lietotāju lomas, piekļuves tiesības un redzamās funkcijas, lai katrs darbinieks strādātu sev atbilstošā vidē.",
  },
];

export function Capabilities() {
  return (
    <section className="capabilities" aria-labelledby="capabilities-title">
      <header>
        <h2 id="capabilities-title">Ikdienas procesi. Vienkāršāk un pārskatāmāk.</h2>
        <p>Digitāli pieteikumi, automatizēta saskaņošana un precīza piekļuves pārvaldība — vienotā vidē, kas pielāgota jūsu iestādei.</p>
      </header>
      <div className="capabilities__grid">
        {cards.map(({ Illustration, title, description }) => (
          <article key={title}>
            <div className="capabilities__art"><Illustration /></div>
            <div className="capabilities__copy">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
