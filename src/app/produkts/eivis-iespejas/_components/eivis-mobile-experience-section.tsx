import { EivisMobilePreview } from "./eivis-mobile-preview";
import "./eivis-mobile-experience.css";

const features = [
  {
    title: "Aktuālie paziņojumi un ziņas",
    description: "Sekojiet līdzi svarīgākajai iestādes informācijai.",
  },
  {
    title: "Uzdevumi un pieteikumi",
    description: "Pārskatiet sev piešķirtos uzdevumus un pieejamos pieteikumus.",
  },
  {
    title: "Kalendārs un notikumi",
    description: "Redziet gaidāmos notikumus un ikdienas plānu.",
  },
  {
    title: "Pielāgota darba vide",
    description: "Pieejamās sadaļas un funkcijas atbilst lietotāja lomai un iestādes vajadzībām.",
  },
] as const;

export function EivisMobileExperienceSection() {
  return (
    <section className="mobile-experience" aria-labelledby="mobile-experience-title">
      <header className="mobile-experience__header">
        <h2 id="mobile-experience-title">Jūsu darba vide. Vienmēr pieejama.</h2>
        <p>
          Piekļūstiet svarīgākajai informācijai, uzdevumiem un iestādes
          ikdienas procesiem arī no mobilās ierīces.
        </p>
      </header>

      <div className="mobile-experience__layout">
        <div className="mobile-experience__copy">
          <h3>Viss svarīgākais vienuviet</h3>
          <ul>
            {features.map((feature) => (
              <li key={feature.title}>
                <span className="mobile-experience__marker" aria-hidden="true" />
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <EivisMobilePreview />
      </div>
    </section>
  );
}
