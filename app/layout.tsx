import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.css";

import { Handjet } from 'next/font/google';

const handjet = Handjet({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {

};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={handjet.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
