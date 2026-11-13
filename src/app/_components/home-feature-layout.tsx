import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { PlatformSteps } from "./platform-steps";
import { IntegrationsCard } from "./integrations-card";
import { UpdateCard } from "./update-card";
import { FormatWheel } from "./format-wheel";

export function HomeFeatureLayout() {
  return (
    <div className="home-feature-layout">
      <PlatformSteps />
      <div className="home-feature-layout__mosaic">
        <div className="home-feature-layout__block home-feature-layout__tall" aria-hidden="true" />
        <IntegrationsCard />
        <div className="home-feature-layout__block" aria-hidden="true" />
        <FormatWheel />
      </div>
      <section className="home-feature-layout__intro" aria-labelledby="home-modules-title">
        <h2 id="home-modules-title">Viena sistēma<br />visai organizācijai</h2>
        <ul>
          <li><GraduationCap size={15} aria-hidden="true" />Izglītība</li>
        </ul>
        <Link href="/moduli">Iepazīt moduļus <ArrowRight size={14} aria-hidden="true" /></Link>
      </section>
      <div className="home-feature-layout__sequence">
        <div className="home-feature-layout__block" aria-hidden="true" />
        <UpdateCard />
        {[true, false, false, true].map((wide, index) => (
          <div
            key={index}
            aria-hidden="true"
            className={wide
              ? "home-feature-layout__block home-feature-layout__wide"
              : "home-feature-layout__block"}
          />
        ))}
      </div>
    </div>
  );
}
