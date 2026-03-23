import WindowImage, { SanityImage } from "../WindowImage";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/sanity";
import type { Product } from "../lib/sanity.types";

type ProductResult = Required<
  Pick<Product, "slug" | "title" | "category">
> & {
  vyrobca: string | null;
  gallery: SanityImage[] | null;
};

export default async function Produkty({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string; typ?: string }>;
}) {
  const { kategoria, typ } = await searchParams;

  // Dynamicky zostavíme GROQ filter podľa URL parametrov
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
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gray-950 text-white px-10 py-20 text-center">
        <h1 className="text-5xl font-black tracking-tighter">Naša ponuka</h1>
        <p className="text-gray-400 mt-4 text-lg">
          {products.length} produktov
          {kategoria ? ` v kategórii ${kategoria}` : ""}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-10 py-16">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">
            Žiadne produkty v tejto kategórii.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.slug.current}
                className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex justify-center items-center pt-6 pb-2 px-8">
                  <Image
                    src="/logo/salamander02.png"
                    alt="Salamander logo"
                    width={160}
                    height={48}
                    className="object-contain h-12 w-auto"
                  />
                </div>

                {product.gallery?.[0] ? (
                  <WindowImage image={product.gallery[0]} alt={product.title} />
                ) : (
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                    Bez fotky
                  </div>
                )}

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-950 leading-snug">
                    {product.title}
                  </h2>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-end justify-between gap-4">
                    <p className="text-gray-900 leading-none">
                      <span className="text-sm font-semibold text-green-600">
                        Cenová ponuka zadarmo
                      </span>
                    </p>

                    <Link
                      href={`/okno/${product.slug.current}`}
                      className="bg-gray-950 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors"
                    >
                      Detail
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
