import { SecurityHero } from "./_components/security-hero";
import { SecurityFeatureSections } from "./_components/security-feature-sections";
import { SecurityEditorialFinisher } from "./_components/security-editorial-finisher";

export default function Page() {
  return (
    <main className="security-page">
      <SecurityHero />
      <SecurityFeatureSections />
      <SecurityEditorialFinisher />
    </main>
  );
}
