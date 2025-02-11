'use client'
import React, { useEffect, useRef } from 'react'
import { IProductCart } from '@/lib/slice';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';
import Link from "next/link";



const OrderCheckout = () => {
    const { items, totalQty } = useSelector((state: RootState) => state.cart);
    const prevTotalQty = useRef(totalQty);

    useEffect(() => {
        prevTotalQty.current = totalQty;
    }, [totalQty]);

    const totalAmount = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);
    console.log(totalAmount)
    const shipping = Number(1)
    const totalPrice = Number(totalAmount - shipping)


    return (
        <div className='xl:w-3/4 sm:w-1/8'>

            {items.map((item: IProductCart) => (
                <div
                    key={item.id}
                    className="mb-4 flex  gap-8 items-center group "
                >
                    <div className='flex justify-start items-start gap-4 w-full'>
                        <div className='flex items-center justify-between w-full'>
                            <p className="text-gray-600 text-sm font-normal">
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
                            <div className="absolute lg:bottom-16 xl:left-[58px] lg:left-12 text-white rounded-full bg-[#706C69] px-2 pt-1
         text-xs font-normal flex items-center justify-center">
                                {item.quantity}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className='w-full flex justify-between items-center gap-3'>
                <button className='w-36 bg-[#FFF1E4] border-[#FDD8D8] border py-2 px-4 text-sm font-normal'>اعمال شود</button>
                <input type="text" placeholder='کد تخفیف' className='w-full bg-transparent border-[#FDD8D8] border py-2 px-4' />
            </div>

            <div className='w-full my-9 flex flex-col gap-2'>
                <div className='w-full flex justify-between items-center'>
                    <span className="text-xs font-medium text-gray-500">{totalAmount}.000 تومان</span>
                    <span className='text-base font-medium'>جمع محصولات</span>
                </div>

                <div className='w-full flex justify-between items-center'>
                    <span className="text-xs font-medium text-gray-500">{shipping}.000 تومان</span>
                    <span className='text-base font-medium'>حمل و نقل</span>
                </div>

                <div className='w-full flex justify-between items-center'>
                    <span className="text-xs font-medium text-gray-500">{totalPrice}.000 تومان</span>
                    <span className='text-base font-normal'>جمع کل</span>
                </div>
            </div>
        </div>
    )
}

export default OrderCheckout