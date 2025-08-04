import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protagoni.st",
  description: "Find the fairy tale protagonist that reflects your soul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{
          variables: {colorPrimary: '#fe5933' }} }>
          <NavBar />
          {children}
        </ClerkProvider>
        </body>
    </html>
  );
}
