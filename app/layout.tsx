import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordic Security Systems AB",
  description:
    "Appar och plattformar utvecklade av Nordic Security Systems AB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-stone-100 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
