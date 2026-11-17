import { ArrowLeftRight, ArrowUpRight, ClipboardCheck, ListChecks, RefreshCw } from "lucide-react";
import Link from "next/link";
import { DocumentSyncPreview } from "./document-sync-preview";
import "./integration-operations.css";
import "./document-sync.css";

const benefits = [
  { icon: ClipboardCheck, title: "Mazāk atkārtotas ievades", description: "Samaziniet nepieciešamību vienu un to pašu informāciju manuāli ievadīt vairākās sistēmās." },
  { icon: ArrowLeftRight, title: "Saskaņota informācijas aprite", description: "Veidojiet datu apmaiņu starp EIVIS un iestādes izmantotajiem risinājumiem." },
  { icon: ListChecks, title: "Pārskatāmi rezultāti", description: "Sekojiet integrāciju izpildei un savlaicīgi identificējiet situācijas, kurām nepieciešama uzmanība." },
];

export function DocumentSyncSection() {
  return (
    <section className="integration-operations document-sync" aria-labelledby="document-sync-title">
      <div className="integration-operations__copy">
        <div className="integration-operations__body">
          <div>
            <p className="integration-operations__label"><RefreshCw size={16} aria-hidden="true" /> Datu sinhronizācija</p>
            <h2 id="document-sync-title">Informācija tur, kur tai jābūt.<br />Bez liekām darbībām.</h2>
          </div>
          <ul className="integration-operations__capabilities">
            {benefits.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <Icon size={17} aria-hidden="true" />
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="integration-operations__footer">
          <p>Mazāk manuāla darba. Vairāk laika svarīgajam.</p>
          <Link href="/kontakti#contact-form">Pārrunāt iespējas <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>
      <DocumentSyncPreview />
    </section>
  );
}
