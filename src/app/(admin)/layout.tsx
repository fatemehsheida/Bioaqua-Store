import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import "./globals.css";

const vazir = Vazirmatn({
  variable: "--font-vazir-sans",
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <ThemeProvider>
        <body className={`${vazir.variable}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
