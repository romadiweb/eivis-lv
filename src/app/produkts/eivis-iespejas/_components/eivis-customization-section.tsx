import { EivisCustomizationPreview } from "./eivis-customization-preview";
import "./eivis-customization.css";

export function EivisCustomizationSection() {
  return (
    <section className="eivis-customization" aria-labelledby="eivis-customization-title">
      <div className="eivis-customization__copy">
        <h2 id="eivis-customization-title">Jūsu iestādes loģika. Jūsu EIVIS.</h2>
        <p>
          EIVIS nav visiem vienāda sistēma. Pielāgojam ne tikai sadaļu nosaukumus
          un lietotāju tiesības, bet arī darba procesus, moduļus un integrācijas —
          lai digitālā vide atbilstu tam, kā jūsu iestāde patiesībā strādā.
        </p>
      </div>
      <EivisCustomizationPreview />
    </section>
  );
}
