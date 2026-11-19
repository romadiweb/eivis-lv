import { ArrowUpRight, FileText, Monitor, MoreHorizontal, Newspaper } from "lucide-react";
import Link from "next/link";

export function EivisContentFormatsGraphic() {
  return (
    <div className="content-formats" aria-hidden="true">
      <div className="content-formats__stack">
        <div className="content-formats__layer content-formats__tv"><Monitor /><span>TV ekrāni</span></div>
        <div className="content-formats__main">
          <div className="content-formats__header"><Newspaper /><strong>Iestādes aktualitāte</strong><MoreHorizontal /></div>
          <div className="content-formats__lines"><span /><span /><span /></div>
          <p>Ziņas un saturs</p>
          <svg className="content-formats__highlight" viewBox="0 0 300 140" fill="none"><path d="M12 1H288" pathLength="100" /></svg>
        </div>
        <div className="content-formats__layer content-formats__documents"><FileText /><span>Dokumenti</span></div>
      </div>
    </div>
  );
}

export function FormatWheel() {
  return (
    <Link href="/resursi/ekranatteli" className="home-feature-layout__block format-wheel" aria-labelledby="format-wheel-title">
      <span className="integrations-card__arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
      <EivisContentFormatsGraphic />
      <h2 id="format-wheel-title" className="mosaic-card-title">Informācija tur,<br />kur tā nepieciešama.</h2>
    </Link>
  );
}
