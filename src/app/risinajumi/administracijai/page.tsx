import administrationHero from "../../../../public/eivis-administration-cloud-hero.png";
import { SolutionEditorialHero } from "../_components/solution-editorial-hero";

export default function Page() {
  return (
    <main>
      <SolutionEditorialHero
        eyebrow="EIVIS administrācijai"
        title="Pārvaldiet iestādi vienotā vidē."
        description="EIVIS palīdz centralizēt administratīvos procesus vienā sistēmā — no pieprasījumiem un dokumentiem līdz lietotāju pārvaldībai, iekšējai saziņai un ikdienas darba plūsmai. Mazāk haosa, vairāk pārskatāmības."
        image={administrationHero}
        imageAlt="EIVIS simbols virs gaiša mākoņu slāņa"
      />
    </main>
  );
}
