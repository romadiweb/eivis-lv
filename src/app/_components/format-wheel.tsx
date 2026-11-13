import { ArrowUpRight, CalendarDays, ClipboardList, Globe, QrCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

// Keep the assets and order from the original component.
const formats = [
  ["PDF", "pdf", "#f9dcd9"],
  ["Word", "word", "#dceaff"],
  ["Excel", "table", "#d9f1df"],
  ["Attēli", "image", "#efe0ff"],
  ["Video", "video", "#ffe6ce"],
  ["QR kodi", "", "#fff"],
  ["Veidlapas", ClipboardList, "#ffcf79"],
  ["Tīmekļa saturs", Globe, "#b3d6ff"],
  ["Kalendāri", CalendarDays, "#c8b8ff"],
] as const;

const DURATION_SECONDS = 27;

export function FormatWheel() {
  return (
    <Link
      href="/resursi/ekranatteli"
      className="home-feature-layout__block format-wheel"
      aria-labelledby="format-wheel-title"
    >
      <span className="integrations-card__arrow" aria-hidden="true">
        <ArrowUpRight size={16} />
      </span>

      <div className="format-wheel__viewport" aria-hidden="true">
        <ul className="format-wheel__track">
          {formats.map(([label, icon, color], index) => {
            const Icon = typeof icon === "string" ? QrCode : icon;
            const style = {
              "--delay": `${(-index * DURATION_SECONDS) / formats.length}s`,
              backgroundColor: color,
            } as CSSProperties;

            return (
              <li key={label} style={style}>
                {typeof icon === "string" && icon ? (
                  <Image
                    src={`/format-${icon}.svg`}
                    width={54}
                    height={54}
                    alt=""
                    draggable={false}
                  />
                ) : (
                  <Icon size={48} strokeWidth={1.8} aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <h2 id="format-wheel-title">
        Informācija dažādos
        <br />
        formātos
      </h2>
    </Link>
  );
}
