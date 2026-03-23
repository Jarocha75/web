import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { cn } from "@/app/lib/utils"
import { produktyMenu, mobilneLinky } from "@/app/data/navData"
import MobileMenu from "./MobileMenu"

// — Konštanty —

const LOGO = {
  src: "/logo/VikoTrade - logo.jpg",
  alt: "VikoTrade logo",
  width: 140,
  height: 48,
  style: { width: "auto", height: "48px" } as React.CSSProperties,
} as const

const HREFS = {
  home: "/",
  kontakt: "/kontakt",
} as const

const CX = {
  nav: "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm",
  inner: "max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center",
  menuItem: cn(navigationMenuTriggerStyle(), "text-base font-semibold text-gray-700"),
  menuTrigger: "text-base font-semibold text-gray-700",
  dropdownLink: "block rounded-md px-3 py-2 hover:bg-gray-50 group transition-colors",
  dropdownLabel: "text-base font-medium text-gray-800 group-hover:text-red-600 transition-colors",
  dropdownDesc: "text-sm text-gray-400",
  kontaktBtn: "group/button hidden md:inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-primary text-primary-foreground bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 h-9 gap-1.5 px-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
}

// — Komponent —

export default function Navbar() {
  return (
    <nav className={CX.nav}>
      <div className={CX.inner}>

        {/* LOGO */}
        <Link href={HREFS.home} className="flex items-center">
          <Image {...LOGO} alt={LOGO.alt} priority />
        </Link>

        {/* DESKTOP MENU — stred */}
        <div className="hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={HREFS.home} className={CX.menuItem}>
                  O nás
                </Link>
              </NavigationMenuItem>

              {produktyMenu.map((skupina) => (
                <NavigationMenuItem key={skupina.kategoria}>
                  {skupina.polozky.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className={CX.menuTrigger}>
                        {skupina.kategoria}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col gap-0.5 p-3 w-56">
                          {skupina.polozky.map((item) => (
                            <Link key={item.href} href={item.href} className={CX.dropdownLink}>
                              <div className={CX.dropdownLabel}>{item.label}</div>
                              {item.popis && (
                                <div className={CX.dropdownDesc}>{item.popis}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={skupina.href} className={CX.menuItem}>
                      {skupina.kategoria}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* KONTAKT + MOBILE TRIGGER */}
        <div className="flex justify-end items-center gap-3">
          <Link href={HREFS.kontakt} className={CX.kontaktBtn}>
            Kontakt
          </Link>

          <MobileMenu linky={mobilneLinky} />
        </div>

      </div>
    </nav>
  )
}
