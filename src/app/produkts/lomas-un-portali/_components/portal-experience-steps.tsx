import { ClipboardCheck, LayoutDashboard, LogIn, PanelsTopLeft, UserRound, type LucideIcon } from "lucide-react";
import "./portal-experience-steps.css";

type ExperienceStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: ExperienceStep[] = [
  { icon: LogIn, title: "Pieraksties EIVIS", description: "Ienāc savas iestādes digitālajā vidē." },
  { icon: PanelsTopLeft, title: "Atver savu portālu", description: "Atrodi saviem pienākumiem atbilstošo darba vidi." },
  { icon: UserRound, title: "Iepazīsti savu darba vidi", description: "Tava darba vide atspoguļo iestādes struktūru un tavus pienākumus." },
  { icon: LayoutDashboard, title: "Atrodi nepieciešamo", description: "Sadaļas, informācija un rīki sakārtoti atbilstoši tavai ikdienai." },
  { icon: ClipboardCheck, title: "Strādā vienotā vidē", description: "Pārskati aktuālo informāciju, uzdevumus un ikdienas procesus." },
];

export function PortalExperienceSteps() {
  return (
    <section className="portal-experience" aria-labelledby="portal-experience-title">
      <header>
        <h2 id="portal-experience-title">No pierakstīšanās līdz savai darba videi.</h2>
        <p>Viena platforma, kurā katrs lietotājs var strādāt sev atbilstošā vidē — ar pazīstamu navigāciju, nepieciešamajām sadaļām un ikdienas rīkiem.</p>
      </header>
      <ol className="portal-experience__steps" role="list">
        {steps.map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
            <div><h3>{title}</h3><p>{description}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}
