import WindowImage, { SanityImage } from "../WindowImage";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/sanity";
import type { Product } from "../lib/sanity.types";

// — Konštanty —

const SALAMANDER_LOGO = {
  src: "/logo/salamander02.png",
  alt: "Salamander logo",
  width: 937,
  height: 273,
  style: { width: "auto", height: "48px" } as React.CSSProperties,
} as const

const TEXT = {
  heroTitle: "Naša ponuka",
  empty: "Žiadne produkty v tejto kategórii.",
  noImage: "Bez fotky",
  priceLabel: "Cenová ponuka zadarmo",
  detailBtn: "Detail",
} as const

const CX = {
  page: "min-h-screen bg-gray-50",
  hero: "bg-gray-950 text-white px-10 py-20 text-center",
  heroH1: "text-5xl font-black tracking-tighter",
  heroSub: "text-gray-400 mt-4 text-lg",
  content: "max-w-7xl mx-auto px-10 py-16",
  empty: "text-center text-gray-500 text-xl",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group",
  cardLogoBox: "flex justify-center items-center pt-6 pb-2 px-8",
  cardNoImage: "w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400 font-bold",
  cardBody: "p-8",
  cardTitle: "text-2xl font-bold text-gray-950 leading-snug",
  cardFooter: "mt-6 pt-6 border-t border-gray-100 flex items-end justify-between gap-4",
  cardPrice: "text-sm font-semibold text-green-600",
  cardBtn: "bg-gray-950 text-white px-6 py-3 rounded-full font-bold hover:bg-primary transition-colors",
}

// — Typy —

type ProductResult = Required<
  Pick<Product, "slug" | "title" | "category">
> & {
  vyrobca: string | null;
  gallery: SanityImage[] | null;
};

// — Komponent —

export default async function Produkty({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string; typ?: string }>;
}) {
  const { kategoria, typ } = await searchParams;

  const filter = [
    `_type == "product"`,
    kategoria ? `category == "${kategoria}"` : null,
    kategoria === "okna" && typ ? `subcategoryOkna == "${typ}"` : null,
    kategoria === "dvere" && typ ? `subcategoryDvere == "${typ}"` : null,
    kategoria === "doplnky" && typ ? `subcategoryDoplnky == "${typ}"` : null,
  ]
    .filter(Boolean)
    .join(" && ");

  const products: ProductResult[] = await client.fetch(`*[${filter}]{
    slug,
    title,
    price,
    category,
    "vyrobca": vendor->name,
    gallery[] {
      asset->
    }
  }`);

  return (
    <main className={CX.page}>
      <section className={CX.hero}>
        <h1 className={CX.heroH1}>{TEXT.heroTitle}</h1>
        <p className={CX.heroSub}>
          {products.length} produktov
          {kategoria ? ` v kategórii ${kategoria}` : ""}
        </p>
      </section>

      <div className={CX.content}>
        {products.length === 0 ? (
          <p className={CX.empty}>{TEXT.empty}</p>
        ) : (
          <div className={CX.grid}>
            {products.map((product) => (
              <div key={product.slug.current} className={CX.card}>
                <div className={CX.cardLogoBox}>
                  <Image {...SALAMANDER_LOGO} alt={SALAMANDER_LOGO.alt} />
                </div>

                {product.gallery?.[0] ? (
                  <WindowImage image={product.gallery[0]} alt={product.title} />
                ) : (
                  <div className={CX.cardNoImage}>{TEXT.noImage}</div>
                )}

                <div className={CX.cardBody}>
                  <h2 className={CX.cardTitle}>{product.title}</h2>
                  <div className={CX.cardFooter}>
                    <p className={CX.cardPrice}>{TEXT.priceLabel}</p>
                    <Link
                      href={`/okno/${product.slug.current}`}
                      className={CX.cardBtn}
                    >
                      {TEXT.detailBtn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
