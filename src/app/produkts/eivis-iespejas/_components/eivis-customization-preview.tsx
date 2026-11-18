import { ChevronRight, Layers3, Workflow } from "lucide-react";

const environmentItems = [
  "Terminoloģija un sadaļu nosaukumi",
  "Lietotāju lomas un tiesības",
  "Moduļu izvēle un struktūra",
  "Informācijas paneļi",
  "Saskarnes izkārtojums",
] as const;

const workflowItems = [
  "Pieteikumu un veidlapu loģika",
  "Saskaņošanas darbplūsmas",
  "Dokumentu aprites scenāriji",
  "Savienojumi ar citām sistēmām",
  "Iestādei veidotas funkcijas",
] as const;

type ConfigurationGroupProps = {
  icon: typeof Layers3;
  items: readonly string[];
  status: string;
  title: string;
  animatedItem: number;
  animationOrder: "first" | "second";
};

function ConfigurationGroup({ icon: Icon, items, status, title, animatedItem, animationOrder }: ConfigurationGroupProps) {
  return (
    <section className="customization-preview__group">
      <header>
        <span className="customization-preview__group-icon"><Icon size={15} /></span>
        <h3>{title}</h3>
        <span className="customization-preview__status">{status}</span>
      </header>
      <ul>
        {items.map((item, index) => (
          <li
            className={index === animatedItem ? "customization-preview__row--active" : undefined}
            data-animation-order={index === animatedItem ? animationOrder : undefined}
            key={item}
          >
            <span>{item}</span>
            <ChevronRight size={13} aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EivisCustomizationPreview() {
  return (
    <div className="customization-preview" aria-label="EIVIS pielāgošanas paneļa ilustrācija" role="img">
      <div className="customization-preview__window">
        <div className="customization-preview__browser-bar">
          <span className="customization-preview__browser-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>EIVIS · Pielāgošana</span>
        </div>
        <div className="customization-preview__content">
          <ConfigurationGroup
            icon={Layers3}
            title="Iestādes vide"
            status="Pielāgota"
            items={environmentItems}
            animatedItem={0}
            animationOrder="first"
          />
          <ConfigurationGroup
            icon={Workflow}
            title="Darba procesi"
            status="Individuāli"
            items={workflowItems}
            animatedItem={1}
            animationOrder="second"
          />
        </div>
      </div>
    </div>
  );
}
