"use client";

import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Background from "@/components/Background";
import GlobalStyles from "@/components/GlobalStyles";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Background />
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" />
        <ThemeSwitch />
        <GlobalStyles />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
