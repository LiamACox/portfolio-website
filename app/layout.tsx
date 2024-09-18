import type { Metadata } from "next";
import type { Viewport } from 'next'
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
