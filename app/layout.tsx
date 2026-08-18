import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepak Chauhan | AI, Systems, Open Source",
  description:
    "Portfolio of Deepak Chauhan, featuring agentic AI work, low-latency C++ systems, responsive 3D/WebGL web experiences, and open source contributions.",
  metadataBase: new URL("https://ideepakchauhan7.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${chakraPetch.variable} ${jetBrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
