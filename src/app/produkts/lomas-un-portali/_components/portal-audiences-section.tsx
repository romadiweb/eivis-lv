import { BookOpen, CalendarDays, ChartNoAxesColumn, GraduationCap } from "lucide-react";
import "./portal-audiences.css";

const audiences = [
  { icon: GraduationCap, title: "Studentiem" },
  { icon: BookOpen, title: "Pasniedzējiem" },
  { icon: CalendarDays, title: "Studiju daļai" },
  { icon: ChartNoAxesColumn, title: "Vadībai" },
];

const benefits = [
  { title: "Svarīgākais priekšplānā", description: "Katram amatam aktuālā informācija un ikdienas uzdevumi." },
  { title: "Pārskatāma darba vide", description: "Sadaļas un rīki organizēti atbilstoši darba pienākumiem." },
  { title: "Iestādei pazīstama valoda", description: "Nosaukumi un struktūra pielāgoti katras iestādes ikdienai." },
];

export function PortalAudiencesSection() {
  return (
    <section className="portal-audiences" aria-labelledby="portal-audiences-title">
      <h2 id="portal-audiences-title">Viena platforma. Dažādas darba vides.</h2>
      <ul className="portal-audiences__cards" aria-label="Darba vides piemēri">
        {audiences.map(({ icon: Icon, title }) => (
          <li key={title}>
            <span className="portal-audiences__icon"><Icon size={26} strokeWidth={1.65} aria-hidden="true" /></span>
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
      <ul className="portal-audiences__benefits">
        {benefits.map(({ title, description }) => (
          <li key={title}><h3>{title}</h3><p>{description}</p></li>
        ))}
      </ul>
    </section>
  );
}
