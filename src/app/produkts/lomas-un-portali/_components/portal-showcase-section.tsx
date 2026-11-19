import Image, { type StaticImageData } from "next/image";
import teacherWorkspace from "../../../../../public/portal-teacher-workspace.png";
import planningWorkspace from "../../../../../public/portal-planning-workspace.png";
import studentBackground from "../../../../../public/portal-student-bg.png";
import teacherBackground from "../../../../../public/portal-teacher-bg.png";
import planningBackground from "../../../../../public/portal-planning-bg.png";
import "./portal-showcase.css";

const workspaces = [
  {
    label: "Studenta darba vide",
    title: "Studenta ikdiena. Viss nepieciešamais vienuviet.",
    description: "Nodarbību saraksts, pieteikumi, aktualitātes un studiju informācija vienotā darba vidē, kas veidota ērtai ikdienas lietošanai.",
    background: studentBackground,
    screenshot: "",
  },
  {
    label: "Pasniedzēja darba vide",
    title: "Vairāk laika mācīšanai. Mazāk informācijas meklēšanas.",
    description: "Nodarbības, saziņa un ikdienas darbam nepieciešamās sadaļas organizētas pārskatāmā vidē, kas atbilst pasniedzēja pienākumiem.",
    background: teacherBackground,
    screenshot: teacherWorkspace,
  },
  {
    label: "Studiju daļas darba vide",
    title: "Mācību procesa organizēšana vienotā skatā.",
    description: "Programmas, grupu grafiki un plānošanas rīki apvienoti darba vidē, kas pielāgota iestādes organizatoriskajiem procesiem.",
    background: planningBackground,
    screenshot: planningWorkspace,
  },
];

function PortalBrowserMockup({ screenshot, label }: { screenshot: string | StaticImageData; label: string }) {
  return (
    <div className="portal-showcase__browser">
      <div className="portal-showcase__bar" aria-hidden="true"><i /><i /><i /></div>
      {screenshot ? (
        <Image src={screenshot} alt={label} sizes="(max-width: 680px) 75vw, 420px" />
      ) : (
        <div className="portal-showcase__placeholder">Vieta darba vides attēlam</div>
      )}
    </div>
  );
}

export function PortalShowcaseSection() {
  return (
    <section className="portal-showcase" aria-labelledby="portal-showcase-title">
      <header>
        <h2 id="portal-showcase-title">Viena platforma. Dažādas darba perspektīvas.</h2>
        <p>EIVIS pielāgo darba vidi dažādiem pienākumiem un ikdienas procesiem. Vienā platformā iespējams veidot atšķirīgas, katram lietotājam piemērotas darba vides.</p>
      </header>
      <div className="portal-showcase__rows">
        {workspaces.map(({ label, title, description, background, screenshot }) => (
          <article className="portal-showcase__row" key={label}>
            <div className="portal-showcase__copy">
              <p className="portal-showcase__label">{label}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="portal-showcase__visual">
              <Image className="portal-showcase__background" src={background} alt="" fill sizes="(max-width: 680px) calc(100vw - 32px), 530px" />
              <PortalBrowserMockup screenshot={screenshot} label={label} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
