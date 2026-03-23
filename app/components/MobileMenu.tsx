"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/app/lib/utils"
import type { NavLink } from "@/app/data/navData"

type Props = {
  linky: NavLink[]
}

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
        <div className="flex flex-col gap-4 mt-6 px-1">
          {linky.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-red-600 transition-colors"
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
  )
}
