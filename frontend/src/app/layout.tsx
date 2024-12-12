import type { Metadata } from "next";

import { raleway, poppins, openSans } from "../font";
import "./styles/globals.css";

import AppProviders from "@/contexts";

import LayoutWrapper from "@/components/common/container/LayoutWrapper";
import WhatsAppButton from "@/components/common/button/btnWhats";

export const metadata: Metadata = {
  title: "Matheus Website",
  description: "WebSite Matheus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning={true}
        className={`${raleway.variable} ${poppins.variable} ${openSans.variable} font-mono bg-black`}
      >
        <AppProviders>
          <LayoutWrapper>{children}</LayoutWrapper>
          <WhatsAppButton />
        </AppProviders>
      </body>
    </html>
  );
}
