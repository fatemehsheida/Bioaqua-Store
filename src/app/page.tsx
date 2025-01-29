import BestSellers from "@/components/home/BestSellers";
import NewRestock from "@/components/home/New-Restock";
import SheetMasks from "@/components/home/SheetMasks";
import ShopWhatsPopularNow from "@/components/home/ShopWhatsPopularNow";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center content-center text-[#2E2A39]">
      <div className=" w-full py-10">
        <img src="bioaqua-banner-green_48645d6c-77a6-4c5d-92fc-d02d2d2f2bcc.webp"
         alt="BioAqua" className="w-full h-[550px] object-cover " />
        <div className="px-28 bg-[#EEF5F4]/80 py-10" >

          <NewRestock/>


          <BestSellers/>

          <div className="multimedia-collagen py-9 flex flex-row justify-center" >
            <div className="flex flex-col">
              <h1 className="font-semibold text-3xl pb-8 ">کلاژ چندرسانه‌ای</h1>
              <div className="flex flex-row gap-9">



                <div className="flex flex-col gap-7">
                  <div>
                    <img src="Multimedia collage/cleanse & exfolitors.webp" className="w-[340px] h-[243px] rounded-lg" />
                    <div>
                      <button>
                        <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                          <GoChevronRight />
                          <h4>پاک‌کننده‌ها و اسکراب‌ها</h4>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div>
                    <img src="sheet-mask/golden-osmanthus.webp" className="w-[340px] h-[340px] rounded-lg" />
                    <div>
                      <button>
                        <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                          <GoChevronRight />
                          <h4>ماسک بیوآکوا</h4>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <img src="Multimedia collage/acen&blemishedtreatmants.webp" alt="" className="w-[750px] h-[651px] rounded-lg" />
                    <div>
                      <button>
                        <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                          <GoChevronRight />
                          <h4>درمان‌های آکنه و لک</h4>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ShopWhatsPopularNow/>

         <SheetMasks/>
        </div>




        <div className="Youtube py-9 flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-medium">
            ویدیوها در یوتیوب
          </h1>
          <span className="font-light text-xl text-wrap w-[770px] text-center">
            بیوآکوا در حوزه محصولات مراقبت از پوست گیاهی و آرایشی تخصص دارد. این برند به‌خودراه‌حل‌های تخصصی در درمان آکنه و جوش‌های سرسیاه، لایه‌برداری، ماسک‌ها، آبرسانی و موارد دیگر معروف است.
          </span>
          <button className="bg-[#2E2A39] text-[#C3C3AE] py-2 px-4 rounded-xl">
            <Link href="https://www.youtube.com/results?search_query=bioaqua">
              تماشا
            </Link>

          </button>
        </div>

        <div className="collctions px-28 bg-[#EFF5F4]/50 py-10" >
          <div className="py-9 flex flex-col" >
            <h1 className="font-semibold text-3xl px-8">کالکشن ها</h1>

            <div className="flex flex-row gap-12 justify-center py-8">

              <div>
                <img src="collections/rem.webp" className="w-80 h-80 rounded-2xl" />
                <button>
                  <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                    <GoChevronRight />
                    <h4>ست های آرایشی</h4>
                  </div>
                </button>
              </div>

              <div>
                <img src="collections/balm.webp" className="w-80 h-80 rounded-2xl" />
                <button>
                  <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                    <GoChevronRight />
                    <h4>پیشنهادات زیبایی</h4>
                  </div>
                </button>
              </div>

              <div>
                <img src="collections/skin-care.webp" className="w-80 h-80 rounded-2xl" />
                <button>
                  <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                    <GoChevronRight />
                    <h4> مراقبت از پوست</h4>
                  </div>
                </button>
              </div>

            </div>


          </div>
        </div>

      </div>

    </div>
  );
}
