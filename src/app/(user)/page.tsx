import BestSellers from "@/components/home/BestSellers";
import Collctions from "@/components/home/collctions";
import MultimediaCollagen from "@/components/home/MultimediaCollagen";
import NewRestock from "@/components/home/New-Restock";
import SheetMasks from "@/components/home/SheetMasks";
import ShopWhatsPopularNow from "@/components/home/ShopWhatsPopularNow";
import Youtube from "@/components/home/Youtube";
import { ProductsResponse } from "@/types/type";
import apiClient from "@/utils/apiClient";

export default async function Home() {
  const response = await apiClient.get('/products')
  const products:ProductsResponse = response.data
  console.log(products)
  return (
    <div className=" w-full flex flex-col justify-center items-center content-center text-[#2E2A39]">
      <div className=" w-full dark:saturate-100 backdrop-brightness-90 ">
        <img src="bioaqua-banner-green_48645d6c-77a6-4c5d-92fc-d02d2d2f2bcc.webp"
          alt="BioAqua" className="w-full md:h-[550px] h-[300px] object-cover dark:backdrop-sepia-0 dark:bg-white/30
           filter  dark:brightness-90 dark:contrast-125  dark:saturate-75 brightness-100 contrast-150 saturate-100 " />
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
