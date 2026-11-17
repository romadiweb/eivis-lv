import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import analyticsImage from "../../../public/eivis-analytics.png";
import updateImage from "../../../public/eivis-update.png";
import workflowImage from "../../../public/eivis-workflow.png";

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
      <Image
        src={updateImage}
        alt="EIVIS atjauninājuma ieviešana pabeigta"
        sizes="(max-width: 600px) 85vw, (max-width: 1328px) 40vw, 480px"
      />
    </FeatureCard>
  );
}

export function AnalyticsCard() {
  return (
    <FeatureCard
      title="Viss svarīgais. Vienā pārskatā."
      description="Pārraugiet sistēmas apmeklējumu, integrāciju darbību un svarīgākos rādītājus vienuviet."
    >
      <Image
        src={analyticsImage}
        alt="Sistēmas apmeklējuma un integrāciju stāvokļa pārskats"
        sizes="(max-width: 600px) 85vw, (max-width: 1328px) 40vw, 480px"
      />
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
      <Image
        src={workflowImage}
        alt="Aprīkojuma pieprasījums ar trim pabeigtiem soļiem"
        sizes="(max-width: 600px) 58vw, (max-width: 1056px) 30vw, 322px"
      />
    </FeatureCard>
  );
}
