import { PortableText } from "@portabletext/react";
import WindowImage from "../../WindowImage";
import { client } from "../../lib/sanity";

export default async function OknoDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Získame slug z URL adresy
  const { slug } = await params;

  // Opýtame sa Sanity na toto konkrétne okno
  const window = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
    title,
    "vyrobca": vendor->name,
    gallery,
    description
  }`,
    { slug },
  );

  if (!window) {
    return (
      <div className="p-20 text-center uppercase font-bold">
        Okno sa nenašlo...
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-10 bg-white min-h-screen">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Galéria / Obrázok */}
        <div className="space-y-4">
          {window.gallery?.[0] ? (
            <WindowImage
              image={window.gallery[0]}
              alt={window.title}
              className="w-full h-130 object-cover rounded-3xl"
            />
          ) : (
            <div className="w-full h-96 bg-gray-100 rounded-3xl flex items-center justify-center">
              Bez fotky
            </div>
          )}
        </div>

        {/* Informácie */}
        <div>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            {window.vyrobca}
          </span>
          <h1 className="text-5xl font-black text-gray-900 mt-2">
            {window.title}
          </h1>
          <p className="text-lg font-semibold text-green-600 mt-6 bg-green-50 px-5 py-3 rounded-2xl inline-block">
            Cenová ponuka zadarmo
          </p>

          <div className="mt-10 pt-10 border-t border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Technický popis
            </h3>
            {/* PortableText premení tie "divné objekty" zo Sanity na pekný text */}
            <div className="prose prose-blue text-gray-600 leading-relaxed">
              <PortableText value={window.description} />
            </div>
          </div>

          <button className="mt-12 w-full bg-gray-950 text-white py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all">
            Mám záujem o cenovú ponuku
          </button>
        </div>
      </div>
    </main>
  );
}
