"use client";

import { Cloud, Database, Files, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./open-integrations.css";

const examples = [
  { name: "Horizon", logo: "/horizon-logo.png" },
  { name: "eParaksts", logo: "/eparaksts-logo.png" },
  { name: "Google Workspace", label: "Workspace", icon: Cloud },
  { name: "DVS (Namejs)", label: "Namejs", icon: Files },
  { name: "Mykoob", label: "Mykoob", icon: Database },
];

export function OpenIntegrations() {
  const tiles = useRef<HTMLUListElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!tiles.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setEntered(true);
      observer.disconnect();
    }, { threshold: .3 });
    observer.observe(tiles.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="open-integrations" aria-labelledby="open-integrations-title">
      <h2 id="open-integrations-title">
        Atvērti jaunām integrācijām.
        <span>Arī tām, kuras vēl neesam izveidojuši.</span>
      </h2>
      <ul ref={tiles} className="open-integrations__tiles" aria-label="Savienojumu piemēri" data-entered={entered}>
        {examples.map(({ name, logo, label, icon: Icon }, index) => (
          <li key={name} style={{ "--tile-delay": `${index * 45}ms` } as CSSProperties}>
            {logo && <Image src={logo} alt={name} width={36} height={36} />}
            {Icon && (
              <span className="open-integrations__system" aria-label={name} role="img">
                <Icon size={19} aria-hidden="true" />
                <span aria-hidden="true">{label}</span>
              </span>
            )}
          </li>
        ))}
        <li className="open-integrations__plus" style={{ "--tile-delay": `${examples.length * 45}ms` } as CSSProperties}>
          <span className="sr-only">Citas integrācijas</span>
          <Plus size={24} aria-hidden="true" />
        </li>
      </ul>
      <p>EIVIS neierobežo jūsu iestādi ar iepriekš noteiktu integrāciju sarakstu. Ja ārējā sistēma nodrošina tehniskas savienošanas iespējas, mēs varam izstrādāt tai pielāgotu integrāciju — lai jūsu izmantotie rīki darbotos vienotā vidē.</p>
    </section>
  );
}
