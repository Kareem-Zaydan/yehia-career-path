
import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehia's Career Path",
  description: "A simple career planning website for Yehia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <header className="border-b px-6 py-5">
          <nav className="mx-auto flex max-w-5xl flex-wrap gap-5">
            <Link href="/">Home</Link>
            <Link href="/plan">Plan</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
