import { client } from "../lib/sanity";
import type { Contact } from "../lib/sanity.types";

export default async function Kontakt() {
  const contact = await client.fetch<Contact>(
    `*[_type == "contact"][0]`
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HLAVIČKA */}
      <section className="bg-gray-950 text-white px-10 py-20 text-center">
        <h1 className="text-5xl font-black tracking-tighter">Kontaktujte nás</h1>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          Radi vám poradíme s výberom okien a pripravíme bezplatnú cenovú ponuku.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-16">
        {/* KONTAKTNÉ ÚDAJE */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tighter mb-8">
            Kde nás nájdete
          </h2>
          <div className="space-y-5 text-gray-700">
            {contact?.company && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Firma</p>
                <p className="text-xl font-bold text-gray-900">{contact.company}</p>
              </div>
            )}
            {contact?.address && contact?.city && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Adresa</p>
                <p className="text-lg">{contact.address}</p>
                <p className="text-lg">{contact.city}</p>
              </div>
            )}
            {contact?.phone && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Telefón</p>
                <a href={`tel:${contact.phone}`} className="text-lg font-bold hover:text-blue-600 transition-colors">
                  {contact.phone}
                </a>
              </div>
            )}
            {contact?.email && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Email</p>
                <a href={`mailto:${contact.email}`} className="text-lg font-bold hover:text-blue-600 transition-colors">
                  {contact.email}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* FORMULÁR */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tighter mb-8">
            Napíšte nám
          </h2>
          <form className="space-y-5">
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Meno a priezvisko</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ján Novák"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="jan@example.sk"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 block mb-2">Správa</label>
              <textarea
                rows={5}
                className="w-full border border-gray-200 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Mám záujem o cenovú ponuku..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-950 text-white py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors"
            >
              Odoslať správu
            </button>
          </form>
        </div>
      </section>

      {/* MAPA */}
      {contact?.mapUrl && (
        <section className="w-full h-96">
          <iframe
            src={contact.mapUrl}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      )}
    </main>
  );
}
