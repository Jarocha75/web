import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/app/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Okná Rasto - Kvalitné okná pre váš domov",
  description: "Ponuka okien Slovaktual a ďalších výrobcov.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={cn("font-sans", geist.variable)}>
      <body className="antialiased bg-gray-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
