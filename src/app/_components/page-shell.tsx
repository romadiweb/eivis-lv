import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { PageContent } from "@/lib/page-content";
import "./inner-hero.css";
import "./page-shell.css";

type PageShellProps = {
  content: PageContent;
  contentKey: string;
  children?: ReactNode;
  heroMedia?: ReactNode;
};

type HeroVariant = "editorial" | "media" | "split" | "compact";

const mediaHeroes = new Set([
  "produkts",
  "produkts/eivis-iespejas",
  "produkts/lomas-un-portali",
  "resursi/ekranatteli",
]);

const editorialHeroes = new Set(["moduli", "produkts/parskats"]);

const compactHeroes = new Set([
  "resursi",
  "resursi/biezakie-jautajumi",
  "resursi/ieviesana",
  "resursi/atbalsts",
]);

const mediaFirstHeroes = new Set([
  "produkts/integracijas",
  "produkts/drosiba-un-piekluves",
  "risinajumi/macibu-dalai",
  "risinajumi/studentiem",
  "risinajumi/uznemsanai",
  "moduli/zurnals-un-macibu-process",
  "moduli/dokumenti",
  "moduli/sazina-un-pazinojumi",
  "moduli/kopmitnes-un-telpas",
]);

const sectionLabels: Record<string, string> = {
  produkts: "EIVIS platforma",
  risinajumi: "Risinājumi",
  moduli: "Moduļi",
  resursi: "Resursi",
};

function getVariant(contentKey: string): HeroVariant {
  if (mediaHeroes.has(contentKey)) return "media";
  if (editorialHeroes.has(contentKey)) return "editorial";
  if (compactHeroes.has(contentKey)) return "compact";
  return "split";
}

export function PageShell({ content, contentKey, children, heroMedia }: PageShellProps) {
  const section = contentKey.split("/")[0];
  const variant = getVariant(contentKey);
  const hasFrame = variant === "media" || variant === "split";
  const showAction = section !== "resursi";
  const isOverview = contentKey === "produkts/parskats";
  const titleId = `secondary-hero-${contentKey.replaceAll("/", "-")}`;

  return (
    <main
      className={`secondary-page secondary-page--${variant}`}
      data-section={section}
      data-overview={isOverview || undefined}
    >
      <section
        className="secondary-hero"
        data-media-first={mediaFirstHeroes.has(contentKey) || undefined}
        aria-labelledby={titleId}
      >
        <div className="secondary-hero__layout">
          <div className="secondary-hero__copy">
            <span className="secondary-hero__eyebrow">
              {sectionLabels[section]}
            </span>
            <h1 id={titleId}>{content.title}</h1>
            <p>{content.description}</p>
            {showAction ? (
              <div className="secondary-hero__actions">
                <Link href="/kontakti" className="pill-button pill-button--primary">
                  Pieteikt demonstrāciju
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                {isOverview && (
                  <Link href="/kontakti#contact-form" className="pill-button pill-button--secondary">
                    Sazināties ar komandu
                  </Link>
                )}
              </div>
            ) : null}
          </div>
          {heroMedia ?? (hasFrame ? (
            <div className="secondary-hero__frame" aria-hidden="true">
              <span />
            </div>
          ) : null)}
        </div>
      </section>
      {children}
    </main>
  );
}
