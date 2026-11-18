export const capabilityFilters = [
  "Visas iespējas",
  "Ikdienas vide",
  "Mācību procesi",
  "Resursi un personāls",
  "Pārvaldība",
] as const;

export type CapabilityFilter = (typeof capabilityFilters)[number];
export type CapabilityIcon = "daily" | "students" | "learning" | "quality" | "planning" | "courses" | "finance" | "housing" | "facilities" | "supply" | "content" | "people" | "admin";

type Feature = { name: string; description: string };
export type CapabilityGroup = {
  title: string;
  filter: Exclude<CapabilityFilter, "Visas iespējas">;
  description: string;
  icon: CapabilityIcon;
  features: Feature[];
};

const feature = (name: string, description: string): Feature => ({ name, description });

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Ikdienas vide", filter: "Ikdienas vide", icon: "daily",
    description: "Informācijas aprite, saziņa un ikdienas darba organizēšana.",
    features: [
      feature("Informācijas panelis", "Svarīgākās ikdienas informācijas pārskatīšana vienuviet."),
      feature("Ziņas", "Iestādes ziņu publicēšana un pārskatīšana."),
      feature("Notikumi", "Iestādes notikumu apkopošana un pārskatīšana."),
      feature("Palīdzība", "Atbalsta informācijas un palīdzības materiālu pieejamība."),
      feature("Mans profils", "Lietotāja profila informācijas apskate un pārvaldība."),
      feature("Saziņa", "Ikdienas saziņa starp EIVIS lietotājiem."),
      feature("Paziņojumi", "Lietotājam aktuālo paziņojumu pārskatīšana."),
      feature("Mani testi", "Lietotājam piešķirto testu pieejamība."),
      feature("Uzdevumi un pieteikumi", "Piešķirto uzdevumu un iesniegto pieteikumu pārskatīšana."),
      feature("Nodarbību saraksts", "Aktuālā nodarbību saraksta apskate."),
      feature("Pielikumi", "Koplietoto failu un pielikumu pieejamība."),
      feature("Saites", "Iestādei nozīmīgu saišu apkopošana."),
    ],
  },
  {
    title: "Studentu serviss", filter: "Mācību procesi", icon: "students",
    description: "Studentu pakalpojumi un ar mācību procesu saistīto pieteikumu pārvaldība.",
    features: [
      feature("Uzņemšana", "Uzņemšanas procesa informācijas pārvaldība."), feature("Studenti", "Studentu informācijas pārvaldība vienotā vidē."),
      feature("Sasniegumi", "Studentu sasniegumu uzskaite un pārskatīšana."), feature("Prakses", "Ar studiju praksēm saistītās informācijas pārvaldība."),
      feature("Absolvēšanas pārbaude", "Absolvēšanai nepieciešamās informācijas pārskatīšana."), feature("Priekšmetu ieskaitīšana", "Priekšmetu ieskaitīšanas informācijas un pieteikumu pārvaldība."),
      feature("Dokumenti", "Ar studentu servisu saistīto dokumentu pieejamība."), feature("Stipendijas", "Stipendiju informācijas un pieteikumu pārvaldība."),
    ],
  },
  {
    title: "Mācību daļa", filter: "Mācību procesi", icon: "learning",
    description: "Sekmju, pārbaudījumu un akadēmisko procesu organizēšana.",
    features: [
      feature("Sekmes", "Sekmju informācijas ievade un pārskatīšana."), feature("Mācību labošanas pieteikumi", "Ar mācību rezultātu labošanu saistīto pieteikumu pārvaldība."),
      feature("Apelācijas", "Apelāciju informācijas un pieteikumu pārvaldība."), feature("Konsultāciju grafiks", "Konsultāciju laiku apkopošana un publicēšana."),
      feature("Pārbaudes darbi", "Pārbaudes darbu informācijas organizēšana."),
    ],
  },
  { title: "Kvalitātes vadība", filter: "Mācību procesi", icon: "quality", description: "Iestādes kvalitātes procesu un atgriezeniskās saites atbalsts.", features: [feature("Aptaujas", "Aptauju sagatavošana un atbilžu apkopošana.")] },
  {
    title: "Mācību plānošana", filter: "Mācību procesi", icon: "planning", description: "Mācību organizācijas, nodarbību un programmu plānošanas rīki.",
    features: [feature("Programmas", "Mācību programmu informācijas pārvaldība."), feature("Grupu grafiki", "Mācību grupu grafiku pārskatīšana."), feature("Nodarbības", "Nodarbību informācijas organizēšana."), feature("Skolotāji", "Mācību procesā iesaistīto skolotāju informācija."), feature("Nodarbību plāns", "Nodarbību plāna veidošana un pārskatīšana."), feature("Izvēles priekšmeti", "Izvēles priekšmetu informācijas pārvaldība."), feature("Nodarbību grafiks", "Nodarbību grafika veidošana un publicēšana.")],
  },
  {
    title: "Kursi", filter: "Mācību procesi", icon: "courses", description: "Kursu, to veidu, pieteikumu un grafiku organizēšana.",
    features: [feature("Kursu veidi", "Kursu veidu un to pamatinformācijas pārvaldība."), feature("Kursi", "Kursu informācijas izveide un pārskatīšana."), feature("Kursa iesniegtie pieteikumi", "Konkrētam kursam iesniegto pieteikumu pārskatīšana."), feature("Kursu grafiki", "Kursu norises grafiku organizēšana.")],
  },
  {
    title: "Finanses", filter: "Resursi un personāls", icon: "finance", description: "Ar mācībām un iestādes darbību saistītās finanšu informācijas pārvaldība.",
    features: [feature("Maksājuma vienības", "Maksājumu uzskaitē izmantoto vienību pārvaldība."), feature("Studiju līgumu maksājumi", "Ar studiju līgumiem saistīto maksājumu informācijas pārskatīšana."), feature("Studiju maksu bilance", "Studiju maksas bilances informācijas pārskatīšana."), feature("Mācību parādu maksājumi", "Ar mācību parādiem saistīto maksājumu uzskaite."), feature("MTL pirkumu apmaksa", "Materiāltehnisko līdzekļu pirkumu apmaksas informācija.")],
  },
  {
    title: "Hosteļa rezervācijas", filter: "Resursi un personāls", icon: "housing", description: "Izmitināšanas resursu un rezervāciju organizēšana.",
    features: [feature("Rezervācijas", "Izmitināšanas rezervāciju pārvaldība."), feature("Istabas", "Pieejamo istabu informācijas pārvaldība."), feature("Uzņemšanas rezervācijas", "Ar uzņemšanu saistīto rezervāciju pārskatīšana."), feature("Rezervāciju saraksts", "Rezervāciju apkopots saraksts un pārskats.")],
  },
  {
    title: "Saimniecība", filter: "Resursi un personāls", icon: "facilities", description: "Iestādes telpu, ēku un materiālo resursu pārvaldība.",
    features: [feature("Telpas", "Iestādes telpu informācijas pārvaldība."), feature("Ēkas", "Iestādes ēku informācijas pārvaldība."), feature("Inventārs", "Inventāra vienību uzskaite un pārskatīšana."), feature("Kārtridži", "Kārtridžu uzskaites informācijas pārvaldība."), feature("Inventāra kategorijas", "Inventāra klasificēšanai izmantoto kategoriju pārvaldība.")],
  },
  {
    title: "Apgāde", filter: "Resursi un personāls", icon: "supply", description: "Iestādes pieprasījumu, iepirkumu un apgādes procesu organizēšana.",
    features: [feature("MTL pieprasījumi", "Materiāltehnisko līdzekļu pieprasījumu pārvaldība."), feature("Iegāde", "Iegādes informācijas organizēšana un pārskatīšana."), feature("Preču katalogs", "Iestādei pieejamo preču informācijas katalogs."), feature("Atskaites", "Ar apgādi saistītās informācijas pārskati."), feature("Saskaņošanas maršruti", "Pieprasījumu saskaņošanas secības pārvaldība."), feature("Budžeta kodi", "Apgādes procesos izmantoto budžeta kodu pārvaldība."), feature("Finansējuma projekti", "Finansējuma projektu informācijas pārvaldība.")],
  },
  {
    title: "Saturs", filter: "Ikdienas vide", icon: "content", description: "Iestādes informācijas, publikāciju un digitālā satura pārvaldība.",
    features: [feature("Iekšējās ziņas", "Iekšējai auditorijai paredzētu ziņu pārvaldība."), feature("Ekrāni", "Digitālajos ekrānos attēlotā satura pārvaldība."), feature("Notikumu kalendārs", "Notikumu informācijas apkopošana kalendārā."), feature("Raksti", "Rakstu izveide un publicēšana."), feature("Lapas", "Iestādes satura lapu pārvaldība."), feature("Rakstu kategorijas", "Rakstu grupēšanai izmantoto kategoriju pārvaldība."), feature("Baneri", "Baneru satura un izvietojuma pārvaldība.")],
  },
  {
    title: "Cilvēkresursi", filter: "Resursi un personāls", icon: "people", description: "Darbinieku informācijas, personāla procesu un uzdevumu pārvaldība.",
    features: [feature("Darbinieki", "Darbinieku informācijas pārvaldība vienotā vidē."), feature("Personāla izmaiņas", "Personāla izmaiņu informācijas reģistrēšana un pārskatīšana."), feature("Vakances", "Iestādes vakanču informācijas pārvaldība."), feature("Prombūtnes", "Darbinieku prombūtņu informācijas pārskatīšana."), feature("Darbinieku uzdevumi", "Darbiniekiem piešķirto uzdevumu pārvaldība."), feature("Darbinieku testi", "Darbiniekiem paredzēto testu pieejamība un pārskatīšana.")],
  },
  {
    title: "Administrācija", filter: "Pārvaldība", icon: "admin", description: "Sistēmas konfigurēšana, piekļuves pārvaldība un integrāciju uzraudzība.",
    features: [feature("Iestatījumi", "EIVIS konfigurācijas pamatuzstādījumu pārvaldība."), feature("Sadaļu iestatījumi", "Atsevišķu sistēmas sadaļu konfigurēšana."), feature("Teksti", "Sistēmā izmantoto tekstu un nosaukumu pārvaldība."), feature("Integrāciju stāvoklis", "Savienojumu izpildes un statusu pārskatīšana."), feature("Sistēmas apmeklējums", "Sistēmas apmeklējuma informācijas pārskatīšana."), feature("Pieteikumu formas", "Iestādē izmantoto pieteikumu formu pārvaldība."), feature("Izpildītāju grupas", "Pieteikumu izpildē iesaistīto grupu pārvaldība."), feature("Dokuments", "Dokumentu konfigurācijas informācijas pārvaldība."), feature("Personas", "Sistēmā reģistrēto personu informācijas pārvaldība."), feature("Akadēmiskie dati", "Akadēmiskās pamatinformācijas pārvaldība."), feature("Lomas", "Lietotāju lomu un piekļuves nosacījumu pārvaldība.")],
  },
];
