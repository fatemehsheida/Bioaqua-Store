'use client'
import React, { useEffect, useRef, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IProductCart } from '@/lib/slice';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import Link from "next/link";
import clsx from 'clsx';
import CreateButton from '../createButton';


const AccordionCheckout = () => {

    const { items, totalQty } = useSelector((state: RootState) => state.cart);
    const prevTotalQty = useRef(totalQty);

    useEffect(() => {
        prevTotalQty.current = totalQty;
    }, [totalQty]);

    const totalAmount = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);
    console.log(totalAmount)
    const shipping = Number(1)
    const totalPrice = Number(totalAmount - shipping)
    const [inputValue, setInputValue] = useState("");


    return (
        <Accordion type="single" collapsible className='w-full bg-SmokeWhite dark:bg-Midnight'>
            <AccordionItem value="item-1 w-full ">
                <div className='flex items-center w-full justify-between px-6'>
                    <AccordionTrigger className="flex gap-3 w-20  text-base font-normal">
                        سفارشات
                    </AccordionTrigger>
                    <span className="text-gray-500 dark:text-slate-200">{totalAmount}.000 تومان</span>

                </div>
                <AccordionContent className="text-sm font-normal  pb-0 pt-0 ">
                    <div className='right bg-PearlBlush dark:bg-Steel w-full h-full flex flex-col justify-start items-end pt-10 px-6'>
                        <div className='w-full'>

                            {items.map((item: IProductCart) => (
                                <div
                                    key={item.id}
                                    className="mb-4 flex  gap-8 items-center group "
                                >
                                    <div className='flex justify-start items-start gap-4 w-full'>
                                        <div className='flex items-center justify-between w-full'>
                                            <p className="text-gray-600 dark:text-slate-200/80 text-sm font-normal">
                                                {item.bestSeller.lastPrice * item.quantity}.000 تومان
                                            </p>
                                            <h3 className="font-noraml group-hover:underline rounded-lg text-base">{item.titleFa}</h3>
                                        </div>
                                        <div className='relative w-20 h-20'>
                                            <Link href={`/products/${item.code}`} className="w-20 h-20">
                                                <div className="col-span-1 pl-2">
                                                    <img src={item.images.main} alt={item.titleFa} className=" rounded-lg" />
                                                </div>
                                            </Link>
                                            <div className="absolute -right-2 -top-2 text-white rounded-full bg-Taupe px-1.5 pt-1 pb-0.5
       text-xs font-normal flex items-center justify-center">
                                                {item.quantity}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className='w-full flex justify-between items-center gap-3'>
                                <CreateButton
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    text="اعمال شود"
                                    href="/"
                                    className={clsx(
                                        "w-36 rounded-md focus:outline-none focus:ring-2 focus:ring-Flint py-2 px-4 text-sm font-normal",
                                        {
                                            "bg-Amber text-Onyx": inputValue.trim(),
                                            "bg-Blush text-Granite border-PeachFuzz border": !inputValue.trim(),
                                        }
                                    )}
                                 />
                            
                                <input type="text" placeholder='کد تخفیف' className='w-full text-black bg-transparent rounded-md ring-1
                                ring-PeachFuzz py-2 px-4 focus:outline-none focus:ring-2 focus:ring-Flint dark:text-slate-200' onChange={(e) => setInputValue(e.target.value)} />
                            </div>

                            <div className='w-full my-9 flex flex-col gap-2'>
                                <div className='w-full flex justify-between items-center'>
                                    <span className="text-xs font-medium text-gray-500 dark:text-slate-200">{totalAmount}.000 تومان</span>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-sm font-medium text-Charcoal dark:text-slate-200/60'>({totalQty})مورد </span>
                                        <span className='text-base font-medium'>.جمع محصولات</span>
                                    </div>                                </div>

                                <div className='w-full flex justify-between items-center'>
                                    <span className="text-xs font-medium text-gray-500 dark:text-slate-200">{shipping}.000 تومان</span>
                                    <span className='text-base font-medium'>حمل و نقل</span>
                                </div>

                                <div className='w-full flex justify-between items-center'>
                                    <span className="text-xs font-medium text-gray-500 dark:text-slate-200">{totalPrice}.000 تومان</span>
                                    <span className='text-base font-normal'>جمع کل</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionCheckout