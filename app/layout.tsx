import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google"; // Replace fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

// Apply Harry Potter-themed fonts
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"], // Use bold for headings
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"], // Use normal and medium weights
});

export const metadata: Metadata = {
  title: "Harry Potter Theme",
  description: "A magical Harry Potter themed layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorantGaramond.variable} bg-black text-gold antialiased`} // Apply fonts and theme colors
      >
        <Navbar />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}