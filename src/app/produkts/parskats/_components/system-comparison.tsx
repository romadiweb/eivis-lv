import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import "./system-comparison.css";

const rows = [
  ["Terminoloģija", "Pielāgota iestādei", "Iepriekš noteikta"],
  ["Darba procesi", "Pielāgoti ikdienas darbam", "Standartizēta darbplūsma"],
  ["Lietotāju lomas", "Individuāli konfigurējamas", "Iepriekš definētas"],
  ["Moduļu izvēle", "Atbilstoši vajadzībām", "Fiksēts funkciju kopums"],
  ["Saskarne", "Pielāgojama darba vide", "Vienota struktūra"],
  ["Integrācijas", "Atbilstoši iestādes sistēmām", "Atkarīgas no piedāvājuma"],
  ["Informācijas paneļi", "Atbilstoši lietotāja lomai", "Standarta pārskati"],
  ["Piekļuves tiesības", "Detalizēti pārvaldāmas", "Standarta tiesību līmeņi"],
  ["Sistēmas attīstība", "Paplašināma kopā ar iestādi", "Atkarīga no piegādātāja"],
];

export function SystemComparison() {
  return (
    <section className="system-comparison" aria-labelledby="system-comparison-title">
      <div className="system-comparison__copy">
        <span className="system-comparison__pill system-comparison__pill--accent">Individuāla pieeja</span>
        <h2 id="system-comparison-title">Nevis jūs pielāgojaties sistēmai. Sistēma pielāgojas jums.</h2>
        <p>Atšķirībā no standartizētiem risinājumiem, EIVIS tiek veidots atbilstoši katras iestādes individuālajām vajadzībām. No darba procesiem un lietotāju lomām līdz saskarnei un izmantotajai terminoloģijai — katra detaļa var tikt pielāgota tam, kā jūsu iestāde patiesībā strādā.</p>
        <Link href="/produkts/eivis-iespejas">
          Uzzināt vairāk <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
      <div className="system-comparison__panel" role="region" aria-label="Sistēmu salīdzinājums" tabIndex={0}>
        <div className="system-comparison__table-wrap">
          <table aria-label="EIVIS un standarta sistēmas salīdzinājums">
            <colgroup><col /><col /><col /></colgroup>
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Kritērijs</span></th>
                <th scope="col"><span className="system-comparison__pill system-comparison__pill--accent">EIVIS</span></th>
                <th scope="col"><span className="system-comparison__pill">Standarta sistēma</span></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([criterion, eivis, standard]) => (
                <tr key={criterion}>
                  <th scope="row">{criterion}</th>
                  <td>{eivis}</td>
                  <td>{standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="system-comparison__note">Standarta sistēmas kolonnā parādīts tipisks fiksētas konfigurācijas piemērs.</p>
      </div>
    </section>
  );
}
