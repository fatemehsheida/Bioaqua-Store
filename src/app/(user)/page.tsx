import BestSellers from "@/components/home/BestSellers";
import Collctions from "@/components/home/collctions";
import MultimediaCollagen from "@/components/home/MultimediaCollagen";
import NewRestock from "@/components/home/New-Restock";
import SheetMasks from "@/components/home/SheetMasks";
import ShopWhatsPopularNow from "@/components/home/ShopWhatsPopularNow";
import Youtube from "@/components/home/Youtube";
import { ProductsResponse } from "@/types/type";
import apiClient from "@/utils/apiClient";
import CreateButton from "@/components/createButton";

export default async function Home() {
  const response = await apiClient.get('/products')
  const products:ProductsResponse = response.data
  console.log(products)
  return (
    <div className="w-full flex flex-col justify-center items-center content-center text-DarkPurple">
      <div className="w-full dark:saturate-100 backdrop-brightness-90 ">
        <img
          src="/bioaqua-banner-green_48645d6c-77a6-4c5d-92fc-d02d2d2f2bcc.webp"
          alt="BioAqua"
          className="relative w-full md:h-[550px] h-[300px] object-cover transition-all duration-300
                    dark:brightness-75"
        />


          <div className="absolute lg:top-64 xl:right-48 lg:right-32 top-36 right-9 flex justify-center items-center flex-col lg:gap-5 gap">
            <span className="lg:text-3xl text-lg font-medium text-slate-50 cursor-context-menu">مراقبت از پوست، هدیه ای برای زیبایی تو</span>
            <div className="lg:text-sm text-xs font-medium text-DarkGray flex items-center gap-5">
               <CreateButton
                  text="محصولات جدید"
                  href="/products/category/new"
                  className="bg-slate-50 dark:bg-zinc-700 dark:text-slate-50 px-3 py-2 rounded-lg hover:scale-110"
                />
              
              <CreateButton
                  text="همه محصولات"
                  href="/products"
                  className="bg-slate-50 dark:bg-zinc-700 dark:text-slate-50 px-3 py-2 rounded-lg hover:scale-110"
                />
            </div>
          </div>
        <div className="md:px-48 bg-LightMint/50 dark:bg-[#16181E] md:py-2 dark:text-slate-300" >
          <NewRestock products={products.results} />
          <BestSellers />
          <MultimediaCollagen />
          <ShopWhatsPopularNow />
          <SheetMasks />
        </div>
        <Youtube />
        <div className="collctions bg-LightGray/50  dark:bg-[#16181E] py-10" >
          <Collctions />
        </div>
      </div>

    </div>
  );
}
