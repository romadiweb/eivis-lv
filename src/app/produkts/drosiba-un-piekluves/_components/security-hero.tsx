import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { PermissionsPreview } from "./permissions-preview";
import "./security-hero.css";

export function SecurityHero() {
  return (
    <section className="security-hero" aria-labelledby="security-hero-title">
      <svg className="security-hero__orbits" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
        <ellipse cx="800" cy="72" rx="760" ry="430" /><ellipse cx="800" cy="76" rx="620" ry="600" />
        <ellipse cx="800" cy="-30" rx="410" ry="810" /><path d="M-80 730C310 490 520 478 800 590c300 120 570 58 900-214" />
      </svg>
      <div className="security-hero__inner">
        <div className="security-hero__layout">
          <div className="security-hero__copy">
            <h1 id="security-hero-title">Drošība, kas pielāgojas jūsu iestādei.</h1>
            <p className="security-hero__description">Pārvaldiet lietotāju lomas, piekļuves tiesības un informācijas pieejamību atbilstoši savas iestādes struktūrai. EIVIS ļauj veidot individuālu piekļuves modeli, kur katram lietotājam pieejams viņa darbam nepieciešamais.</p>
            <div className="security-hero__actions">
              <Link className="pill-button security-hero__primary" href="/kontakti#contact-form">Pārrunāt drošības vajadzības</Link>
              <Link className="pill-button security-hero__secondary" href="#security-details">Apskatīt iespējas</Link>
            </div>
          </div>
          <PermissionsPreview />
        </div>
        <div className="security-hero__summary" id="security-details">
          <h2>Katram lietotājam — atbilstoša piekļuve.</h2>
          <div className="security-policy" aria-label="Ilustratīvs piekļuves noteikuma piemērs">
            <div className="security-policy__bar">
              <span><ShieldCheck size={14} aria-hidden="true" />Piekļuves noteikums</span>
              <small>Piemērs</small>
            </div>
            <div className="security-policy__content">
              <p><span>Loma:</span> <strong>Darbinieks</strong></p>
              <p><span>Dokumenti</span> <i>·</i> <em>Skatīt</em> <b>→</b> <mark>Atļauts</mark></p>
            </div>
          </div>
          <p>Piekļuves tiesības tiek pielāgotas iestādes struktūrai, lomām un darba procesiem.</p>
        </div>
      </div>
    </section>
  );
}
