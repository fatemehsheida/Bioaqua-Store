import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import ReduxProvider from "@/lib/reduxProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const vazir = Vazirmatn({
  variable: "--font-vazir-mono",
  subsets: ["arabic"],
  weight: "300"
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
    <ReduxProvider>

    
    <html lang="fn" dir="rtl" className="h-screen w-full items-center">
      <head>
        <meta charSet="utf-8" />
        <link href="../style.css" rel="stylesheet"></link>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable}
         bg-gradient-to-bl from-[#6BB0A9] from-4% via-[#CCC6B0] to-[#F0D6C0]
          transition-all duration-5 bg-fixed flex flex-col justufy-center items-center `}>
        <Header />
        {children}
        <div className="flex flee-col text-sm md:mx-auto md:w-[65%] justify-between 
        py-10 md:gap-10 text-gray-700 font-light">
          <Footer />
          <div>
            <img src="http://localhost:8000/uploads/image-1738349698115-546474799.avif" alt="Bioaqoua" className="md:w-40 md:mr-24 w-52" />
          </div>
        </div>
      </body>
    </html>
    </ReduxProvider>
  );
}
