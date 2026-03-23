# Code Review Checklist — VikoTrade web

Checklist pred každým PR / merge do `main`.

---

## Farebná schéma

- [ ] Žiadna `blue-*` trieda ako primárna farba (tlačidlá, linky, hover, focus)
- [ ] Nové CTA tlačidlá používajú `buttonVariants()` bez prepisovania farby
- [ ] Nové hover efekty na linkoch používajú `hover:text-red-600` alebo `hover:text-primary`
- [ ] Žiadne hardcodované hex farby mimo `globals.css`

---

## Server / Client Components

- [ ] `"use client"` je iba tam, kde je skutočne potrebné (useState, event handlery, browser API)
- [ ] Server components neimportujú client-only knižnice
- [ ] Props prechádzajúce zo Server → Client Component sú serializovateľné (žiadne funkcie, triedy, Map, Set)
- [ ] Nové interaktívne časti sú vyčlenené do samostatného Client Componentu (vzor: NavBar + MobileMenu)

---

## Dáta a konfigurácia

- [ ] Statické dáta (zoznamy, menu, texty) sú v `app/data/` — nie inline v komponentoch
- [ ] Nové dátové štruktúry majú TypeScript typy

---

## Next.js Image

- [ ] Každý `<Image>` má `width` a `height` props
- [ ] Ak sa mení veľkosť cez CSS, používa sa `style={{ width: "auto" }}` alebo `style={{ height: "auto" }}` — nie Tailwind `w-auto h-X`
- [ ] Obrázky above-the-fold majú `priority` prop

---

## Všeobecné

- [ ] Žiadne `console.log` v produkcii
- [ ] Žiadne nepoužité importy
- [ ] Nové komponenty dodržujú existujúcu adresárovú štruktúru (`app/components/`, `app/data/`, `app/lib/`)
- [ ] shadcn UI komponenty nie sú modifikované priamo v `app/components/ui/` — len rozširované
