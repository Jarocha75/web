import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black group-hover:rotate-6 transition-transform">
            W
          </div>
          <span className="text-xl font-black tracking-tighter text-gray-900 uppercase">
            Okná
            <span className="text-blue-600 font-light text-sm ml-1">Rasto</span>
          </span>
        </Link>

        {/* MENU LINKY */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors"
          >
            Domov
          </Link>
          <Link
            href="/produkty"
            className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors"
          >
            Ponuka okien
          </Link>
          <Link
            href="/kontakt"
            className="bg-gray-950 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all"
          >
            Kontakt
          </Link>
        </div>

        {/* MOBILNÉ MENU IKONA (Zatiaľ len vizuál) */}
        <button className="md:hidden p-2 text-gray-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
