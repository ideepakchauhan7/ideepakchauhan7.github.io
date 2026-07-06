import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Chauhan | AI, Systems, Open Source",
  description:
    "Portfolio of Deepak Chauhan, featuring agentic AI work, low-latency C++ systems, and open source contributions.",
  metadataBase: new URL("https://ideepakchauhan7.github.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
