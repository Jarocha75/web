// — Konštanty —

const TEXT = {
  desc: "Dodávame a montujeme kvalitné okná Slovaktual. Naším cieľom je priniesť teplo a bezpečie do vášho domova.",
  contactTitle: "Kontakt",
  hoursTitle: "Otváracie hodiny",
  copyright: (year: number) => `© ${year} VikoTrade. Všetky práva vyhradené. Vytvorené s ❤️ v Next.js & Sanity.`,
} as const

const HODINY = [
  { den: "Pondelok - Piatok", cas: "8:00 - 16:30", closed: false },
  { den: "Sobota", cas: "Na objednávku", closed: false },
  { den: "Nedeľa", cas: "Zatvorené", closed: true },
]

const CX = {
  footer: "bg-gray-950 text-white pt-16 pb-8 mt-20",
  inner: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12",
  logoBox: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black",
  logoText: "text-lg font-black tracking-tighter uppercase",
  logoAccent: "text-primary font-light",
  desc: "text-gray-400 text-sm leading-relaxed",
  sectionTitle: "text-lg font-bold mb-6",
  contactList: "space-y-4 text-gray-400 text-sm",
  contactIcon: "text-primary",
  hoursList: "space-y-2 text-gray-400 text-sm",
  hoursRow: "flex justify-between",
  hoursValue: "text-white",
  hoursValueClosed: "text-red-400",
  bottom: "max-w-7xl mx-auto px-6 border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs",
}

// — Komponent —

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={CX.footer}>
      <div className={CX.inner}>
        {/* O NÁS / LOGO */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className={CX.logoBox}>V</div>
            <span className={CX.logoText}>
              Viko<span className={CX.logoAccent}>Trade</span>
            </span>
          </div>
          <p className={CX.desc}>{TEXT.desc}</p>
        </div>

        {/* KONTAKTNÉ ÚDAJE */}
        <div>
          <h4 className={CX.sectionTitle}>{TEXT.contactTitle}</h4>
          <ul className={CX.contactList}>
            <li className="flex items-center gap-3">
              <span className={CX.contactIcon}>📍</span> Mesto, Ulica 123
            </li>
            <li className="flex items-center gap-3">
              <span className={CX.contactIcon}>📞</span> +421 900 000 000
            </li>
            <li className="flex items-center gap-3">
              <span className={CX.contactIcon}>✉️</span> info@vikotrade.sk
            </li>
          </ul>
        </div>

        {/* OTVÁRACIE HODINY */}
        <div>
          <h4 className={CX.sectionTitle}>{TEXT.hoursTitle}</h4>
          <ul className={CX.hoursList}>
            {HODINY.map((h) => (
              <li key={h.den} className={CX.hoursRow}>
                <span>{h.den}:</span>
                <span className={h.closed ? CX.hoursValueClosed : CX.hoursValue}>
                  {h.cas}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SPODNÁ LIŠTA */}
      <div className={CX.bottom}>
        <p>
          {TEXT.copyright(year)}
        </p>
      </div>
    </footer>
  )
}
