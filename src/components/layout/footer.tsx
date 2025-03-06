import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (

        <div className="md:flex flee-col justify-between md:w-full 
    items-start pr-8 md:pr-32 text-start gap-8 space-y-12 md:space-y-0 text-gray-800/70 ">

            <div>

                <div className="mb-5 text-lg dark:text-slate-300/80">

                    <h1 className="font-semibold">
                        درباره
                    </h1>
                </div>
                <button className="text-start text-sm font-normal  text-[#2E2A39]/40 space-y-2 dark:text-slate-300/50">
                <Link href="/aboutme">
                    <h3>درباره ما</h3>
                </Link>
                    <h3>تماس با ما </h3>
                    <h3>عمده‌فروشی</h3>
                </button>
            </div>


            <div className="text-start mt-0 dark:text-slate-300/80">
                <div className="mb-5 text-lg">

                    <h1 className="font-semibold">
                        خدمات مشتریان
                    </h1>
                </div>
                <button className="text-start text-sm space-y-2 font-normal text-[#2E2A39]/40 dark:text-slate-300/50">
                    <h3>سوالات متداول</h3>
                    <h3>جستجو </h3>
                    <h3>گواهی‌ها (FDA, ISO)</h3>
                    <h3>سیاست حفظ حریم خصوصی</h3>
                    <h3>ارسال و تحویل</h3>
                    <h3>سیاست بازپرداخت و مرجوعی</h3>
                </button>
            </div>



            <div className='dark:text-slate-300/80'>
                <div className="mb-5 text-lg ">
                    <h1 className="font-semibold">اصلی </h1>
                </div>
                <button className="text-start text-sm font-normal dark:text-slate-300/50 text-[#2E2A39]/40 space-y-2">
                    <h3>خانه </h3>
                    <h3>جدید </h3>
                    <h3>پرفروش‌ترین‌ها </h3>
                    <h3>مراقبت پوست</h3>
                    <h3>آرایش </h3>
                    <h3>همه محصولات</h3>
                </button>
            </div>
        </div>



    )
}

export default Footer