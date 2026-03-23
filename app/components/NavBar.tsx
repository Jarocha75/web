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
import { buttonVariants } from "./ui/button"
import { cn } from "@/app/lib/utils"
import { produktyMenu, mobilneLinky } from "@/app/data/navData"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/VikoTrade - logo.jpg"
            alt="VikoTrade logo"
            width={140}
            height={48}
            style={{ width: "auto", height: "48px" }}
            priority
          />
        </Link>

        {/* DESKTOP MENU — stred */}
        <div className="hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={cn(navigationMenuTriggerStyle(), "text-base font-semibold text-gray-700")}>
                  O nás
                </Link>
              </NavigationMenuItem>

              {produktyMenu.map((skupina) => (
                <NavigationMenuItem key={skupina.kategoria}>
                  {skupina.polozky.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="text-base font-semibold text-gray-700">
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
                              <div className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors">
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
                    <Link href={skupina.href} className={cn(navigationMenuTriggerStyle(), "text-base font-semibold text-gray-700")}>
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

          <MobileMenu linky={mobilneLinky} />
        </div>

      </div>
    </nav>
  )
}
