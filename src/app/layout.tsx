import type { Metadata } from "next";
import { NavigationMenuDemo } from "../components/layout/HeaderHome";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="fn" dir="rtl" className="h-screen w-full items-center">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-bl from-[#6BB0A9] via-[#C2C3AE] to-[#FCE3D5] transition-all duration-5 bg-fixed flex flex-col justufy-center items-center `}>
        <div className="w-[80%] h-20 items-center flex flex-row justify-between px-14 pt-2 pb-1.5 mx-16 ">
          <div className="flex flex-row opacity-80 items-center justify-start">
            <button className="mx-2">
              <IoMdSearch className="size-6 hover:size-7" />
            </button>
            <button className="mx-2">
              <FaRegUser className="size-5 hover:size-6" />
            </button>
            <button className="mx-3">
              <AiOutlineShoppingCart className="size-6 hover:size-7" />
            </button>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <NavigationMenuDemo />
            </div>
            <img src="bioaqoua.avif" alt="Bioaqoua" className="w-40" />
          </div>
        </div>
        {children}
        <div className="flex flee-col mx-auto w-[65%] justify-between py-10 gap-10">
          <div className="flex flee-col justify-between w-full items-start pr-32 text-start">

            <div>
              <div className="mb-5 text-lg font-semibold">
                <h1>
                  ABOUT
                </h1>
              </div>
              <button className="text-start text-base">
                <h3>about us</h3>
                <h3>contact us </h3>
                <h3>wholeseale</h3>
              </button>
            </div>


            <div>
              <div className="mb-5 text-lg font-semibold">
                <h1>
                  CUSTOMER SERVICE
                </h1>
              </div>
              <button className="text-start text-base">
                <h3>FAQs</h3>
                <h3>SEARCH</h3>
                <h3>CERTIFICATION (FDA, ISO)</h3>
                <h3>PRIVACY POLICY</h3>
                <h3>SHIPPING & DELIVERY</h3>
                <h3>REFUNDS & RETURNS POLICY</h3>
              </button>
            </div>



            <div>
              <div className="mb-5 text-lg font-semibold"><h1>
                Main</h1></div>
              <button className="text-start text-base">
                <h3>home</h3>
                <h3>new</h3>
                <h3>best sellers</h3>
                <h3>skincare</h3>
                <h3>makeup</h3>
                <h3>shop all</h3>
                <h3>about</h3>
              </button>
            </div>
          </div>

          <div>
            <img src="bioaqoua.avif" alt="Bioaqoua" className="w-40 mr-24" />
          </div>
        </div>
      </body>
    </html>
  );
}
