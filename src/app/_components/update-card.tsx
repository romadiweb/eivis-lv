import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { EivisOverviewAnalyticsGraphic, EivisRequestProgressGraphic } from "./feature-previews";
import { EivisContinuousDevelopmentGraphic } from "./continuous-development-graphic";

export function FeatureCard({
  title,
  description,
  linkLabel = "Uzzināt vairāk",
  children,
}: {
  title: ReactNode;
  description: string;
  linkLabel?: string;
  children?: ReactNode;
}) {
  return (
    <article className="home-feature-layout__block update-card">
      {children && <div className="update-card__visual">{children}</div>}
      <div className="update-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href="/produkts/eivis-iespejas" className="update-card__link">
          {linkLabel} <ChevronRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function UpdateCard() {
  return (
    <FeatureCard
      title="Nepārtraukti attīstībā"
      description="EIVIS regulāri tiek papildināts ar jaunām iespējām, uzlabojumiem un drošības atjauninājumiem, lai platforma augtu kopā ar jūsu vajadzībām."
    >
      <EivisContinuousDevelopmentGraphic />
    </FeatureCard>
  );
}

export function AnalyticsCard() {
  return (
    <FeatureCard
      title="Viss svarīgais. Vienā pārskatā."
      description="Pārraugiet sistēmas apmeklējumu, integrāciju darbību un svarīgākos rādītājus vienuviet."
    >
      <EivisOverviewAnalyticsGraphic />
    </FeatureCard>
  );
}

export function WorkflowCard() {
  return (
    <FeatureCard
      title="No pieprasījuma līdz rezultātam"
      description="Pieteikumi, uzdevumi un saskaņojumi vienotā darba plūsmā. Skaidri soļi, atbildīgie un izpildes statuss."
      linkLabel="Iepazīt iespējas"
    >
      <EivisRequestProgressGraphic />
    </FeatureCard>
  );
}
