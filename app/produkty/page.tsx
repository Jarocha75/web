import WindowImage, { SanityImage } from "../WindowImage";
import Link from "next/link";
import { client } from "../lib/sanity";
import type { Window } from "../lib/sanity.types";

type SanityWindowResult = Required<Pick<Window, "slug" | "title" | "price">> & {
  vyrobca: string;
  gallery: SanityImage[] | null;
};

export default async function Produkty() {
  const windows: SanityWindowResult[] = await client.fetch(`*[_type == "window"]{
    slug,
    title,
    price,
    "vyrobca": vendor->name,
    gallery[] {
      asset->
    }
  }`);

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-tighter">
        Katalóg našich okien
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {windows.map((window) => (
          <div
            key={window.title}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            {window.gallery?.[0] ? (
              <WindowImage image={window.gallery[0]} alt={window.title} />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                Bez fotky
              </div>
            )}

            <div className="p-8">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                {window.vyrobca}
              </span>

              <h2 className="text-2xl font-bold text-gray-950 mt-4 leading-snug">
                {window.title}
              </h2>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-end justify-between gap-4">
                <p className="text-gray-900 leading-none">
                  <span className="text-sm font-medium text-gray-500 block mb-1">
                    Cena od:
                  </span>
                  <span className="text-4xl font-black text-green-600">
                    {window.price} €
                  </span>
                </p>

                <Link
                  href={`/okno/${window.slug.current}`}
                  className="bg-gray-950 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  Detail okna
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
