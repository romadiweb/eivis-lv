import Image from "next/image";
import Link from "next/link";
import configurationImage from "../../../../public/eivis-configuration.png";
import { PageShell } from "@/app/_components/page-shell";
import { pageContent } from "@/lib/page-content";
import { Capabilities } from "./_components/capabilities";
import { EivisMobileExperienceSection } from "./_components/eivis-mobile-experience-section";
import { EivisCustomizationSection } from "./_components/eivis-customization-section";
import { EivisCapabilitiesDirectory } from "./_components/eivis-capabilities-directory";
import "../_components/product-presentation.css";

export default function Page() {
  return (
    <PageShell
      contentKey="produkts/eivis-iespejas"
      content={pageContent["produkts/eivis-iespejas"]}
      heroMedia={
        <Image
          className="secondary-hero__image eivis-possibilities__hero-image"
          src={configurationImage}
          alt="EIVIS darba vides konfigurācija ar pielāgotiem moduļiem, lomām, terminoloģiju un procesiem"
          sizes="(max-width: 520px) calc(100vw - 32px), (max-width: 1148px) calc(100vw - 48px), 1100px"
        />
      }
    >
      <Capabilities />
      <EivisMobileExperienceSection />
      <EivisCustomizationSection />
      <EivisCapabilitiesDirectory />
      <section className="product-cta possibilities-cta" aria-labelledby="possibilities-cta-title">
        <h2 id="possibilities-cta-title">Neredzat to, kas nepieciešams jūsu iestādei?</h2>
        <p>
          EIVIS funkcionalitāte nav ierobežota ar vienu standarta risinājumu.
          Pastāstiet par saviem procesiem un vajadzībām — izvērtēsim, kā tos īstenot.
        </p>
        <Link href="/kontakti" className="pill-button pill-button--primary">
          Pieteikt EIVIS demonstrāciju
        </Link>
      </section>
    </PageShell>
  );
}
