import Link from "next/link";
import { CalendarCheck, ClipboardCheck, FilePenLine, MessagesSquare, MessageSquareText } from "lucide-react";
import { TeacherVisual } from "./_components/teacher-visual";
import "../../produkts/_components/product-presentation.css";
import "./teacher.css";

const features = [
  { label: "Nodarbību ikdiena", title: "Nodarbības un žurnāls vienā darba ritmā.", description: "Pārskatiet savas nodarbības, grupas un mācību norisi. EIVIS žurnālā pasniedzējs var orientēties ieplānotajās un aizvadītajās nodarbībās, saglabājot skaidru pārskatu par ikdienas darbu." },
  { label: "Pārbaudes darbu plānošana", title: "Sagatavojiet pārbaudes darbu pirms nodarbības.", description: "Veidojiet PD plānus semestrim vai mācību gadam, pievienojiet uzdevumus un punktu sadalījumu. Saglabājiet nepabeigto kā melnrakstu un izmantojiet sagatavoto plānu, kad pārbaudes darbs nepieciešams konkrētā nodarbībā.", note: "Plāns saglabājas, lai pie tā varētu atgriezties un turpināt darbu." },
  { label: "Digitālie pārbaudījumi", title: "Testi ar pārskatāmu izpildes uzraudzību.", description: "Veidojiet digitālus testus un pārraugiet to izpildes norisi. EIVIS palīdz pamanīt būtiskas izpildes apstākļu izmaiņas, piemēram, pārslēgšanos uz citu pārlūka cilni vai testa atvēršanu citā ierīcē.", note: "Šie signāli sniedz pasniedzējam papildu informāciju rezultātu izvērtēšanai." },
  { label: "Vērtējumu labošanas process", title: "No nesekmīga vērtējuma līdz saskaņotai konsultācijai.", description: "Ja studentam ir tiesības uzlabot nesekmīgu vērtējumu, viņš var iesniegt pieteikumu EIVIS. Pasniedzējs saņem pieprasījumu un norāda konsultācijas datumu, laiku un vietu — palīdzot organizēt vērtējuma labošanu pārskatāmā, iestādei saprotamā procesā." },
];

const summaries = [
  { icon: FilePenLine, title: "Plānojiet", description: "Pārbaudes darbus sagatavojiet laikus." },
  { icon: ClipboardCheck, title: "Vērtējiet", description: "Strādājiet ar skaidru uzdevumu un punktu struktūru." },
  { icon: CalendarCheck, title: "Organizējiet", description: "Koordinējiet konsultācijas un studentu pieteikumus." },
];

export default function Page() {
  return (
    <main className="teacher-page">
      <header className="teacher-page__intro">
        <p className="teacher-page__eyebrow">Risinājumi / Pasniedzējiem</p>
        <h1>Vairāk laika mācīšanai. Skaidrāki procesi katrā solī.</h1>
        <p>Plānojiet pārbaudes darbus, organizējiet nodarbības, vadiet testus un pārskatiet studentu pieteikumus vērtējumu labošanai — vienā darba vidē, kas pielāgota pasniedzēja ikdienai.</p>
      </header>
      <div className="teacher-page__features">
        {features.map(({ label, title, description, note }, index) => (
          <div key={title}>
            <section className="teacher-feature" data-reverse={index % 2 === 1} aria-labelledby={`teacher-feature-${index}`}>
              <div className="teacher-feature__copy">
                <p className="teacher-page__eyebrow">{label}</p>
                <h2 id={`teacher-feature-${index}`}>{title}</h2>
                <p>{description}</p>
                {note && <p className="teacher-feature__note">{note}</p>}
              </div>
              <TeacherVisual kind={index} />
            </section>
            {index === 1 && (
              <ul className="teacher-page__summary">
                {summaries.map(({icon: Icon,title,description}) => <li key={title}><Icon size={20} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
      <section className="teacher-page__support" aria-label="Pasniedzēja ikdienas rīki">
        {[
          { icon: CalendarCheck, title: "Konsultācijas", description: "Pārskatiet un organizējiet konsultāciju norisi atbilstoši pasniedzēja darba kārtībai." },
          { icon: MessagesSquare, title: "Saziņa", description: "Svarīgākā ikdienas informācijas apmaiņa un paziņojumi pieejami EIVIS darba vidē." },
          { icon: MessageSquareText, title: "Atsauksmes", description: "Atsevišķa sadaļa atgriezeniskajai saitei pasniedzēja darba vidē." },
        ].map(({icon: Icon,title,description}) => <div key={title}><Icon size={20} aria-hidden="true" /><h2>{title}</h2><p>{description}</p></div>)}
      </section>
      <section className="product-cta teacher-page__cta" aria-labelledby="teacher-cta-title">
        <p className="teacher-page__eyebrow">EIVIS pasniedzējiem</p>
        <h2 id="teacher-cta-title">Mazāk laika organizēšanai. Vairāk — mācīšanai.</h2>
        <p>Uzziniet, kā EIVIS var pielāgot pārbaudes darbu plānošanu, testēšanu, nodarbību žurnālu un konsultāciju procesus jūsu iestādes vajadzībām.</p>
        <Link href="/kontakti#contact-form" className="pill-button pill-button--primary">Pārrunāt savas vajadzības</Link>
      </section>
    </main>
  );
}
