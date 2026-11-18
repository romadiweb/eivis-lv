import { Check, Clock3, KeyRound, UserCheck, UserMinus, UserPlus, X } from "lucide-react";
import "./security-feature-sections.css";

function PositionPolicyVisual() {
  const rules = [
    ["Personāla lietas", "Rediģēt", true],
    ["Studentu finanses", "Rediģēt", false],
    ["Dokumenti", "Skatīt", true],
  ] as const;
  return (
    <div className="security-feature-visual position-policy" role="img" aria-label="Piekļuves noteikumi personāla speciālista amatam">
      <div className="position-policy__card">
        <p><span>Amats</span><strong>Personāla speciālists</strong></p>
        <div>
          {rules.map(([area, action, allowed]) => (
            <div className="position-policy__rule" key={area}>
              <span>{area}</span><small>·</small><em>{action}</em><b>→</b>
              <strong data-allowed={allowed}>{allowed ? <Check size={12} /> : <X size={12} />}{allowed ? "Atļauts" : "Liegts"}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AccessLifecycleVisual() {
  const steps = [
    { icon: UserPlus, label: "Uzaicināts" },
    { icon: UserCheck, label: "Aktivizēts" },
    { icon: KeyRound, label: "Piešķirts amatam" },
    { icon: UserMinus, label: "Piekļuve atjaunota / atcelta" },
  ];
  return (
    <div className="security-feature-visual access-lifecycle" role="img" aria-label="Lietotāja piekļuves pārvaldības process">
      <div className="access-lifecycle__flow">
        {steps.map(({ icon: Icon, label }, index) => (
          <div className="access-lifecycle__step" key={label}>
            <span><Icon size={16} /></span><strong>{label}</strong><small>0{index + 1}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccessHistoryVisual() {
  const entries = [
    ["Piekļuve piešķirta", "Personāla speciālists", "09:14"],
    ["Parole atjaunota", "", "10:22"],
    ["Amats nomainīts", "Lietvedis", "13:07"],
    ["Lietotājs deaktivizēts", "", "Vakar"],
  ] as const;
  return (
    <div className="security-feature-visual access-history" role="img" aria-label="Piekļuves izmaiņu vēstures piemērs">
      <div className="access-history__card">
        <header><span><Clock3 size={15} />Piekļuves vēsture</span><small>Pēdējās izmaiņas</small></header>
        {entries.map(([action, detail, time], index) => (
          <div className="access-history__entry" key={`${action}-${time}`}>
            <i data-tone={index === 3 ? "muted" : undefined} />
            <p><strong>{action}</strong>{detail && <span> — {detail}</span>}</p><time>{time}</time>
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  { eyebrow: "Droša piekļuve", title: "Piekļuve atbilstoši amatam", body: "EIVIS ļauj noteikt piekļuves tiesības ne tikai pēc lomas, bet arī pēc konkrēta amata, atbildības un iestādes struktūras. Katrs lietotājs redz tikai sev nepieciešamo informāciju un darbības.", Visual: PositionPolicyVisual },
  { eyebrow: "Lietotāji un piekļuve", title: "Droša lietotāju pārvaldība visā iestādē", body: "No lietotāja uzaicināšanas līdz piekļuves atcelšanai — EIVIS ļauj centralizēti pārvaldīt kontus, struktūrvienības un atbildības. Piekļuves var piešķirt, mainīt un atsaukt atbilstoši iestādes procesiem.", Visual: AccessLifecycleVisual },
  { eyebrow: "Pārskatāmība", title: "Katras izmaiņas ir izsekojamas", body: "Piekļuves izmaiņas, statusi un būtiskās darbības ir pārskatāmas vienuviet. Tas palīdz nodrošināt atbildību, caurspīdīgumu un drošību ikdienas darbā.", Visual: AccessHistoryVisual },
] as const;

export function SecurityFeatureSections() {
  return (
    <div className="security-features">
      {sections.map(({ eyebrow, title, body, Visual }, index) => (
        <section className="security-feature" data-reversed={index === 1 || undefined} key={title}>
          <div className="security-feature__copy"><p>{eyebrow}</p><h2>{title}</h2><div>{body}</div></div>
          <Visual />
        </section>
      ))}
    </div>
  );
}
