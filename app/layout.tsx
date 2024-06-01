import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack Matthews - Web Developer",
  description: "My personal website for a public presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full h-full grid">{children}</body>
    </html>
  );
}
