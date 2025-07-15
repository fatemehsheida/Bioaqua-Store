import React from 'react'
import { PiAirplaneTiltLight, PiHeartThin, PiUploadSimpleThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const AccordionDetail = () => {
    return (
        <Accordion type="single" collapsible>
            <div>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="flex gap-3">
                        <div className="flex justify-start items-center gap-3 text-DeepBasalt font-normal dark:text-white/50">
                            <CiDeliveryTruck className="w-5 h-5 " /> آیا ارسال به سراسر دنیا دارید؟
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm font-normal text-MauveGray">
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
                        <div className="flex justify-start items-center gap-3 text-DeepBasalt font-normal dark:text-white/50">
                            <PiAirplaneTiltLight className="w-5 h-5 " /> آیا ارسال سریع‌تر امکان‌پذیر است؟
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm font-normal text-MauveGray">
                        برنامه‌های حمل و نقل مختلفی برای کشورهای گوناگون در نظر گرفته شده است. به طور کلی، زمان حمل‌ونقل می‌تواند ۳-۱۰ روز کاهش یابد. ما بهترین خدمات را برای شما فراهم می‌کنیم تا در وقت شما صرفه‌جویی شود.
                    </AccordionContent>
                </AccordionItem>
            </div>

            <div>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        <div className="flex justify-start items-center gap-3 text-DeepBasalt font-normal dark:text-white/50">
                            <PiHeartThin className="w-5 h-5 " /> آیا ضمانت بازگشت وجه دارید؟
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm font-normal text-MauveGray">
                        اگر بیش از ۳۰ روز (برای برخی کشورها ۴۵ روز) بسته شما نرسد و این مشکل ناشی از شما نباشد، ما ۱۰۰٪ مبلغ را به شما بازمی‌گردانیم.
                    </AccordionContent>
                </AccordionItem>
            </div>

            <div className="items-center py-4 transition-all hover:underline flex gap-3 cursor-pointer ">
                <RiShare2Line className="w-[0.85rem] h-[0.85rem] stroke-[0.05px] " /><p className="text-DeepBasalt dark:text-white/50 font-normal text-sm font-nnormal "> انتشار</p>
            </div>


        </Accordion>

    )
}

export default AccordionDetail