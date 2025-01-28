import React from 'react'

const Footer = () => {
    return (
     
            <div className="md:flex flee-col justify-between md:w-full 
    items-start pr-8 md:pr-32 text-start gap-8 space-y-12 md:space-y-0">

            <div>

                <div className="mb-5 text-lg ">

                    <h1 className="font-bold">
                        درباره
                    </h1>
                </div>
                <button className="text-start text-base">
                    <h3>درباره ما</h3>
                    <h3>تماس با ما </h3>
                    <h3>عمده‌فروشی</h3>
                </button>
            </div>


            <div className="text-start mt-0">
                <div className="mb-5 text-lg">

                    <h1 className="font-bold">
                        خدمات مشتریان
                    </h1>
                </div>
                <button className="text-start text-base ">
                    <h3>سوالات متداول</h3>
                    <h3>جستجو </h3>
                    <h3>گواهی‌ها (FDA, ISO)</h3>
                    <h3>سیاست حفظ حریم خصوصی</h3>
                    <h3>ارسال و تحویل</h3>
                    <h3>سیاست بازپرداخت و مرجوعی</h3>
                </button>
            </div>



            <div>
                <div className="mb-5 text-lg ">
                    <h1 className="font-bold">اصلی </h1>
                </div>
                <button className="text-start text-base">
                    <h3>خانه </h3>
                    <h3>جدید </h3>
                    <h3>پرفروش‌ترین‌ها </h3>
                    <h3>مراقبت پوست</h3>
                    <h3>آرایش </h3>
                    <h3>همه محصولات</h3>
                    <h3>درباره </h3>
                </button>
            </div>
        </div>

            
           
    )
}

export default Footer