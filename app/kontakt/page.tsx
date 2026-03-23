import { client } from "@/app/lib/sanity";
import { ContactInfoCard } from "@/app/components/ContactInfoCard";
import { ContactForm } from "@/app/components/ContactForm";

export default async function Kontakt() {
  // Ťaháme dáta zo Sanity
  const contact = await client.fetch(`*[_type == "contact"][0]`);

  if (!contact) {
    return (
      <div className="p-20 text-center">
        Nenašli sa žiadne kontaktné údaje v Sanity...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SEKCIU s moderným gradientom */}
      <section className="bg-linear-to-b from-gray-950 to-gray-900 text-white px-6 py-24 text-center">
        <h1 className="text-6xl font-black tracking-tighter mb-4 italic">
          {contact.heroTitle}
        </h1>
        <p className="text-blue-200/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {contact.heroSubtitle}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-20 italic">
        {/* KONTAKTNÉ ÚDAJE (Ľavá strana) */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">
              Kontaktné údaje
            </h2>
            <p className="text-gray-500 mb-10 not-italic">
              Zastavte sa u nás na kávu alebo nám zavolajte.
            </p>

            <div className="grid gap-10">
              <ContactInfoCard
                label="Sídlo firmy"
                value={contact.company}
                subValue={`${contact.address}, ${contact.city}`}
                icon="map"
              />
              <ContactInfoCard
                label="Zavolajte nám"
                value={contact.phone}
                isLink={`tel:${contact.phone}`}
                icon="phone"
              />
              <ContactInfoCard
                label="Napíšte nám"
                value={contact.email}
                isLink={`mailto:${contact.email}`}
                icon="mail"
              />
            </div>
          </div>
        </div>

        {/* FORMULÁR (Pravá strana) */}
        <div className="lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm not-italic">
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            {contact.formTitle}
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* MAPA */}
      {contact.mapUrl && (
        <section className="h-125 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden rounded-t-[4rem] shadow-2xl">
          <iframe
            src={contact.mapUrl}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </section>
      )}
    </main>
  );
}
