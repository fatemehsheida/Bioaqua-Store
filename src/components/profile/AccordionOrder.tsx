import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



const AccordionOrder = () => {
    return (
        <Accordion type="single" collapsible className='w-full '>
            <AccordionItem value="item-1">
                <div className='flex items-center w-full justify-between px-6 '>

                    <div className='flex flex-row justify-between w-full pb-2'>
                        <AccordionTrigger className="flex gap-3 w-40  text-base font-normal ">
                            تاریخچه سفارشات
                        </AccordionTrigger>
                        <div className='flex gap-4 justify-center items-center'>
                            <button className='bg-transparent transition duration-500 hover:ring-2 hover:ring-[#94D2BD]
                     text-gray-700 text-xs px-5 py-3 w-1/8 rounded-lg font-semibold'>مشاهده جزئیات</button>
                        </div>
                    </div>
                </div>
                <AccordionContent className="text-sm font-normal text-[#918e99] pb-0 pt-0 ">
                    <div className='right w-full h-full flex flex-col justify-start items-end py-5 px-6 '>
                        <div className='w-full space-y-4 transition-all duration-700'>

                            <div className="border border-gray-200 rounded-md py-4 px-6 flex gap-16 justify-center items-center">
                                <h4 className="text-base font-medium">سفارش شماره: #12345</h4>
                                <p className="text-sm text-gray-600">تاریخ: 13 آبان 1403</p>
                                <p className="text-sm text-gray-600">وضعیت: <span className="font-bold text-green-600">تحویل داده شده</span></p>
                                <p className="text-sm text-gray-600">جمع کل: 500,000 تومان</p>
                            </div>

                            <div className="border border-gray-200 rounded-md py-4 px-6 flex gap-16 justify-center items-center">
                                <h4 className="text-base font-medium">سفارش شماره: #67890</h4>
                                <p className="text-sm text-gray-600">تاریخ: 20 بهمن 1403</p>
                                <p className="text-sm text-gray-600">وضعیت: <span className="font-bold text-yellow-600">در حال پردازش</span></p>
                                <p className="text-sm text-gray-600">جمع کل: 800,000 تومان</p>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionOrder