@AGENTS.md

# VikoTrade — web app (Next.js 16 / App Router)

## Technológie
- **Next.js 16.2.1** — App Router, nie Pages Router
- **Tailwind CSS v4** + shadcn/ui komponenty
- **TypeScript** — všetky súbory `.tsx` / `.ts`
- **pnpm** workspaces (monorepo root: `Viko-Trade/`)

---

## Farebná schéma

Logo VikoTrade je **čierno-červené** (čierne `VIKO` + červené `TRADE`).
Celá app sa riadi touto schémou — **nikdy nepoužívaj modrú** ako primárnu farbu.

Farby sú definované globálne v `app/globals.css` cez CSS premenné:

| Premenná | Hodnota (light) | Účel |
|---|---|---|
| `--primary` | `oklch(0.53 0.22 25)` | červená — tlačidlá, focus, CTA |
| `--primary-foreground` | `oklch(0.985 0 0)` | biela na červenom |
| `--ring` | `oklch(0.53 0.22 25)` | červená focus ring |
| `--accent` | `oklch(0.95 0.02 25)` | jemne červenkastý hover bg |
| `--accent-foreground` | `oklch(0.53 0.22 25)` | červená text na accente |

**Nikdy nepridávaj farby priamo do komponentov** (napr. `bg-blue-600`) — použi CSS premenné alebo Tailwind triedy odvodené od nich (`bg-primary`, `text-primary`, atď.).

Výnimka: hover na linkoch v menu používa `hover:text-red-600` (shadcn navigation-menu má vlastné CSS, kde `text-primary` nefunguje spoľahlivo).

---

## Štruktúra komponentov

### Server vs. Client Components

- **Server Component** = predvolené — bez `"use client"`, bez `useState`/`useEffect`
- **Client Component** = iba keď treba interaktivitu (state, event handlery, browser API)
- `"use client"` patrí **len na hranicu** — nie do každého súboru

### NavBar architektúra (referenčný vzor)

```
NavBar.tsx        ← Server Component — layout, logo, desktop menu
MobileMenu.tsx    ← Client Component — Sheet, useState pre open/close
```

`MobileMenu` prijíma dáta cez `props` (serializovateľné) — nie funkcie.

---

## Dáta / konfigurácia

Navigačné dáta (menu položky, linky) patria do `app/data/`:

```
app/data/navData.ts    ← NavSkupina[], NavLink[], typy
```

Pravidlo: **dáta oddelené od komponentov**. Keď treba pridať/odstrániť kategóriu v menu, edituje sa iba `navData.ts`.

---

## Next.js Image

`width` a `height` props musia byť **skutočné (intrinsic) rozmery súboru**, nie zobrazovaná veľkosť.
CSS `style` ovláda zobrazenie. Varovanie "has either width or height modified" nastane, keď sa líši len jedna dimenzia (Next.js porovnáva `img.width` / `img.height` s HTML atribútmi).

```tsx
// ✅ správne — intrinsic rozmery súboru (napr. 614×233), CSS určuje zobrazenie
<Image src="..." width={614} height={233} style={{ width: "auto", height: "48px" }} />

// ❌ nesprávne — width/height nezodpovedajú súboru, len jedna dimenzia sa líši → warning
<Image src="..." width={140} height={48} style={{ width: "auto", height: "48px" }} />

// ❌ nesprávne — CSS triedy namiesto style
<Image src="..." width={614} height={233} className="h-12 w-auto" />
```

Na zistenie intrinsic rozmerov: `sips -g pixelWidth -g pixelHeight public/logo/súbor.png`

---

## Konštanty v komponentoch

Hardcodované hodnoty (cesty, rozmery, opakované CSS triedy) vyťahuj do konštánt na vrchol súboru:

```ts
const LOGO = { src: "...", alt: "...", width: 140, height: 48 } as const
const HREFS = { home: "/", kontakt: "/kontakt" } as const
const CX = { nav: "sticky top-0 ...", menuItem: cn(...) }
```

Pri `<Image {...spread} />` vždy explicitne pridaj `alt={...}` — linter nedokáže overiť `alt` cez spread a hlási warning.

---

## Statické assets

Logo: `public/logo/VikoTrade - logo.jpg`
Cesta v kóde: `/logo/VikoTrade - logo.jpg`
