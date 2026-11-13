import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function IntegrationsCard() {
  return (
    <Link href="/produkts/integracijas" className="home-feature-layout__block home-feature-layout__strip integrations-card">
      <div className="integrations-card__tiles">
        <span className="integrations-card__google"><span>Google</span></span>
        <span className="integrations-card__horizon">
          <Image src="/horizon-logo.png" alt="Horizon" width={52} height={52} />
        </span>
        <span className="integrations-card__esign">
          <Image src="/eparaksts-logo.png" alt="eParaksts" width={52} height={52} />
        </span>
      </div>
      <div className="integrations-card__copy">
        <h2>Savienots ar jūsu sistēmām</h2>
        <span>Skatīt visas integrācijas</span>
      </div>
      <span className="integrations-card__arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
    </Link>
  );
}
