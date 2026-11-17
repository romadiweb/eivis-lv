import { ChartNoAxesColumn, ClipboardList, Eye, Layers, ListFilter, Monitor, Plug, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";
import { PageShell } from "@/app/_components/page-shell";
import { pageContent } from "@/lib/page-content";
import { AdoptionProgression } from "./_components/adoption-progression";
import "./overview.css";

const benefits = [
  { icon: Layers, title: "Viena vide.", description: "Visi iestādes ikdienas procesi, informācija un nepieciešamie rīki vienuviet." },
  { icon: Workflow, title: "Mazāk rutīnas.", description: "Automatizēti uzdevumi un saskaņošanas procesi, kas ietaupa darbinieku laiku." },
  { icon: Eye, title: "Vairāk skaidrības.", description: "Pārskatāma informācijas aprite un labāka ikdienas darba organizācija." },
  { icon: ListFilter, title: "Bez liekā.", description: "Izvēlieties tikai nepieciešamos moduļus un paplašiniet sistēmu, kad tas vajadzīgs." },
];

const features = [
  {
    icon: ClipboardList,
    title: "Digitālie pieteikumi",
    description: "Pārvaldi iesniegumus, pieprasījumus un veidlapas digitāli, samazinot papīra dokumentu apriti.",
  },
  {
    icon: Workflow,
    title: "Automatizēti procesi",
    description: "Organizē saskaņošanu, uzdevumu nodošanu un apstiprināšanu skaidrās, pārskatāmās darbplūsmās.",
  },
  {
    icon: ShieldCheck,
    title: "Piekļuve pēc lomām",
    description: "Nosaki lietotāju tiesības un nodrošini, ka katrs darbinieks piekļūst tikai sev nepieciešamajai informācijai.",
  },
  {
    icon: Plug,
    title: "Sistēmu integrācijas",
    description: "Savieno EIVIS ar citiem iestādē izmantotajiem digitālajiem risinājumiem, veidojot vienotāku darba vidi.",
  },
  {
    icon: Monitor,
    title: "Informācija visos ekrānos",
    description: "Pārvaldi paziņojumus, aktualitātes un digitālo ekrānu saturu centralizēti vienuviet.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Pārskati un uzraudzība",
    description: "Seko līdzi procesu statusiem, uzdevumu izpildei un svarīgākajai iestādes darbības informācijai.",
  },
];

export default function Page() {
  return (
    <PageShell content={pageContent["produkts/parskats"]} contentKey="produkts/parskats">
      <ul className="product-overview__benefits">
        {benefits.map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <Icon size={22} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <AdoptionProgression />
      <ul className="product-overview__features" aria-label="EIVIS iespējas">
        {features.map(({ icon: Icon, title, description }) => (
          <li key={title}>
            <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <section className="product-overview__cta" aria-labelledby="overview-cta-title">
        <h2 id="overview-cta-title">Viena platforma visiem iestādes ikdienas procesiem</h2>
        <Link href="/kontakti" className="pill-button pill-button--primary">Pieteikt EIVIS demonstrāciju</Link>
      </section>
    </PageShell>
  );
}
