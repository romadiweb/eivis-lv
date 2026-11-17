import { ArrowRight, Building2, ChevronRight, FileText, GraduationCap, MessagesSquare, Wallet } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import admissionsImage from "../../../public/eivis-admissions-workflow.png";
import adminPhone from "../../../public/eivis-admin-phone.png";
import dashboardImage from "../../../public/eivis-dashboard-showcase.png";
import { PlatformSteps } from "./platform-steps";
import { IntegrationsCard } from "./integrations-card";
import { AnalyticsCard, DeviceAccessCard, UpdateCard, WorkflowCard } from "./update-card";
import { FormatWheel } from "./format-wheel";
import { MetallicLogo } from "./metallic-logo";

function WideFeatureCard({ title, description, href, label, image, alt }: {
  title: ReactNode;
  description: string;
  href: string;
  label: string;
  image: StaticImageData;
  alt: string;
}) {
  return (
    <article className="home-feature-layout__block home-feature-layout__wide home-feature-layout__wide-feature">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={href} className="update-card__link">
        {label} <ChevronRight size={16} aria-hidden="true" />
      </Link>
      <Image
        src={image}
        alt={alt}
        sizes="(max-width: 600px) 92vw, (max-width: 1328px) 85vw, 1200px"
      />
    </article>
  );
}

export function HomeFeatureLayout() {
  return (
    <div className="home-feature-layout">
      <PlatformSteps />
      <div className="home-feature-layout__mosaic">
        <article className="home-feature-layout__block home-feature-layout__tall home-feature-layout__platform">
          <MetallicLogo />
          <h2>Jūsu organizācijas<br />digitālais pamats.</h2>
          <p className="home-feature-layout__platform-since">Izstrādē kopš 2020. gada.</p>
          <p>Viena modulāra platforma cilvēkiem, procesiem un informācijai — pielāgojama jūsu organizācijas vajadzībām.</p>
          <Link href="/produkts/parskats">Iepazīt EIVIS</Link>
        </article>
        <IntegrationsCard />
        <FormatWheel />
        <article className="home-feature-layout__block home-feature-layout__screen">
          <Image
            src={adminPhone}
            alt="EIVIS administrācijas darba vide tālrunī"
            sizes="(max-width: 600px) 44vw, (max-width: 1328px) 28vw, 330px"
          />
          <h2 className="mosaic-card-title">Viena sistēma.<br />Jebkurā ekrānā.</h2>
        </article>
      </div>
      <section className="home-feature-layout__intro" aria-labelledby="home-modules-title">
        <h2 id="home-modules-title">Viena sistēma<br />visai organizācijai</h2>
        <ul>
          <li><Link href="/moduli/zurnals-un-macibu-process"><GraduationCap size={16} aria-hidden="true" />Izglītība</Link></li>
          <li><Link href="/moduli/dokumenti"><FileText size={16} aria-hidden="true" />Dokumenti</Link></li>
          <li><Link href="/moduli/finanses"><Wallet size={16} aria-hidden="true" />Finanses</Link></li>
          <li><Link href="/moduli/sazina-un-pazinojumi"><MessagesSquare size={16} aria-hidden="true" />Saziņa un paziņojumi</Link></li>
          <li><Link href="/moduli/kopmitnes-un-telpas"><Building2 size={16} aria-hidden="true" />Kopmītnes un telpas</Link></li>
        </ul>
        <Link href="/moduli">Iepazīt moduļus <ArrowRight size={14} aria-hidden="true" /></Link>
      </section>
      <div className="home-feature-layout__sequence">
        <DeviceAccessCard />
        <UpdateCard />
        <WideFeatureCard
          title={<>Svarīgais vienmēr<br />sasniedzams.</>}
          description="Vienota informācija dažādās darba vidēs — no personīgā tālruņa līdz organizācijas digitālajiem ekrāniem."
          href="/produkts/parskats"
          label="Iepazīt platformu"
          image={dashboardImage}
          alt="EIVIS pārskati datorā, tālrunī un organizācijas informācijas ekrānā"
        />
        <div className="home-feature-layout__card-pair">
          <WorkflowCard />
          <AnalyticsCard />
        </div>
        <WideFeatureCard
          title={<>Viena darbība.<br />Vairāki procesi.</>}
          description="No pirmā pieteikuma līdz ikdienas pārvaldībai — EIVIS savieno procesus un ļauj izmantot informāciju tur, kur tā nepieciešama."
          href="/produkts/eivis-iespejas"
          label="Iepazīt iespējas"
          image={admissionsImage}
          alt="EIVIS studenta uzņemšanas darbplūsma no pieteikuma līdz studenta ierakstam"
        />
      </div>
    </div>
  );
}
