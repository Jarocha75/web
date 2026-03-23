"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulácia odosielania (zajtra tam napojíme skutočný e-mail)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 p-8 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-black text-gray-900 italic">
          Správa odoslaná!
        </h3>
        <p className="text-gray-500 max-w-xs">
          Ďakujeme za váš záujem. Ozveme sa vám hneď, ako to bude možné
          (zvyčajne do 24 hodín).
        </p>
        <button
          onClick={() => setIsSent(false)}
          className="text-blue-600 font-bold hover:underline mt-4"
        >
          Poslať ďalšiu správu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* MENO */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">
            Meno
          </label>
          <input
            required
            type="text"
            placeholder="Ján Novák"
            className="w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-300 shadow-sm"
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">
            Váš Email
          </label>
          <input
            required
            type="email"
            placeholder="jan@example.sk"
            className="w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-300 shadow-sm"
          />
        </div>
      </div>

      {/* SPRÁVA */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">
          V čom vám môžeme pomôcť?
        </label>
        <textarea
          required
          rows={5}
          placeholder="Mám záujem o cenovú ponuku na hliníkové okná..."
          className="w-full bg-white border-2 border-transparent rounded-3xl px-6 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-gray-300 shadow-sm resize-none"
        />
      </div>

      {/* TLAČIDLO */}
      <button
        disabled={isSubmitting}
        type="submit"
        className="group relative w-full bg-gray-950 text-white py-5 rounded-full font-bold text-xl overflow-hidden transition-all hover:bg-blue-600 disabled:bg-gray-400"
      >
        <span
          className={`flex items-center justify-center gap-3 transition-all ${isSubmitting ? "opacity-0" : "opacity-100"}`}
        >
          Odoslať dopyt
          <Send
            size={20}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </span>

        {/* Loading spinner, ktorý sa ukáže pri odosielaní */}
        {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
      </button>

      <p className="text-center text-xs text-gray-400 italic">
        Kliknutím na tlačidlo súhlasíte so spracovaním osobných údajov.
      </p>
    </form>
  );
};
