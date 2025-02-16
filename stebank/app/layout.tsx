import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"; // Removed Geist & Geist_Mono
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"], // ✅ Corrected weight format
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "STEBANK",
  description: "STEBANK is a modern online Bank for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
