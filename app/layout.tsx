import "./globals.css";
import { Inter } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salman | Full Stack Developer",
  description: "Hi, I'm Salman – a passionate full stack developer who loves building clean and user-friendly web experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 overflow-x-hidden pt-28 sm:pt-36`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
