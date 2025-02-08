import { Product } from "@/types/type";
import { ProductionQuantityLimits } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { PiAirplaneTiltLight, PiHeartThin, PiUploadSimpleThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ProductDetailCart from "@/components/cart/ProductDetailCart";
import ImageGallery from "@/components/product/ImageGallery";



interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const endpoint = `http://localhost:8000/products/${params.id}`;

  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product: Product = await res.json();

  return (

    <div>
      <h1>{product.titleFa}</h1>
      <h2>{product.titleEn}</h2>
    <div className="w-full lg:px-40 2xl:px-80 bg-[#F1F3F1]">
    <div className="px-12 pt-9 pb-7">
      <div dir="ltr" className="grid md:grid-cols-2  justify-center  gap-12">
        <ImageGallery images={product.images.list}/>

        {/* <div>

          <div>
            <div className="flex flex-row py-10 gap-4 bg-rose-300">
              {product.images.list.map((imageListURL, index) => <div key={index}>
                <img src={imageListURL} className=" w-24 h-24  rounded-xl" />
              </div>)}
            </div>
          </div>
        </div> */}
        <div className="w-full flex-col" dir="rtl">
          <div className="flex flex-col gap-3">


            <div>
              <div><p className="font-light text-xs text-gray-600">BIOAQUA® OFFICIAL STORE</p></div>
              <div>
                <h1 className="font-normal text-gray-800 text-5xl">{product.titleFa}</h1>
              </div>
              <div>
                <p className="font-normal text-lg ">$7.99</p>
              </div>
            </div>
            <div>
              {product.specifications.length > 0 &&
             <>
            <span className="text-sm font-normal text-[#5F5C68]">{product.specifications[0].name}</span>
              <div className="flex flex-row gap-3 flex-wrap">
                  

                {product.specifications.map((items, index) => <div key={index}>
                  <button className="px-[0.70rem] py-[0.4rem]  bg-white rounded-lg text-sm font-normal
                 border-[#8C8A92] border shadow-md  inset-shadow-indigo-900 hover:border-[#2E2A39]
                  transition-all duration-300 focus:bg-[#2E2A39]  focus:text-white text-[#65626D]
                   focus:border-none">{items.title}</button>
                </div>)}
              </div>

               </>}
            </div>
            <div>
              
            </div>
          </div>
          <ProductDetailCart product={product} />
          <div className="w-[90%]" dir="rtl">
            <hr />
            <Accordion type="single" collapsible>
              <div>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex gap-3">
                    <div className="flex justify-start items-center gap-3 text-[#4b4756] font-normal">
                      <CiDeliveryTruck className="w-5 h-5 " /> آیا ارسال به سراسر دنیا دارید؟
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-normal text-[#918e99]">
                    <ul className="my-2">
                      <li>- ایالات متحده: ۷-۱۴ روز</li>
                      <li>- کانادا/استرالیا/نیوزیلند/اسرائیل/ژاپن/برزیل: ۸-۱۶ روز</li>
                      <li>- کشورهای اروپایی: ۹-۱۸ روز</li>
                      <li>- سایر نقاط جهان: ۱۲-۳۰ روز</li>
                      <li>
                        - برای اطلاعات بیشتر، لطفاً{" "}
                        <a className="underline font-normal">سیاست حمل و نقل</a> ما را مطالعه کنید.
                      </li>
                    </ul>
                    به طور میانگین، پردازش سفارش شما ۱-۲ روز کاری زمان می‌برد. ممکن است در تعطیلات و آخر هفته‌ها تأخیر وجود داشته باشد.
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex justify-start items-center gap-3 text-[#4b4756] font-normal">
                      <PiAirplaneTiltLight className="w-5 h-5 " /> آیا ارسال سریع‌تر امکان‌پذیر است؟
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-normal text-[#918e99]">
                    برنامه‌های حمل و نقل مختلفی برای کشورهای گوناگون در نظر گرفته شده است. به طور کلی، زمان حمل‌ونقل می‌تواند ۳-۱۰ روز کاهش یابد. ما بهترین خدمات را برای شما فراهم می‌کنیم تا در وقت شما صرفه‌جویی شود.
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex justify-start items-center gap-3 text-[#4b4756] font-normal">
                      <PiHeartThin className="w-5 h-5 " /> آیا ضمانت بازگشت وجه دارید؟
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-normal text-[#918e99]">
                    اگر بیش از ۳۰ روز (برای برخی کشورها ۴۵ روز) بسته شما نرسد و این مشکل ناشی از شما نباشد، ما ۱۰۰٪ مبلغ را به شما بازمی‌گردانیم.
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div className="items-center py-4 transition-all hover:underline flex gap-3 cursor-pointer">
                <RiShare2Line className="w-[0.85rem] h-[0.85rem] stroke-[0.05px] " /><p className="text-[#4b4756] font-normal text-sm font-nnormal "> انتشار</p>
              </div>


            </Accordion>


          </div>
        </div >

      </div>
  
      <p dangerouslySetInnerHTML={{ __html: product.expert_reviews }} className="text-sm font-normal text-[#5F5C68]/80 py-8"></p >
    </div>
  </div >
  );
}
