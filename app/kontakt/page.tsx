import { client } from "@/app/lib/sanity";
import { ContactInfoCard } from "@/app/components/ContactInfoCard";
import { ContactForm } from "@/app/components/ContactForm";

// — Konštanty —

const TEXT = {
  notFound: "Nenašli sa žiadne kontaktné údaje v Sanity...",
  leftH2: "Kontaktné údaje",
  leftSub: "Zastavte sa u nás na kávu alebo nám zavolajte.",
  labelSidlo: "Sídlo firmy",
  labelTelefon: "Zavolajte nám",
  labelEmail: "Napíšte nám",
} as const

const CX = {
  notFound: "p-20 text-center",
  hero: "bg-linear-to-b from-gray-950 to-gray-900 text-white px-6 py-24 text-center",
  heroH1: "text-6xl font-black tracking-tighter mb-4 italic",
  heroSub: "text-white/60 text-xl max-w-2xl mx-auto font-light leading-relaxed",
  main: "max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-20 italic",
  leftCol: "lg:col-span-5 space-y-12",
  leftH2: "text-4xl font-black text-gray-900 mb-6 tracking-tight",
  leftSub: "text-gray-500 mb-10 not-italic",
  contactGrid: "grid gap-10",
  rightCol: "lg:col-span-7 bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm not-italic",
  formTitle: "text-3xl font-black text-gray-900 mb-8",
  map: "h-125 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden rounded-t-[4rem] shadow-2xl",
}

// — Komponent —

export default async function Kontakt() {
  const contact = await client.fetch(`*[_type == "contact"][0]`);

  if (!contact) {
    return (
      <div className={CX.notFound}>{TEXT.notFound}</div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <section className={CX.hero}>
        <h1 className={CX.heroH1}>{contact.heroTitle}</h1>
        <p className={CX.heroSub}>{contact.heroSubtitle}</p>
      </section>

      <section className={CX.main}>
        {/* KONTAKTNÉ ÚDAJE */}
        <div className={CX.leftCol}>
          <div>
            <h2 className={CX.leftH2}>{TEXT.leftH2}</h2>
            <p className={CX.leftSub}>{TEXT.leftSub}</p>
            <div className={CX.contactGrid}>
              <ContactInfoCard
                label={TEXT.labelSidlo}
                value={contact.company}
                subValue={`${contact.address}, ${contact.city}`}
                icon="map"
              />
              <ContactInfoCard
                label={TEXT.labelTelefon}
                value={contact.phone}
                isLink={`tel:${contact.phone}`}
                icon="phone"
              />
              <ContactInfoCard
                label={TEXT.labelEmail}
                value={contact.email}
                isLink={`mailto:${contact.email}`}
                icon="mail"
              />
            </div>
          </div>
        </div>

        {/* FORMULÁR */}
        <div className={CX.rightCol}>
          <h2 className={CX.formTitle}>{contact.formTitle}</h2>
          <ContactForm />
        </div>
      </section>

      {/* MAPA */}
      {contact.mapUrl && (
        <section className={CX.map}>
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
