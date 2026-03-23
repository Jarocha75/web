import { PortableText } from "@portabletext/react";
import WindowImage from "../../WindowImage";
import { client } from "../../lib/sanity";

// — Konštanty —

const TEXT = {
  notFound: "Okno sa nenašlo...",
  noImage: "Bez fotky",
  offerBadge: "Cenová ponuka zadarmo",
  descTitle: "Technický popis",
  ctaBtn: "Mám záujem o cenovú ponuku",
} as const

const CX = {
  notFound: "p-20 text-center uppercase font-bold",
  page: "max-w-6xl mx-auto p-10 bg-white min-h-screen",
  grid: "grid md:grid-cols-2 gap-16",
  gallery: "space-y-4",
  galleryImage: "w-full h-130 object-cover rounded-3xl",
  galleryEmpty: "w-full h-96 bg-gray-100 rounded-3xl flex items-center justify-center",
  vendor: "text-primary font-bold tracking-widest uppercase text-sm",
  title: "text-5xl font-black text-gray-900 mt-2",
  offerBadge: "text-lg font-semibold text-green-600 mt-6 bg-green-50 px-5 py-3 rounded-2xl inline-block",
  descSection: "mt-10 pt-10 border-t border-gray-100",
  descTitle: "text-xl font-bold mb-4 text-gray-800",
  descBody: "prose text-gray-600 leading-relaxed",
  ctaBtn: "mt-12 w-full bg-gray-950 text-white py-5 rounded-2xl font-bold text-xl hover:bg-primary/80 transition-all",
}

// — Komponent —

export default async function OknoDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

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
    return <div className={CX.notFound}>{TEXT.notFound}</div>;
  }

  return (
    <main className={CX.page}>
      <div className={CX.grid}>
        {/* Galéria */}
        <div className={CX.gallery}>
          {window.gallery?.[0] ? (
            <WindowImage
              image={window.gallery[0]}
              alt={window.title}
              className={CX.galleryImage}
            />
          ) : (
            <div className={CX.galleryEmpty}>{TEXT.noImage}</div>
          )}
        </div>

        {/* Informácie */}
        <div>
          <span className={CX.vendor}>{window.vyrobca}</span>
          <h1 className={CX.title}>{window.title}</h1>
          <p className={CX.offerBadge}>{TEXT.offerBadge}</p>

          <div className={CX.descSection}>
            <h3 className={CX.descTitle}>{TEXT.descTitle}</h3>
            <div className={CX.descBody}>
              <PortableText value={window.description} />
            </div>
          </div>

          <button className={CX.ctaBtn}>{TEXT.ctaBtn}</button>
        </div>
      </div>
    </main>
  );
}
