import Link from 'next/link'
import React from 'react'

const Youtube = () => {
    return (
        <div className="Youtube py-9 flex flex-col justify-center items-center gap-8">
            <h1 className="text-4xl font-medium">
                ویدیوها در یوتیوب
            </h1>
            <span className="font-light text-xl text-wrap w-[770px] text-center">
                بیوآکوا در حوزه محصولات مراقبت از پوست گیاهی و آرایشی تخصص دارد. این برند به‌خودراه‌حل‌های تخصصی در درمان آکنه و جوش‌های سرسیاه، لایه‌برداری، ماسک‌ها، آبرسانی و موارد دیگر معروف است.
            </span>
            <button className="bg-[#2E2A39] text-[#C3C3AE] py-2 px-4 rounded-xl hover:scale-105">
                <Link href="https://www.youtube.com/results?search_query=bioaqua">
                    تماشا
                </Link>

            </button>
        </div>
    )
}

export default Youtube