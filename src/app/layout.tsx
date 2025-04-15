import type { Metadata } from "next";
import "./globals.css";

import Header from "@/app/components/header";

import { poppins } from '@/app/ui/fonts';


import ScrollHide from "@/app/tools/scrollHide";

export const metadata: Metadata = {
  title: "Volkan Gümüş",
  description: "Volkan Gümüş'ün kişisel web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`} style={{ backgroundColor: "#FFF" }}>
        {children}
        <ScrollHide /> 
      </body>
    </html>
  );
}
