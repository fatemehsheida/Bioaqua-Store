'use client'
import { cartAction, IProductCart } from '@/lib/slice';
import { RootState } from '@/lib/store';
import React, { useEffect, useRef } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import { PiAirplaneTiltLight, PiHeartThin, PiUploadSimpleThin } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useMediaQuery } from 'react-responsive';
import CheckoutForm from '@/components/checkout/CheckoutForm';


const Checkout = () => {
  const { items, totalQty } = useSelector((state: RootState) => state.cart);
  const prevTotalQty = useRef(totalQty);

  useEffect(() => {
    prevTotalQty.current = totalQty;
  }, [totalQty]);

  const totalAmount = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);
  console.log(totalAmount)
  const shipping = Number(1)
  const totalPrice = Number(totalAmount - shipping)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className='flex lg:flex-row flex-col items-center w-full '>

      {isMobile ? (

        <Accordion type="single" collapsible className='w-full bg-[#F6F6F6]'>
          <AccordionItem value="item-1 w-full ">
            <div className='flex items-center w-full justify-between px-6'>
              <AccordionTrigger className="flex gap-3 w-20  text-base font-normal">
                سفارشات
              </AccordionTrigger>
              <span className="text-gray-500">{totalAmount}.000 تومان</span>

            </div>
            <AccordionContent className="text-sm font-normal text-[#918e99] pb-0 pt-0 ">
              <div className='right bg-[#FFF6EE] w-full h-full flex flex-col justify-start items-end pt-10 px-6'>
                <div className='w-full'>

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
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (<div></div>)}
      {!isMobile ? (
        <div className='right bg-[#FFF6EE] w-1/2 h-full flex flex-col justify-start items-end pt-10 px-6'>

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
        </div>
      ) : (<div></div>)}
      <div className='left bg-white flex flex-col justify-center items-start lg:w-1/2 w-full'>
        <CheckoutForm/>
      </div>

    </div>
  )
}

export default Checkout