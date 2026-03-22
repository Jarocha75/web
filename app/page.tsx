import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gray-950 text-white px-10 py-32 text-center">
        <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
          Senica a okolie
        </p>
        <h1 className="text-6xl font-black tracking-tighter max-w-3xl mx-auto leading-none">
          Plastové a hliníkové okná pre váš domov
        </h1>
        <p className="text-gray-400 mt-6 text-xl max-w-xl mx-auto">
          Dodávame a montujeme kvalitné okná od overených výrobcov. Bezplatná
          cenová ponuka do 24 hodín.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link
            href="/produkty"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-colors"
          >
            Pozrieť ponuku
          </Link>
          <Link
            href="/kontakt"
            className="border border-gray-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-white transition-colors"
          >
            Kontaktovať nás
          </Link>
        </div>
      </section>

      {/* PREČO MY */}
      <section className="bg-white px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 tracking-tighter text-center mb-16">
            Prečo si vybrať nás?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
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
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white px-10 py-20 text-center">
        <h2 className="text-4xl font-black tracking-tighter mb-4">
          Zaujalo vás niečo z našej ponuky?
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Napíšte nám a do 24 hodín dostanete bezplatnú cenovú ponuku.
        </p>
        <Link
          href="/kontakt"
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-black text-lg hover:bg-blue-50 transition-colors"
        >
          Chcem cenovú ponuku
        </Link>
      </section>
    </main>
  );
}
