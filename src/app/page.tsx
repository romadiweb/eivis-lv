import { HomeCta } from "./_components/home-cta";
import { HomeHero } from "./_components/home-hero";
import { HomeFeatureLayout } from "./_components/home-feature-layout";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeFeatureLayout />
      <HomeCta />
    </main>
  );
}
