import BestSellers from "@/components/home/BestSellers";
import Collctions from "@/components/home/collctions";
import MultimediaCollagen from "@/components/home/MultimediaCollagen";
import NewRestock from "@/components/home/New-Restock";
import SheetMasks from "@/components/home/SheetMasks";
import ShopWhatsPopularNow from "@/components/home/ShopWhatsPopularNow";
import Youtube from "@/components/home/Youtube";
import { ProductsResponse } from "@/types/type";
import apiClient from "@/utils/apiClient";
import Link from "next/link";

export default async function Home() {
  const response = await apiClient.get('/products')
  const products:ProductsResponse = response.data
  console.log(products)
  return (
    <div className=" w-full flex flex-col justify-center items-center content-center text-[#2E2A39]">
      <div className=" w-full dark:saturate-100 backdrop-brightness-90 ">

        <img src="bioaqua-banner-green_48645d6c-77a6-4c5d-92fc-d02d2d2f2bcc.webp"
          alt="BioAqua" className="relative w-full md:h-[550px] h-[300px] object-cover dark:bg-white/30" />

          <div className="absolute lg:top-64 xl:right-48 lg:right-32 top-36 right-9 flex justify-center items-center flex-col lg:gap-5 gap">
            <span className="lg:text-3xl text-lg font-medium text-slate-50">مراقبت از پوست، هدیه ای برای زیبایی تو</span>
            <div className="lg:text-sm text-xs font-medium text-[#33333393] flex items-center gap-5">
              <Link href="/products/category/new">
              <button className="bg-slate-50 px-3 py-2 rounded-lg hover:scale-110">محصولات جدید</button>
              </Link>
              <Link href="/products">
              <button className="bg-slate-50 px-3 py-2 rounded-lg hover:scale-110">همه محصولات</button>
              </Link>
            </div>
          </div>



        <div className="md:px-48 bg-[#EEF5F4]/80 dark:bg-[#21242d] md:py-2 dark:text-slate-300" >
          <NewRestock products={products.results} />
          <BestSellers />
          <MultimediaCollagen />
          <ShopWhatsPopularNow />
          <SheetMasks />
        </div>
        <Youtube />
        <div className="collctions px-48 bg-[#EFF5F4]/50 py-10" >
          <Collctions />
        </div>
      </div>

    </div>
  );
}
