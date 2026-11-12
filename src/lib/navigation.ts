export type NavItem = {
  title: string;
  href: string;
};

export type NavGroup = {
  title: string;
  href: string;
  items?: NavItem[];
};

export const mainNavigation: NavGroup[] = [
  {
    title: "Produkts",
    href: "/produkts",
    items: [
      { title: "Pārskats", href: "/produkts/parskats" },
      { title: "EIVIS iespējas", href: "/produkts/eivis-iespejas" },
      { title: "Lomas un portāli", href: "/produkts/lomas-un-portali" },
      { title: "Integrācijas", href: "/produkts/integracijas" },
      { title: "Drošība un piekļuves", href: "/produkts/drosiba-un-piekluves" },
    ],
  },
  {
    title: "Risinājumi",
    href: "/risinajumi",
    items: [
      { title: "Administrācijai", href: "/risinajumi/administracijai" },
      { title: "Mācību daļai", href: "/risinajumi/macibu-dalai" },
      { title: "Pasniedzējiem", href: "/risinajumi/pasniedzejiem" },
      { title: "Studentiem", href: "/risinajumi/studentiem" },
      { title: "Vecākiem", href: "/risinajumi/vecakiem" },
      { title: "Uzņemšanai", href: "/risinajumi/uznemsanai" },
    ],
  },
  {
    title: "Moduļi",
    href: "/moduli",
    items: [
      { title: "Studentu pārvaldība", href: "/moduli/studentu-parvaldiba" },
      {
        title: "Žurnāls un mācību process",
        href: "/moduli/zurnals-un-macibu-process",
      },
      {
        title: "Sekmes un pārbaudes darbi",
        href: "/moduli/sekmes-un-parbaudes-darbi",
      },
      {
        title: "Apmeklējums un kavējumi",
        href: "/moduli/apmeklejums-un-kavejumi",
      },
      { title: "Dokumenti", href: "/moduli/dokumenti" },
      { title: "Finanses", href: "/moduli/finanses" },
      {
        title: "Saziņa un paziņojumi",
        href: "/moduli/sazina-un-pazinojumi",
      },
      { title: "Kursi", href: "/moduli/kursi" },
      { title: "Kopmītnes un telpas", href: "/moduli/kopmitnes-un-telpas" },
    ],
  },
  {
    title: "Resursi",
    href: "/resursi",
    items: [
      { title: "Ekrānattēli", href: "/resursi/ekranatteli" },
      { title: "Biežākie jautājumi", href: "/resursi/biezakie-jautajumi" },
      { title: "Ieviešana", href: "/resursi/ieviesana" },
      { title: "Atbalsts", href: "/resursi/atbalsts" },
    ],
  },
  { title: "Kontakti", href: "/kontakti" },
];
