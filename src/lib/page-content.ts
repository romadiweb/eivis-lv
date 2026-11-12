export type PageContent = {
  title: string;
  description: string;
};

export const pageContent: Record<string, PageContent> = {
  home: {
    title: "EIVIS",
    description:
      "Pamats skaidrai izglītības pārvaldības vietnei ar sakārtotu navigāciju, lapām un komponentu struktūru.",
  },
  produkts: {
    title: "Produkts",
    description: "Kopējais EIVIS produkta pārskats un galvenās spējas.",
  },
  "produkts/parskats": {
    title: "Pārskats",
    description: "Īss skatījums uz EIVIS kā vienotu vidi izglītības procesiem.",
  },
  "produkts/eivis-iespejas": {
    title: "EIVIS iespējas",
    description: "Produkta iespēju katalogs administrēšanai, mācībām un saziņai.",
  },
  "produkts/lomas-un-portali": {
    title: "Lomas un portāli",
    description: "Atsevišķas darba vides administrācijai, pasniedzējiem, studentiem un vecākiem.",
  },
  "produkts/integracijas": {
    title: "Integrācijas",
    description: "Savienojumi ar ārējām sistēmām, datu apmaiņu un esošo infrastruktūru.",
  },
  "produkts/drosiba-un-piekluves": {
    title: "Drošība un piekļuves",
    description: "Piekļuves tiesības, datu aizsardzība un droša lietotāju pārvaldība.",
  },
  risinajumi: {
    title: "Risinājumi",
    description: "EIVIS skatījumi pa lietotāju grupām un ikdienas darba vajadzībām.",
  },
  "risinajumi/administracijai": {
    title: "Administrācijai",
    description: "Rīki iestādes pārvaldībai, pārskatiem un procesu koordinēšanai.",
  },
  "risinajumi/macibu-dalai": {
    title: "Mācību daļai",
    description: "Plānošana, mācību procesa uzraudzība un kvalitatīva datu aprite.",
  },
  "risinajumi/pasniedzejiem": {
    title: "Pasniedzējiem",
    description: "Ikdienas žurnāls, vērtējumi, apmeklējums un saziņa vienā darba vietā.",
  },
  "risinajumi/studentiem": {
    title: "Studentiem",
    description: "Pārskatāma piekļuve nodarbībām, sekmēm, dokumentiem un paziņojumiem.",
  },
  "risinajumi/vecakiem": {
    title: "Vecākiem",
    description: "Saprotama informācija par mācību progresu, apmeklējumu un saziņu ar iestādi.",
  },
  "risinajumi/uznemsanai": {
    title: "Uzņemšanai",
    description: "Kandidātu plūsma, dokumenti un uzņemšanas procesa pārvaldība.",
  },
  moduli: {
    title: "Moduļi",
    description: "EIVIS moduļu struktūra dažādiem izglītības iestādes procesiem.",
  },
  "moduli/studentu-parvaldiba": {
    title: "Studentu pārvaldība",
    description: "Studentu dati, statusi, grupas un administratīvā vēsture.",
  },
  "moduli/zurnals-un-macibu-process": {
    title: "Žurnāls un mācību process",
    description: "Nodarbību uzskaite, tēmas, uzdevumi un mācību procesa ritms.",
  },
  "moduli/sekmes-un-parbaudes-darbi": {
    title: "Sekmes un pārbaudes darbi",
    description: "Vērtējumi, pārbaudes darbi, rezultāti un pārskatāms progress.",
  },
  "moduli/apmeklejums-un-kavejumi": {
    title: "Apmeklējums un kavējumi",
    description: "Apmeklējuma dati, kavējumu statuss un pārskati.",
  },
  "moduli/dokumenti": {
    title: "Dokumenti",
    description: "Veidlapas, izziņas, iesniegumi un dokumentu aprite.",
  },
  "moduli/finanses": {
    title: "Finanses",
    description: "Maksājumi, saistības un finanšu procesu pārskatāmība.",
  },
  "moduli/sazina-un-pazinojumi": {
    title: "Saziņa un paziņojumi",
    description: "Ziņojumi, paziņojumi un mērķēta komunikācija ar lietotājiem.",
  },
  "moduli/kursi": {
    title: "Kursi",
    description: "Kursu struktūra, dalībnieki, saturs un norises pārvaldība.",
  },
  "moduli/kopmitnes-un-telpas": {
    title: "Kopmītnes un telpas",
    description: "Telpu, kopmītņu un resursu uzskaite izglītības iestādes vajadzībām.",
  },
  resursi: {
    title: "Resursi",
    description: "Materiāli, atbalsts un informācija EIVIS iepazīšanai.",
  },
  "resursi/ekranatteli": {
    title: "Ekrānattēli",
    description: "Produkta skatu un darba plūsmu vizuāli piemēri.",
  },
  "resursi/biezakie-jautajumi": {
    title: "Biežākie jautājumi",
    description: "Atbildes uz biežākajiem jautājumiem par EIVIS ieviešanu un lietošanu.",
  },
  "resursi/ieviesana": {
    title: "Ieviešana",
    description: "Ieviešanas soļi, sagatavošanās un pāreja uz EIVIS.",
  },
  "resursi/atbalsts": {
    title: "Atbalsts",
    description: "Palīdzības kanāli, dokumentācija un atbalsta process.",
  },
  kontakti: {
    title: "Kontakti",
    description: "Sazinieties ar EIVIS komandu un piesakiet demonstrāciju.",
  },
};
