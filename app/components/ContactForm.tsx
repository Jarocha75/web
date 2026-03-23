"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

// — Konštanty —

const SUBMIT_DELAY_MS = 2000

const TEXT = {
  successTitle: "Správa odoslaná!",
  successMsg: "Ďakujeme za váš záujem. Ozveme sa vám hneď, ako to bude možné (zvyčajne do 24 hodín).",
  sendAnother: "Poslať ďalšiu správu",
  labelMeno: "Meno",
  placeholderMeno: "Ján Novák",
  labelEmail: "Váš Email",
  placeholderEmail: "jan@example.sk",
  labelSprava: "V čom vám môžeme pomôcť?",
  placeholderSprava: "Mám záujem o cenovú ponuku na hliníkové okná...",
  submitBtn: "Odoslať dopyt",
  disclaimer: "Kliknutím na tlačidlo súhlasíte so spracovaním osobných údajov.",
} as const

const CX = {
  successWrap: "h-full flex flex-col items-center justify-center text-center space-y-4 p-8 animate-in fade-in zoom-in duration-500",
  successIcon: "w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4",
  successH3: "text-3xl font-black text-gray-900 italic",
  successMsg: "text-gray-500 max-w-xs",
  sendAnother: "text-primary font-bold hover:underline mt-4",
  label: "text-sm font-bold text-gray-400 uppercase tracking-widest ml-1",
  input: "w-full bg-white border-2 border-transparent rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all placeholder:text-gray-300 shadow-sm",
  textarea: "w-full bg-white border-2 border-transparent rounded-3xl px-6 py-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all placeholder:text-gray-300 shadow-sm resize-none",
  submitBtn: "group relative w-full bg-gray-950 text-white py-5 rounded-full font-bold text-xl overflow-hidden transition-all hover:bg-primary disabled:bg-gray-400",
  spinner: "w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin",
  disclaimer: "text-center text-xs text-gray-400 italic",
}

// — Komponent —

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY_MS));
    setIsSubmitting(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className={CX.successWrap}>
        <div className={CX.successIcon}>
          <CheckCircle2 size={40} />
        </div>
        <h3 className={CX.successH3}>{TEXT.successTitle}</h3>
        <p className={CX.successMsg}>{TEXT.successMsg}</p>
        <button onClick={() => setIsSent(false)} className={CX.sendAnother}>
          {TEXT.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* MENO */}
        <div className="space-y-2">
          <label className={CX.label}>{TEXT.labelMeno}</label>
          <input
            required
            type="text"
            placeholder={TEXT.placeholderMeno}
            className={CX.input}
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <label className={CX.label}>{TEXT.labelEmail}</label>
          <input
            required
            type="email"
            placeholder={TEXT.placeholderEmail}
            className={CX.input}
          />
        </div>
      </div>

      {/* SPRÁVA */}
      <div className="space-y-2">
        <label className={CX.label}>{TEXT.labelSprava}</label>
        <textarea
          required
          rows={5}
          placeholder={TEXT.placeholderSprava}
          className={CX.textarea}
        />
      </div>

      {/* TLAČIDLO */}
      <button disabled={isSubmitting} type="submit" className={CX.submitBtn}>
        <span
          className={`flex items-center justify-center gap-3 transition-all ${isSubmitting ? "opacity-0" : "opacity-100"}`}
        >
          {TEXT.submitBtn}
          <Send
            size={20}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </span>

        {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={CX.spinner}></div>
          </div>
        )}
      </button>

      <p className={CX.disclaimer}>
        {TEXT.disclaimer}
      </p>
    </form>
  );
};
