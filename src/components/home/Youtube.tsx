import Link from 'next/link'
import React from 'react'
import CreateButton from '../createButton'

const Youtube = () => {
    return (
        <div className="Youtube py-9 px-4 flex flex-col items-center gap-6 sm:gap-8 text-center">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800/90 dark:text-slate-200">
                ویدیوها در یوتیوب
            </h1>
            
            <span className="font-normal text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl text-DarkPurple/70 dark:text-slate-300/60 leading-relaxed">
                بیوآکوا در حوزه محصولات مراقبت از پوست گیاهی و آرایشی تخصص دارد. این برند به‌خودراه‌حل‌های تخصصی در درمان آکنه و جوش‌های سرسیاه، لایه‌برداری، ماسک‌ها، آبرسانی و موارد دیگر معروف است.
            </span>
           
            <CreateButton
                text="تماشا"
                href="https://www.youtube.com/results?search_query=bioaqua"
                className="bg-DarkPurple text-Sage py-2 px-6 rounded-xl text-base sm:text-lg font-medium transition-transform duration-200 hover:scale-105 hover:brightness-110"
            />
        </div>
    )
}

export default Youtube
