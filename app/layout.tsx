import type { Metadata } from "next";
import "./globals.css";

import { Handjet } from 'next/font/google';

const handjet = Handjet({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {

};

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
