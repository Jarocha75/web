"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/app/lib/utils"
import type { NavLink } from "@/app/data/navData"

// — Konštanty —

const HREFS = {
  kontakt: "/kontakt",
} as const

const CX = {
  linkList: "flex flex-col gap-4 mt-6 px-1",
  link: "text-base font-semibold text-gray-700 hover:text-primary transition-colors",
  kontaktBtn: "mt-2",
}

// — Typy —

type Props = {
  linky: NavLink[]
}

// — Komponent —

export default function MobileMenu({ linky }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" />}
        className="md:hidden"
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle className="text-left">Menu</SheetTitle>
        <div className={CX.linkList}>
          {linky.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={CX.link}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={HREFS.kontakt}
            onClick={() => setOpen(false)}
            className={cn(buttonVariants(), CX.kontaktBtn)}
          >
            Kontakt
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
