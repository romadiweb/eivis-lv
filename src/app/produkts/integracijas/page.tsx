import Image from "next/image";
import Link from "next/link";
import integrationDashboard from "../../../../public/eivis-integrations-dashboard.png";
import { IntegrationFeature } from "./_components/integration-feature";
import { IntegrationOperations } from "./_components/integration-operations";
import { OpenIntegrations } from "./_components/open-integrations";
import { DocumentSyncSection } from "./_components/document-sync-section";
import "@/app/_components/inner-hero.css";
import "@/app/_components/page-shell.css";
import "../_components/product-presentation.css";
import "./integrations.css";

export default function Page() {
  return (
    <main className="secondary-page integration-page">
      <section className="integration-page__hero" aria-labelledby="integrations-title">
        <Image src="/eivis-logo-icon-black.svg" alt="" width={50} height={41} unoptimized />
        <h1 id="integrations-title">Savienojiet visu vienotā darba vidē.</h1>
        <p>EIVIS pielāgojas jūsu iestādē jau izmantotajām sistēmām. No gatavām integrācijām līdz individuāli izstrādātiem savienojumiem — iespējas neierobežo iepriekš noteikts pakalpojumu saraksts.</p>
        <Link href="/kontakti#contact-form" className="pill-button integration-page__contact">Pārrunāt integrāciju</Link>
      </section>
      <div className="integration-page__features">
        <IntegrationFeature
          variant="existing"
          label="Vienota ekosistēma"
          title="Jūsu izmantotās sistēmas. Savienotas."
          description="Apvienojiet informācijas apriti starp EIVIS un jau izmantotajiem digitālajiem rīkiem, samazinot manuālu datu ievadi un nepieciešamību pārslēgties starp vairākām sistēmām."
        />
        <IntegrationFeature
          variant="custom"
          label="Bez slēgtas ekosistēmas"
          title="Integrācijas, kas pielāgojas jums."
          description="Ja sistēma nodrošina tehniskas integrācijas iespējas, EIVIS var pielāgot savienojumam ar to. Veidojiet datu apmaiņu un automatizāciju atbilstoši savas iestādes procesiem."
        />
      </div>
      <IntegrationOperations />
      <OpenIntegrations />
      <DocumentSyncSection />
      <Image
        className="product-dashboard"
        src={integrationDashboard}
        alt="EIVIS administrācijas panelis ar integrāciju statusiem un izpildes pārskatu"
        sizes="(max-width: 520px) calc(100vw - 32px), (max-width: 1328px) calc(100vw - 48px), 1280px"
      />
      <section className="product-cta" aria-labelledby="integration-cta-title">
        <h2 id="integration-cta-title">Savienojiet savas sistēmas vienotā darba vidē</h2>
        <Link href="/kontakti#contact-form" className="pill-button pill-button--primary">
          Pārrunāt integrāciju
        </Link>
      </section>
    </main>
  );
}
