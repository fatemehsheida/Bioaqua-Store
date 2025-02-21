import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'



const AccordionOrder = () => {
    return (
        <Accordion type="single" collapsible className='w-full '>
            <AccordionItem value="item-1">
                <div className='flex items-center w-full justify-between px-6 '>

                    <div className='flex flex-row justify-between w-full pb-2'>
                        <AccordionTrigger className="flex gap-3 w-40  text-base font-normal ">
                            تاریخچه سفارشات
                        </AccordionTrigger>

                    </div>
                </div>
                <AccordionContent className="text-sm font-normal text-[#918e99] pb-0 pt-0 ">
                    <div className='right w-full h-full flex flex-col justify-start items-end py-2 px-6 '>
                        <div className='w-full transition-all duration-700 gap-4 flex flex-col'>
                            <Link href="/profile/order">
                                <div className="border border-gray-200 rounded-md py-2 px-6 flex gap-16 justify-center items-center hover:ring-2 hover:ring-gray-600/50 cursor-pointer">
                                    <h4 className="text-base font-medium">سفارش شماره: #12345</h4>
                                    <div className='flex xl:flex-row flex-col'>
                                        <p className="text-sm text-gray-600">تاریخ:</p>
                                        <span className="text-sm text-gray-600">13 آبان 1403</span>
                                    </div>

                                    <div className='flex xl:flex-row flex-col'>
                                        <p className="text-sm text-gray-600">وضعیت:</p>
                                        <span className="font-bold text-green-600">تحویل داده شده</span>
                                    </div>
                                    <p className="text-sm text-gray-600">جمع کل: 500,000 تومان</p>
                                </div>
                            </Link>
                            <Link href="/profile/order">
                                <div className="border border-gray-200 rounded-md py-4 px-6 flex gap-16 justify-center items-center hover:ring-2 hover:ring-gray-600/50 cursor-pointer">
                                    <h4 className="text-base font-medium">سفارش شماره: #67890</h4>
                                    <div className='flex xl:flex-row flex-col'>
                                        <p className="text-sm text-gray-600">تاریخ:</p>
                                        <span className="text-sm text-gray-600">20 بهمن 1403</span>
                                    </div>

                                    <div className='flex xl:flex-row flex-col'>
                                        <p className="text-sm text-gray-600">وضعیت:</p>
                                        <span className="font-bold text-yellow-600">در حال پردازش</span>
                                    </div>
                                    <p className="text-sm text-gray-600">جمع کل: 800,000 تومان</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion >
    )
}

export default AccordionOrder