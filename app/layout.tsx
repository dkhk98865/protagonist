import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
<<<<<<< HEAD
import { ClerkProvider } from "@clerk/nextjs";
=======
>>>>>>> 550f48e42e530d5730ccc1ceb4fab1f3fc22ef4e

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
<<<<<<< HEAD
        <ClerkProvider appearance={{
          variables: {colorPrimary: '#fe5933' }} }>
          <NavBar />
          {children}
        </ClerkProvider>
=======
        <NavBar />
        {children}
>>>>>>> 550f48e42e530d5730ccc1ceb4fab1f3fc22ef4e
        </body>
    </html>
  );
}
