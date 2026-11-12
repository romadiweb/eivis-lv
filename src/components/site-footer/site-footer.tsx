import { Code2, Globe2, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { mainNavigation } from "@/lib/navigation";

const footerGroups = [
  mainNavigation.find((group) => group.title === "Produkts"),
  mainNavigation.find((group) => group.title === "Resursi"),
  mainNavigation.find((group) => group.title === "Risinājumi"),
  {
    title: "Uzņēmums",
    items: [
      { title: "Sākums", href: "/" },
      { title: "Kontakti", href: "/kontakti" },
      { title: "Pieteikt demonstrāciju", href: "/kontakti" },
      { title: "Ieviešana", href: "/resursi/ieviesana" },
      { title: "Atbalsts", href: "/resursi/atbalsts" },
    ],
  },
  {
    title: "Juridiski",
    items: [
      { title: "Drošība un piekļuves", href: "/produkts/drosiba-un-piekluves" },
      { title: "Integrācijas", href: "/produkts/integracijas" },
      { title: "Dokumenti", href: "/moduli/dokumenti" },
      { title: "Finanses", href: "/moduli/finanses" },
    ],
  },
].filter(Boolean);

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__newsletter">
          <Link className="site-footer__brand-card" href="/" aria-label="EIVIS sākums">
            <span className="site-footer__brand-mark" aria-hidden="true" />
          </Link>
          <div className="site-footer__eyebrow">
            <span aria-hidden="true" />
            Jaunumi
          </div>
          <p>Saņemiet EIVIS ieviešanas, atbalsta un produktu jaunumus.</p>
          <Link className="site-footer__subscribe" href="/kontakti">
            Pieteikties
          </Link>
        </div>

        <nav className="site-footer__nav" aria-label="Kājenes navigācija">
          {footerGroups.map((group) => (
            <div className="site-footer__group" key={group!.title}>
              <h2>{group!.title}</h2>
              <ul>
                {group!.items?.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 EIVIS. Visas tiesības aizsargātas.</p>
        <Link className="site-footer__status" href="/resursi/atbalsts">
          <span aria-hidden="true" />
          Sistēmas statuss
        </Link>
        <Link className="site-footer__privacy" href="/produkts/drosiba-un-piekluves">
          <svg
            aria-hidden="true"
            className="site-footer__privacy-icon"
            viewBox="0 0 30 14"
          >
            <rect
              x="0.75"
              y="1.25"
              width="28.5"
              height="11.5"
              rx="5.75"
              fill="#ffffff"
              stroke="#405D96"
              strokeWidth="1.5"
            />
            <path
              d="M10.78 1.25H16.45C19.63 1.25 22.2 3.82 22.2 7C22.2 10.18 19.63 12.75 16.45 12.75H6.95L10.78 1.25Z"
              fill="#405D96"
            />
            <path
              d="M7.46 7.25L9.3 9.02L13.15 4.92"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.45"
            />
            <path
              d="M23.38 5.17L26.52 8.83M26.52 5.17L23.38 8.83"
              fill="none"
              stroke="#405D96"
              strokeLinecap="round"
              strokeWidth="1.45"
            />
          </svg>
          Privātuma izvēles
        </Link>
        <div className="site-footer__social" aria-label="Sociālie kanāli">
          <Link
            className="site-footer__romadi"
            href="https://romadi.lv"
            aria-label="Designed and built by ROMADI"
          >
            <Image
              src="/romadifootersignatureFINAL.svg"
              alt=""
              width={96}
              height={15}
            />
          </Link>
          <Link href="/kontakti" aria-label="E-pasts">
            <Mail aria-hidden="true" size={16} />
          </Link>
          <Link href="/resursi/atbalsts" aria-label="Izstrādātājiem">
            <Code2 aria-hidden="true" size={16} />
          </Link>
          <Link href="/kontakti" aria-label="Publiskais profils">
            <Globe2 aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
