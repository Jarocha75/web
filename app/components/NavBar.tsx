"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/app/lib/utils"

const produktyMenu = [
  {
    kategoria: "Okná",
    href: "/produkty?kategoria=okna",
    polozky: [
      { label: "Plastové okná", href: "/produkty?kategoria=okna&typ=plasticke", popis: "Salamander, Rehau" },
      { label: "Hliníkové okná", href: "/produkty?kategoria=okna&typ=hlinikove", popis: "Aluprof" },
    ],
  },
  {
    kategoria: "Dvere",
    href: "/produkty?kategoria=dvere",
    polozky: [
      { label: "Interiérové dvere", href: "/produkty?kategoria=dvere&typ=interierove", popis: "Pre vnútorné priestory" },
      { label: "Vchodové dvere", href: "/produkty?kategoria=dvere&typ=vchodove", popis: "Bezpečnosť a dizajn" },
    ],
  },
  {
    kategoria: "Garážové brány",
    href: "/produkty?kategoria=garazove-brany",
    polozky: [],
  },
  {
    kategoria: "Doplnky",
    href: "/produkty?kategoria=doplnky",
    polozky: [
      { label: "Parapety", href: "/produkty?kategoria=doplnky&typ=parapety", popis: "" },
      { label: "Žalúzie", href: "/produkty?kategoria=doplnky&typ=zaluzie", popis: "" },
      { label: "Sieťky proti hmyzu", href: "/produkty?kategoria=doplnky&typ=sietky", popis: "" },
      { label: "Rolety", href: "/produkty?kategoria=doplnky&typ=rolety-hlinikove", popis: "Hliníkové a screenové" },
    ],
  },
]

const mobilneLinky = [
  { href: "/", label: "O nás" },
  { href: "/produkty?kategoria=okna&typ=plasticke", label: "Plastové okná" },
  { href: "/produkty?kategoria=okna&typ=hlinikove", label: "Hliníkové okná" },
  { href: "/produkty?kategoria=dvere&typ=interierove", label: "Interiérové dvere" },
  { href: "/produkty?kategoria=dvere&typ=vchodove", label: "Vchodové dvere" },
  { href: "/produkty?kategoria=garazove-brany", label: "Garážové brány" },
  { href: "/produkty?kategoria=doplnky", label: "Doplnky" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          {/* Logo sem pridáš neskôr */}
          <span className="text-xl font-black tracking-tighter text-gray-900 uppercase">
            Okná<span className="text-blue-600 font-light text-sm ml-1">Rasto</span>
          </span>
        </Link>

        {/* DESKTOP MENU — stred */}
        <div className="hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={cn(navigationMenuTriggerStyle(), "text-gray-700")}>
                  O nás
                </Link>
              </NavigationMenuItem>

              {produktyMenu.map((skupina) => (
                <NavigationMenuItem key={skupina.kategoria}>
                  {skupina.polozky.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="text-gray-700">
                        {skupina.kategoria}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col gap-0.5 p-3 w-56">
                          {skupina.polozky.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block rounded-md px-3 py-2 hover:bg-gray-50 group transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                {item.label}
                              </div>
                              {item.popis && (
                                <div className="text-xs text-gray-400">{item.popis}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={skupina.href} className={cn(navigationMenuTriggerStyle(), "text-gray-700")}>
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
          <Link
            href="/kontakt"
            className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}
          >
            Kontakt
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" />}
              className="md:hidden"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="text-left">Menu</SheetTitle>
              <div className="flex flex-col gap-4 mt-6 px-1">
                {mobilneLinky.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/kontakt"
                  onClick={() => setOpen(false)}
                  className={cn(buttonVariants(), "mt-2")}
                >
                  Kontakt
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}
