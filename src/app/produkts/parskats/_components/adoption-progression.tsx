"use client";

import { Check } from "lucide-react";
import { useId, useState } from "react";
import { AdoptionIllustration } from "./adoption-illustration";
import "./adoption-progression.css";

const steps = [
  {
    title: "Sāc ar svarīgāko",
    description: "Identificē ikdienas procesus, kuros visvairāk laika aizņem manuāls darbs, dokumentu aprite vai informācijas meklēšana.",
    benefits: ["Izvērtē iestādes prioritātes", "Izvēlies nepieciešamās funkcijas"],
  },
  {
    title: "Ievies savā darba vidē",
    description: "Pārvieto izvēlētos procesus uz EIVIS un izveido pārskatāmu darba vidi, kurā darbiniekiem nepieciešamā informācija ir vienuviet.",
    benefits: ["Vienkāršāka informācijas aprite", "Mazāk atkārtotu darbību"],
  },
  {
    title: "Attīsti kopā ar iestādi",
    description: "Pievieno nākamos moduļus, paplašini lietojumu citās struktūrvienībās un veido arvien vienotāku digitālo vidi.",
    benefits: ["Pakāpeniska funkciju paplašināšana", "Vienota pieeja iestādes procesiem"],
  },
];

export function AdoptionProgression() {
  const [active, setActive] = useState(0);
  const id = useId();

  return (
    <section className="adoption" aria-labelledby={`${id}-title`}>
      <header className="adoption__header">
        <h2 id={`${id}-title`}>Sāc ar nepieciešamo. Attīsti pakāpeniski.</h2>
        <p>Digitālajai attīstībai nav jānotiek vienā dienā. Ievies EIVIS tur, kur tas sniedz lielāko ieguvumu, un paplašini sistēmu atbilstoši iestādes vajadzībām.</p>
      </header>
      <div className="adoption__layout">
        <AdoptionIllustration stage={active} />
        <ol className="adoption__steps" role="list">
          {steps.map(({ title, description, benefits }, index) => {
            const expanded = index === active;
            const panelId = `${id}-step-${index}`;
            return (
              <li className="adoption__step" data-active={expanded} key={title}>
                <h3>
                  <button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setActive(index)}>
                    {title}
                  </button>
                </h3>
                <div className="adoption__details" id={panelId} inert={!expanded}>
                  <div className="adoption__details-inner">
                    <p>{description}</p>
                    <ul>
                      {benefits.map((benefit) => (
                        <li key={benefit}><Check size={16} aria-hidden="true" />{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
