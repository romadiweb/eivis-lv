import {
  ArrowRight,
  CalendarDays,
  FileText,
  GraduationCap,
  Plug,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

const features = [
  { icon: ShieldCheck, label: "Lomas un piekļuves" },
  { icon: GraduationCap, label: "Studentu pašapkalpošanās" },
  { icon: UserPlus, label: "Digitāla uzņemšana" },
  { icon: CalendarDays, label: "Nodarbību saraksti" },
  { icon: FileText, label: "Digitāli dokumenti" },
  { icon: Plug, label: "Sistēmu integrācijas" },
];

export function HomeCta() {
  return (
    <section className="home-cta__section" aria-labelledby="home-cta-title">
      <div className="home-cta__panel">
        <h2 id="home-cta-title">Viena platforma<br />visai iestādei</h2>
        <Link className="home-cta__action" href="/kontakti">
          Pieteikt demonstrāciju <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <ul className="home-cta__badges" aria-label="EIVIS iespējas">
        {features.map(({ icon: Icon, label }) => (
          <li key={label}><Icon size={17} aria-hidden="true" />{label}</li>
        ))}
      </ul>
    </section>
  );
}
