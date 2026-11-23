import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import "./solution-editorial-hero.css";

type SolutionEditorialHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  cropTopThird?: boolean;
};

export function SolutionEditorialHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  cropTopThird = false,
}: SolutionEditorialHeroProps) {
  return (
    <section className="solution-editorial-hero" aria-labelledby="solution-editorial-hero-title">
      <div className="solution-editorial-hero__copy">
        <span className="solution-editorial-hero__eyebrow">{eyebrow}</span>
        <h1 id="solution-editorial-hero-title">{title}</h1>
        <p>{description}</p>
        <div className="solution-editorial-hero__actions">
          <Link href="/kontakti#contact-form" className="pill-button pill-button--primary">
            Pieteikt demonstrāciju
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <Link href="/produkts/eivis-iespejas" className="pill-button pill-button--secondary">
            Skatīt iespējas
          </Link>
        </div>
      </div>

      <div
        className="solution-editorial-hero__visual"
        data-crop-top-third={cropTopThird || undefined}
        style={cropTopThird ? { "--hero-cropped-ratio": `${image.width} / ${image.height * 2 / 3}` } as CSSProperties : undefined}
      >
        <Image
          src={image}
          alt={imageAlt}
          sizes="(max-width: 1280px) 100vw, 1200px"
          preload
        />
      </div>
    </section>
  );
}
