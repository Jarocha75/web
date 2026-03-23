export type NavPolozka = {
  label: string
  href: string
  popis: string
}

export type NavSkupina = {
  kategoria: string
  href: string
  polozky: NavPolozka[]
}

export type NavLink = {
  href: string
  label: string
}

export const produktyMenu: NavSkupina[] = [
  {
    kategoria: "Okná",
    href: "/produkty?kategoria=okna",
    polozky: [
      { label: "Plastové okná", href: "/produkty?kategoria=okna&typ=plasticke", popis: "Salamander, Rehau" },
      { label: "Hliníkové okná", href: "/produkty?kategoria=okna&typ=hlinikove", popis: "Aluprof" },
    ],
  },
  {
    kategoria: "Dvere",
    href: "/produkty?kategoria=dvere",
    polozky: [
      { label: "Interiérové dvere", href: "/produkty?kategoria=dvere&typ=interierove", popis: "Pre vnútorné priestory" },
      { label: "Vchodové dvere", href: "/produkty?kategoria=dvere&typ=vchodove", popis: "Bezpečnosť a dizajn" },
    ],
  },
  {
    kategoria: "Garážové brány",
    href: "/produkty?kategoria=garazove-brany",
    polozky: [],
  },
  {
    kategoria: "Doplnky",
    href: "/produkty?kategoria=doplnky",
    polozky: [
      { label: "Parapety", href: "/produkty?kategoria=doplnky&typ=parapety", popis: "" },
      { label: "Žalúzie", href: "/produkty?kategoria=doplnky&typ=zaluzie", popis: "" },
      { label: "Sieťky proti hmyzu", href: "/produkty?kategoria=doplnky&typ=sietky", popis: "" },
      { label: "Rolety", href: "/produkty?kategoria=doplnky&typ=rolety-hlinikove", popis: "Hliníkové a screenové" },
    ],
  },
]

export const mobilneLinky: NavLink[] = [
  { href: "/", label: "O nás" },
  { href: "/produkty?kategoria=okna&typ=plasticke", label: "Plastové okná" },
  { href: "/produkty?kategoria=okna&typ=hlinikove", label: "Hliníkové okná" },
  { href: "/produkty?kategoria=dvere&typ=interierove", label: "Interiérové dvere" },
  { href: "/produkty?kategoria=dvere&typ=vchodove", label: "Vchodové dvere" },
  { href: "/produkty?kategoria=garazove-brany", label: "Garážové brány" },
  { href: "/produkty?kategoria=doplnky", label: "Doplnky" },
]
