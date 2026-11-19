"use client";

import { ArrowUpRight, FileText, Monitor, MoreHorizontal, Newspaper } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const cards = ["news", "tv", "documents"] as const;
type CardKind = (typeof cards)[number];
type Position = "front" | "top" | "bottom";

function NewsCard() {
  return <><header><Newspaper /><strong>Iestādes aktualitāte</strong><MoreHorizontal /></header><div className="content-carousel__article"><span /><span /><span /><i /></div><footer>Ziņas un saturs</footer></>;
}

function TvCard() {
  return <><header><Monitor /><strong>TV ekrāni</strong><small>Saturs</small></header><div className="content-carousel__screen"><i /><div><span /><span /><span /></div></div><footer>Digitālo ekrānu saturs</footer></>;
}

function DocumentsCard() {
  return <><header><FileText /><strong>Dokumenti</strong><small>Fails</small></header><div className="content-carousel__document"><i><FileText /></i><div><span /><span /><span /><small /></div></div><footer>Dokumentu vide</footer></>;
}

const CardContent = ({ kind }: { kind: CardKind }) => kind === "news" ? <NewsCard /> : kind === "tv" ? <TvCard /> : <DocumentsCard />;

export function EivisContentFormatsGraphic() {
  const [front, setFront] = useState(0);
  const [previousFront, setPreviousFront] = useState(0);
  const [phase, setPhase] = useState<"idle" | "early" | "late">("idle");
  const [visible, setVisible] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .15 });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let depthTimer: ReturnType<typeof setTimeout>;
    let endTimer: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setFront((current) => {
        setPreviousFront(current);
        setPhase("early");
        depthTimer = setTimeout(() => setPhase("late"), 500);
        endTimer = setTimeout(() => setPhase("idle"), 1050);
        return (current + 1) % cards.length;
      });
    }, 4000);
    return () => { clearInterval(interval); clearTimeout(depthTimer); clearTimeout(endTimer); };
  }, [visible]);

  return (
    <div ref={root} className="content-formats" aria-hidden="true">
      <div className="content-carousel" data-phase={phase}>
        {cards.map((kind, index) => {
          const offset = (index - front + cards.length) % cards.length;
          const position: Position = offset === 0 ? "front" : offset === 1 ? "top" : "bottom";
          const isOutgoing = phase !== "idle" && index === previousFront;
          const isIncoming = phase !== "idle" && index === front;
          const depth = phase === "early" && isOutgoing ? "front" : phase === "early" && isIncoming ? "middle" : position === "front" ? "front" : "back";
          return <article className="content-carousel__card" data-position={position} data-depth={depth} key={kind}><CardContent kind={kind} /></article>;
        })}
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
