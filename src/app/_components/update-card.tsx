import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import updateImage from "../../../public/eivis-update.png";

export function UpdateCard() {
  return (
    <article className="home-feature-layout__block update-card">
      <div className="update-card__visual">
        <Image
          src={updateImage}
          alt="EIVIS atjauninājuma ieviešana pabeigta"
          sizes="(max-width: 600px) 85vw, (max-width: 1328px) 40vw, 480px"
        />
      </div>
      <div className="update-card__copy">
        <h3>Nepārtraukti attīstībā</h3>
        <p>EIVIS regulāri tiek papildināts ar jaunām iespējām, uzlabojumiem un drošības atjauninājumiem, lai platforma augtu kopā ar jūsu vajadzībām.</p>
        <Link href="/produkts/eivis-iespejas" className="update-card__link">
          Uzzināt vairāk <ChevronRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
