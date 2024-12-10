"use client";
import { ScrollProvider } from "./refs";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <outroProvider> //respeitar a ontem de importância
    <ScrollProvider>{children}</ScrollProvider>
    // </outroProvider>
  );
}
