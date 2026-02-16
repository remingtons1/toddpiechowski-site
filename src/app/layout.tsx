import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toddpiechowski.com"),
  title: {
    default: "Todd Piechowski | Agentic Commerce Expert",
    template: "%s | Todd Piechowski",
  },
  description:
    "I write about agentic commerce. I build the infrastructure for it. Author of Instant Checkout, the book on AI shopping agents.",
  keywords: [
    "agentic commerce",
    "AI shopping",
    "AI agents",
    "e-commerce",
    "GXO",
    "AEO",
    "product data optimization",
    "AI visibility",
    "agent-ready commerce",
  ],
  authors: [{ name: "Todd Piechowski", url: "https://toddpiechowski.com" }],
  creator: "Todd Piechowski",
  openGraph: {
    title: "Todd Piechowski | Agentic Commerce Expert",
    description:
      "I write about agentic commerce. I build the infrastructure for it. Author of Instant Checkout.",
    url: "https://toddpiechowski.com",
    siteName: "Todd Piechowski",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Todd Piechowski | Agentic Commerce Expert",
    description:
      "I write about agentic commerce. I build the infrastructure for it. Author of Instant Checkout.",
    creator: "@toddpiechowski",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://toddpiechowski.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
