import { PageShell } from "@/app/_components/page-shell";
import { pageContent } from "@/lib/page-content";
import { PortalAudiencesSection } from "./_components/portal-audiences-section";
import { PortalExperienceSteps } from "./_components/portal-experience-steps";
import { PortalShowcaseSection } from "./_components/portal-showcase-section";
import "../_components/product-presentation.css";

export default function Page() {
  return (
    <PageShell
      contentKey="produkts/lomas-un-portali"
      content={pageContent["produkts/lomas-un-portali"]}
      heroMedia={
        <Image
          className="secondary-hero__image"
          src={workspaceImage}
          alt="EIVIS darba vide ar amatam pielāgotiem rīkiem un piekļuvi"
          sizes="(max-width: 520px) calc(100vw - 32px), (max-width: 1148px) calc(100vw - 48px), 1100px"
        />
      }
    >
      <PortalAudiencesSection />
      <PortalExperienceSteps />
      <PortalShowcaseSection />
      <section className="product-cta" aria-labelledby="portals-cta-title">
        <h2 id="portals-cta-title">Jūsu iestāde ir unikāla.<br />Tādai jābūt arī darba videi.</h2>
        <p>Veidosim EIVIS darba vides, kas atbilst jūsu iestādes struktūrai, amatiem un ikdienas procesiem — ar katram lietotājam nepieciešamajām funkcijām vienuviet.</p>
        <Link href="/kontakti#contact-form" className="pill-button pill-button--primary">Pieteikt EIVIS demonstrāciju</Link>
      </section>
    </PageShell>
  );
}
import Image from "next/image";
import workspaceImage from "../../../../public/eivis-role-workspace.png";
import Link from "next/link";
