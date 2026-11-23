import administrationHero from "../../../../public/eivis-administration-cloud-hero.png";
import { SolutionEditorialHero } from "../_components/solution-editorial-hero";
import { AdministrationWorkflowSection } from "./_components/administration-workflow";
import { AdministrationOperationalHighlights } from "./_components/administration-highlights";
import Link from "next/link";
import "../../produkts/_components/product-presentation.css";
import "./_components/administration-highlights.css";

export default function Page() {
  return (
    <main>
      <SolutionEditorialHero
        eyebrow="EIVIS administrācijai"
        title="Pārvaldiet iestādi vienotā vidē."
        description="EIVIS palīdz centralizēt administratīvos procesus vienā sistēmā — no pieprasījumiem un dokumentiem līdz lietotāju pārvaldībai, iekšējai saziņai un ikdienas darba plūsmai. Mazāk haosa, vairāk pārskatāmības."
        image={administrationHero}
        cropTopThird
        imageAlt="EIVIS simbols virs gaiša mākoņu slāņa"
      />
      <AdministrationWorkflowSection />
      <AdministrationOperationalHighlights />
      <section className="product-cta administration-cta" aria-labelledby="administration-cta-title">
        <h2 id="administration-cta-title">Sakārtosim jūsu iestādes administratīvo ikdienu.</h2>
        <p>Pārrunāsim, kā organizēt iestādes iestatījumus, pieteikumus, dokumentus un akadēmiskos datus atbilstoši jūsu darba procesiem.</p>
        <Link href="/kontakti#contact-form" className="pill-button pill-button--primary">Pieteikt EIVIS demonstrāciju</Link>
      </section>
    </main>
  );
}
