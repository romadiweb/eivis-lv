import { ArrowLeftRight, ArrowUpRight, Boxes, Gauge, Link2, Network, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { IntegrationMonitoring } from "./integration-monitoring";
import "./integration-operations.css";

const capabilities = [
  { icon: ArrowLeftRight, title: "Automātiska datu apmaiņa", description: "Informācija tiek nodota starp savienotajām sistēmām bez atkārtotas manuālas ievades." },
  { icon: Boxes, title: "Vienota informācijas vide", description: "Dažādu sistēmu dati un procesi pieejami vienotā EIVIS darba vidē." },
  { icon: Gauge, title: "Integrāciju uzraudzība", description: "Pārskatāmi savienojumu statusi, izpildes rezultāti un iespējamās kļūdas." },
  { icon: SlidersHorizontal, title: "Pielāgojami savienojumi", description: "Integrācijas tiek veidotas atbilstoši konkrētās iestādes tehniskajai videi un darba procesiem." },
  { icon: Network, title: "Pakāpeniska paplašināšana", description: "Iespēja pievienot jaunus savienojumus, attīstoties iestādes digitālajām vajadzībām." },
];

export function IntegrationOperations() {
  return (
    <section className="integration-operations" aria-labelledby="integration-operations-title">
      <div className="integration-operations__copy">
        <div className="integration-operations__body">
          <div>
            <p className="integration-operations__label"><Network size={16} aria-hidden="true" /> Integrācijas darbībā</p>
            <h2 id="integration-operations-title">Savienotas sistēmas.<br />Mazāk manuāla darba.</h2>
          </div>
          <ul className="integration-operations__capabilities">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <Icon size={17} aria-hidden="true" />
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="integration-operations__footer">
          <p>Jūsu sistēmas. Vienota informācijas aprite.</p>
          <Link href="/kontakti#contact-form">Pārrunāt integrāciju <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="integration-operations__visual">
        <IntegrationMonitoring />
        <div className="integration-operations__strip">
          <Link2 size={16} aria-hidden="true" />
          Sistēmas savienotas. Informācijas aprite vienuviet.
        </div>
      </div>
    </section>
  );
}
