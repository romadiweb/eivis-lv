import Image from "next/image";
import configurationImage from "../../../../public/eivis-configuration.png";
import { PageShell } from "@/app/_components/page-shell";
import { pageContent } from "@/lib/page-content";
import { Capabilities } from "./_components/capabilities";

export default function Page() {
  return (
    <PageShell
      contentKey="produkts/eivis-iespejas"
      content={pageContent["produkts/eivis-iespejas"]}
      heroMedia={
        <Image
          className="secondary-hero__image"
          src={configurationImage}
          alt="EIVIS darba vides konfigurācija ar pielāgotiem moduļiem, lomām, terminoloģiju un procesiem"
          sizes="(max-width: 520px) calc(100vw - 32px), (max-width: 1148px) calc(100vw - 48px), 1100px"
        />
      }
    >
      <Capabilities />
    </PageShell>
  );
}
