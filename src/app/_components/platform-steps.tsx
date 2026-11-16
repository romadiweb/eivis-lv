"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  ["Izvēlies", "Izvēlies organizācijai vajadzīgos moduļus. Katrs var darboties patstāvīgi, bet vajadzības gadījumā tos iespējams savienot."],
  ["Savieno", "Informācija pārvietojas starp saistītajiem procesiem bez liekas atkārtotas ievades. Piemēram, nodarbību saraksta dati var parādīties arī informācijas ekrānos."],
  ["Pielāgo", "Administrācijai, pasniedzējiem un studentiem ir pieejami tieši viņiem nepieciešamie rīki un informācija."],
  ["Paplašini", "Pievieno jaunus moduļus un savienojumus ar esošajām sistēmām, saglabājot vienotu darba vidi."],
] as const;

const illustrations = ["izvelies", "savieno", "pielago", "paplasini"];

function setSvgPaused(element: HTMLObjectElement | null, paused: boolean) {
  const document = element?.contentDocument;
  const root = document?.querySelector("svg") as SVGSVGElement | null;
  if (!document || !root) return;

  if (paused) {
    if (typeof root.pauseAnimations === "function") root.pauseAnimations();
    document.getAnimations().forEach((animation) => animation.pause());
    return;
  }

  if (typeof root.unpauseAnimations === "function") root.unpauseAnimations();
  document.getAnimations().forEach((animation) => animation.play());
}

export function PlatformSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const section = useRef<HTMLElement>(null);
  const visual = useRef<HTMLObjectElement>(null);
  const [entered, setEntered] = useState(false);
  const [inView, setInView] = useState(false);
  const illustration = illustrations[active];

  useEffect(() => {
    const element = section.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) setEntered(true);
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setSvgPaused(visual.current, paused);
  }, [illustration, paused]);

  return (
    <section ref={section} data-entered={entered} data-in-view={inView} className="home-feature-layout__block platform-steps" aria-labelledby="platform-steps-title">
      <h2 id="platform-steps-title">Viena platforma.<br />Neierobežotas iespējas.</h2>
      <ul className="platform-steps__list">
        {steps.map(([title, description], index) => (
          <li key={title}>
            <div className="platform-steps__row">
              <button type="button" aria-expanded={active === index} aria-controls={`platform-step-${index}`} onClick={() => setActive(index)}>
                {title}
              </button>
              {active === index && (
                <button type="button" className="platform-steps__timer" data-paused={paused} aria-label={paused ? "Turpināt automātisko pārslēgšanu" : "Pauzēt automātisko pārslēgšanu"} onClick={() => setPaused((current) => !current)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle
                      className="platform-steps__progress"
                      style={illustration === "izvelies" ? { animationDuration: "12.8s" } : undefined}
                      cx="12"
                      cy="12"
                      r="10"
                      pathLength="100"
                      onAnimationEnd={() => setActive((index + 1) % steps.length)}
                    />
                  </svg>
                  {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
                </button>
              )}
            </div>
            <p id={`platform-step-${index}`} hidden={active !== index}>{description}</p>
          </li>
        ))}
      </ul>
      <div key={illustration} className="platform-steps__visual" data-illustration={illustration}>
        {inView ? (
          <object
            ref={visual}
            data={`/${illustration}.svg`}
            type="image/svg+xml"
            aria-hidden="true"
            tabIndex={-1}
            onLoad={() => setSvgPaused(visual.current, paused)}
          >
            <Image src={`/${illustration}-still.svg`} alt="" width={825} height={465} unoptimized />
          </object>
        ) : (
          <Image src={`/${illustration}-still.svg`} alt="" width={825} height={465} unoptimized />
        )}
      </div>
    </section>
  );
}
