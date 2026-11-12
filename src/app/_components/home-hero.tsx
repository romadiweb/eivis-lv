"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div
        className="home-hero__stage"
        onPointerMove={({ currentTarget, clientX, clientY, pointerType }) => {
          if (pointerType !== "mouse" && pointerType !== "pen") return;
          const field = currentTarget.querySelector(".home-hero__field");
          if (!field) return;
          const bounds = field.getBoundingClientRect();
          const x = (clientX - bounds.left) * 480 / bounds.width - 240;
          const y = (clientY - bounds.top) * 480 / bounds.height - 240;
          field.querySelectorAll<SVGGElement>("[data-ray]").forEach((ray) => {
            const angle = Number(ray.dataset.ray) * Math.PI / 180;
            const length = Number(ray.dataset.length);
            const dx = Math.sin(angle) * length - x;
            const dy = -Math.cos(angle) * length - y;
            const strength = Math.max(0, 1 - Math.hypot(dx, dy) / 95);
            const direction = dx * Math.cos(angle) + dy * Math.sin(angle);
            ray.style.setProperty("--ray-deflection", `${strength * 12 * Math.sign(direction)}deg`);
          });
        }}
        onPointerLeave={({ currentTarget }) => {
          currentTarget.querySelectorAll<SVGGElement>("[data-ray]").forEach((ray) => {
            ray.style.removeProperty("--ray-deflection");
          });
        }}
      >
        <div className="home-hero__lead">
          <h1 id="home-hero-title">EIVIS izglītības pārvaldībai</h1>
          <div className="home-hero__actions">
            <Link href="/kontakti">Pieteikt demonstrāciju <ArrowRight size={15} aria-hidden="true" /></Link>
            <Link href="/produkts">Iepazīt EIVIS</Link>
          </div>
        </div>
        <svg className="home-hero__field" viewBox="0 0 480 480" aria-hidden="true">
          <g className="home-hero__rays">
          {Array.from({ length: 184 }, (_, index) => {
            const angle = index * 137.508;
            const end = 105 + (index * 47) % 121;
            const timing = {
              "--signal-delay": `-${(index * 0.731) % 7}s`,
              "--signal-duration": `${3.8 + (index % 13) * 0.24}s`,
            } as CSSProperties;
            return (
              <g key={index} transform={`rotate(${angle} 240 240)`}>
                <g className="home-hero__ray" data-ray={angle} data-length={end}>
                <g className="home-hero__signal" style={timing}>
                  <path d={`M240 240V${240 - end}`} stroke="#d4d7db" strokeWidth=".65" />
                  <circle cx="240" cy={240 - end} r={index % 7 ? 1.1 : 1.55} fill="#939aa3" />
                </g>
                </g>
              </g>
            );
          })}
          </g>
          <rect className="home-hero__center" x="162" y="162" width="156" height="156" rx="36" fill="white" stroke="#e1e3e5" />
        </svg>
        <div className="home-hero__detail">
          <Link className="home-hero__announcement" href="/produkts/eivis-iespejas">
            <span className="home-hero__new">Jaunums</span>
            EIVIS iespējas <ArrowRight size={12} aria-hidden="true" />
          </Link>
          <p>Savienojiet mācības, administrēšanu un ikdienas darbu. No uzņemšanas līdz studiju noslēgumam katram ir pieejama vajadzīgā informācija un rīki.</p>
        </div>
      </div>
      <div className="home-hero__belt">
        <p>EIVIS izvēlas izglītības kopiena</p>
        <ul>
          <li aria-label="Vieta iestādes logotipam"><span className="home-hero__logo-slot" /></li>
        </ul>
      </div>
    </section>
  );
}
