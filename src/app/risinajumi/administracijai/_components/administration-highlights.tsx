import { Activity, ChartNoAxesCombined, FilePenLine, MessagesSquare, type LucideIcon } from "lucide-react";

type AdministrationHighlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const highlights: AdministrationHighlight[] = [
  { icon: ChartNoAxesCombined, title: "Apmeklējums", description: "Pārskatiet sistēmas apmeklējuma dinamiku un lietojuma informāciju vienotā administrācijas vidē." },
  { icon: Activity, title: "Savienojumi", description: "Sekojiet integrāciju darbības statusam un savlaicīgi pamaniet savienojumus, kuriem nepieciešama uzmanība." },
  { icon: MessagesSquare, title: "Saziņa", description: "Uzturiet iestādes iekšējo komunikāciju un nepieciešamās informācijas apriti vienotā darba vidē." },
  { icon: FilePenLine, title: "Saturs", description: "Pārvaldiet sistēmas tekstus un iestādes informāciju, lai digitālā darba vide saglabātos aktuāla un saprotama." },
];

export function AdministrationOperationalHighlights() {
  return (
    <section className="administration-highlights" aria-labelledby="administration-highlights-title">
      <header>
        <h2 id="administration-highlights-title">Pārvaldība nebeidzas ar iestatīšanu.</h2>
        <p>Administrācijai svarīgi ne tikai organizēt darbu, bet arī sekot līdzi sistēmas darbībai, saziņai un informācijas aktualitātei.</p>
      </header>
      <ul>
        {highlights.map(({ icon: Icon, title, description }) => (
          <li key={title}><Icon size={22} strokeWidth={1.65} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></li>
        ))}
      </ul>
      <p className="administration-highlights__note">Administrācijas funkcionalitāte tiek pielāgota katras iestādes vajadzībām un sistēmas konfigurācijai.</p>
    </section>
  );
}
