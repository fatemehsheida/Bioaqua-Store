'use client'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import Link from 'next/link'

const AccordionPayment = () => {
    const { items } = useSelector((state: RootState) => state.cart)
    const totalAmount = items.reduce((sum, item) => sum + Number(item.totalPrice), 0)
    const shipping = 1
    const totalPrice = totalAmount + shipping

    return (
        <Accordion type="single" collapsible className='w-full bg-[#F6F6F6] mb-6'>
            <AccordionItem value="item-1">
                <div className='flex items-center justify-between px-6'>
                    <AccordionTrigger className="text-base font-normal">
                        خلاصه سفارش
                    </AccordionTrigger>
                    <span className="text-[#1A1D21] font-medium">{totalPrice.toLocaleString()} تومان</span>
                </div>

                <AccordionContent className="pb-0">
                    <div className="px-6 bg-[#f4f4f4c0]">
                        <div className="flex flex-col justify-between h-full w-full">
                            <div className="flex flex-col items-center w-full">
                                {items.map((item) => (
                                    <div key={item.id} className="mt-3 w-full">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#6C747F] text-sm">{item.titleFa}</span>
                                            <div className="flex items-center gap-0.5 text-sm">
                                                <span>{item.quantity}</span>
                                                <span>×</span>
                                            </div>
                                        </div>
                                        <span className="text-[#42474D] flex justify-end text-sm">
                                            {item.totalPrice.toLocaleString()} تومان
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="my-4">
                                <hr className="opacity-15" />
                                <div className="my-3 flex justify-between items-center text-sm">
                                    <span className="text-[#6C747F]">جمع جزء</span>
                                    <span className="text-[#6C747F]">{totalAmount.toLocaleString()}.000 تومان</span>
                                </div>
                                <hr className="opacity-15" />
                                <div className="my-3 flex justify-between items-center text-sm">
                                    <span className="text-[#6C747F]">حمل و نقل</span>
                                    <span className="text-[#6C747F]">{shipping.toLocaleString()}.000 تومان</span>
                                </div>
                                <hr className="opacity-15" />
                                <div className="my-3 flex justify-between items-center font-medium">
                                    <span className="text-[#42474D]">مجموع قابل پرداخت</span>
                                    <span className="text-[#1A1D21]">{totalPrice.toLocaleString()}.000 تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionPayment