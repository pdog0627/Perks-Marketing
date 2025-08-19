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
    "Impact-Site-Verification": "021d1992-d8b1-4a1c-8c43-73ec8bf1c6ad",
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
