import type { Metadata } from "next";

import { raleway, poppins, openSans } from "../../src/font";
import "./styles/globals.css";

import AppProviders from "@contexts/index";

import WppButton from "@components/common/button/WppButton";

export const metadata: Metadata = {
  title: "Financials",
  description: "IQ financials web",
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
