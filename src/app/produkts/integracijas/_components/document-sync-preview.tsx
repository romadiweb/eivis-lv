"use client";

import { CircleCheck, FileText, Link2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function DocumentSyncPreview() {
  const preview = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const element = preview.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setEntered(true);
      observer.disconnect();
    }, { threshold: .25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="integration-operations__visual">
      <div className="document-sync__canvas" ref={preview} data-entered={entered}>
        <div className="document-sync__status">
          <CircleCheck size={18} aria-hidden="true" />
          <div><strong>Dokumenta sinhronizācija</strong><span>DVS (Namejs) · Piemērs</span></div>
          <span className="document-sync__badge">Izdevās</span>
        </div>
        <div className="document-sync__connector" aria-hidden="true" />
        <div className="document-sync__window">
          <div className="document-sync__bar"><FileText size={15} aria-hidden="true" /> EIVIS / Dokumenti</div>
          <div className="document-sync__record">
            <p>Dokumenta informācija</p>
            <h3>Iesniegums</h3>
            <dl>
              <div><dt>Dokumenta veids</dt><dd>Iesniegums</dd></div>
              <div><dt>Statuss</dt><dd><span className="document-sync__badge">Sinhronizēts</span></dd></div>
              <div><dt>Saistītā sistēma</dt><dd>DVS (Namejs)</dd></div>
            </dl>
            <div className="document-sync__linked"><Link2 size={16} aria-hidden="true" /> Saistītais dokuments</div>
          </div>
        </div>
      </div>
      <div className="document-sync__strip">
        <CircleCheck size={16} aria-hidden="true" />
        <span>EIVIS / DVS (Namejs)</span>
        <strong>Sinhronizācija pabeigta</strong>
      </div>
    </div>
  );
}
