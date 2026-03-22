export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* O NÁS / LOGO */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">
              W
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">
              Okná<span className="text-blue-500 font-light">Rasto</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Dodávame a montujeme kvalitné okná Slovaktual. Naším cieľom je
            priniesť teplo a bezpečie do vášho domova.
          </p>
        </div>

        {/* KONTAKTNÉ ÚDAJE */}
        <div>
          <h4 className="text-lg font-bold mb-6">Kontakt</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-blue-500">📍</span> Mesto, Ulica 123
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500">📞</span> +421 900 000 000
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500">✉️</span> info@oknarasto.sk
            </li>
          </ul>
        </div>

        {/* OTVÁRACIE HODINY */}
        <div>
          <h4 className="text-lg font-bold mb-6">Otváracie hodiny</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex justify-between">
              <span>Pondelok - Piatok:</span>
              <span className="text-white">8:00 - 16:30</span>
            </li>
            <li className="flex justify-between">
              <span>Sobota:</span>
              <span className="text-white">Na objednávku</span>
            </li>
            <li className="flex justify-between text-red-400">
              <span>Nedeľa:</span>
              <span>Zatvorené</span>
            </li>
          </ul>
        </div>
      </div>

      {/* SPODNÁ LIŠTA */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs">
        <p>
          &copy; {year} Okná Rasto. Všetky práva vyhradené. Vytvorené s ❤️ v
          Next.js & Sanity.
        </p>
      </div>
    </footer>
  );
}
