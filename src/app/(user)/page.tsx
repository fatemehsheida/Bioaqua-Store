import BestSellers from "@/components/home/BestSellers";
import Collctions from "@/components/home/collctions";
import MultimediaCollagen from "@/components/home/MultimediaCollagen";
import NewRestock from "@/components/home/New-Restock";
import SheetMasks from "@/components/home/SheetMasks";
import ShopWhatsPopularNow from "@/components/home/ShopWhatsPopularNow";
import Youtube from "@/components/home/Youtube";

export default function Home() {
  return (
    <div className="vazir w-full flex flex-col justify-center items-center content-center text-[#2E2A39]">
      <div className=" w-full pb-10 pt-3">
        <img src="bioaqua-banner-green_48645d6c-77a6-4c5d-92fc-d02d2d2f2bcc.webp"
          alt="BioAqua" className="w-full md:h-[550px] h-[300px] object-cover " />
        <div className="md:px-48 bg-[#EEF5F4]/80 md:py-2" >
          <NewRestock />
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
