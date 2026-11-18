import { Check } from "lucide-react";
import "./security-editorial-finisher.css";

export function SecurityEditorialFinisher() {
  return (
    <section className="security-finisher" aria-labelledby="security-finisher-title">
      <div className="security-finisher__copy">
        <p>Vienota piekļuves pārvaldība</p>
        <h2 id="security-finisher-title">Viena iestāde. Dažādas atbildības. Precīza piekļuve.</h2>
        <div>EIVIS piekļuves modelis tiek veidots atbilstoši jūsu iestādes struktūrai, amatiem un darba procesiem — lai katram lietotājam būtu pieejams tieši viņam nepieciešamais.</div>
      </div>

      <div className="security-finisher__architecture" aria-hidden="true">
        <svg viewBox="0 0 1200 360" preserveAspectRatio="none">
          <g className="security-finisher__grid-lines">
            <path d="M600 18 40 360M600 18 180 360M600 18 320 360M600 18 460 360M600 18 740 360M600 18 880 360M600 18 1020 360M600 18 1160 360" />
            <path d="M530 62h140M457 108h286M374 162h452M277 226h646M166 300h868M40 360h1120" />
          </g>
        </svg>
        <div className="security-finisher__label">
          <span><Check size={14} /></span>
          <div><strong>Piekļuves modelis</strong><small>Pielāgots iestādei</small></div>
        </div>
      </div>
    </section>
  );
}
