import type { Metadata } from "next";

import { raleway, poppins, openSans } from "../../src/font";
import "./styles/globals.css";

import AppProviders from "@contexts/index";

import WppButton from "@components/common/button/WppButton";

export const metadata: Metadata = {
  title: "IQ Financials",
  description: `Dados Econômicos, Financeiros e Contábeis, para acadêmicos, 
    gestores e investidores.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning={true}
        className={`${raleway.variable} ${poppins.variable} ${openSans.variable} font-sans`}
      >
        <AppProviders>
          {children}
          <WppButton />
        </AppProviders>
      </body>
    </html>
  );
}
