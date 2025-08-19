import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
  },
  other: {
    // 👇 Paste the exact name + token Impact gave you
    "impact-site-verification": "e3f125e8-2b9a-49fc-bf2c-2ff57578247a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
