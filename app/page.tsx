import Link from "next/link";

// — Konštanty —

const HREFS = {
  produkty: "/produkty",
  kontakt: "/kontakt",
} as const

const TEXT = {
  heroTagline: "Senica a okolie",
  heroTitle: "Plastové a hliníkové okná pre váš domov",
  heroSub: "Dodávame a montujeme kvalitné okná od overených výrobcov. Bezplatná cenová ponuka do 24 hodín.",
  heroPrimary: "Pozrieť ponuku",
  heroSecondary: "Kontaktovať nás",
  whyTitle: "Prečo si vybrať nás?",
  ctaTitle: "Zaujalo vás niečo z našej ponuky?",
  ctaSub: "Napíšte nám a do 24 hodín dostanete bezplatnú cenovú ponuku.",
  ctaBtn: "Chcem cenovú ponuku",
} as const

const PRECO_MY = [
  {
    icon: "🪟",
    title: "Plastové okná",
    text: "Výborná tepelná izolácia, nízka údržba a dlhá životnosť.",
  },
  {
    icon: "🏗️",
    title: "Hliníkové okná",
    text: "Moderný dizajn, vysoká pevnosť a odolnosť voči poveternosti.",
  },
  {
    icon: "📍",
    title: "Miestna firma",
    text: "Sídlime v Senici. Rýchla montáž a servis priamo u vás.",
  },
]

const CX = {
  hero: "bg-gray-950 text-white px-10 py-32 text-center",
  heroTagline: "text-primary font-bold tracking-widest uppercase text-sm mb-4",
  heroH1: "text-6xl font-black tracking-tighter max-w-3xl mx-auto leading-none",
  heroSub: "text-gray-400 mt-6 text-xl max-w-xl mx-auto",
  heroBtns: "mt-10 flex gap-4 justify-center",
  heroPrimary: "bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/80 transition-colors",
  heroSecondary: "border border-gray-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white transition-colors",
  whySection: "bg-white px-10 py-24",
  whyInner: "max-w-5xl mx-auto",
  whyH2: "text-4xl font-black text-gray-900 tracking-tighter text-center mb-16",
  whyGrid: "grid md:grid-cols-3 gap-10",
  whyCard: "text-center",
  whyIcon: "text-5xl mb-4",
  whyTitle: "text-xl font-black text-gray-900 mb-2",
  whyText: "text-gray-500",
  ctaSection: "bg-primary text-primary-foreground px-10 py-20 text-center",
  ctaH2: "text-4xl font-black tracking-tighter mb-4",
  ctaSub: "text-primary-foreground/80 text-lg mb-8",
  ctaBtn: "bg-white text-primary px-8 py-4 rounded-full font-black text-lg hover:bg-accent transition-colors",
}

// — Komponent —

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={CX.hero}>
        <p className={CX.heroTagline}>{TEXT.heroTagline}</p>
        <h1 className={CX.heroH1}>{TEXT.heroTitle}</h1>
        <p className={CX.heroSub}>{TEXT.heroSub}</p>
        <div className={CX.heroBtns}>
          <Link href={HREFS.produkty} className={CX.heroPrimary}>{TEXT.heroPrimary}</Link>
          <Link href={HREFS.kontakt} className={CX.heroSecondary}>{TEXT.heroSecondary}</Link>
        </div>
      </section>

      {/* PREČO MY */}
      <section className={CX.whySection}>
        <div className={CX.whyInner}>
          <h2 className={CX.whyH2}>{TEXT.whyTitle}</h2>
          <div className={CX.whyGrid}>
            {PRECO_MY.map((item) => (
              <div key={item.title} className={CX.whyCard}>
                <div className={CX.whyIcon}>{item.icon}</div>
                <h3 className={CX.whyTitle}>{item.title}</h3>
                <p className={CX.whyText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={CX.ctaSection}>
        <h2 className={CX.ctaH2}>{TEXT.ctaTitle}</h2>
        <p className={CX.ctaSub}>{TEXT.ctaSub}</p>
        <Link href={HREFS.kontakt} className={CX.ctaBtn}>{TEXT.ctaBtn}</Link>
      </section>
    </main>
  );
}
