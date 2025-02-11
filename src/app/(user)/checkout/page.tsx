'use client'
import { RootState } from '@/lib/store';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import AccordionCheckout from '@/components/checkout/accordioncheckout';
import OrderCheckout from '@/components/checkout/OrderCheckout';


const Checkout = () => {
  const { items, totalQty } = useSelector((state: RootState) => state.cart);
  const prevTotalQty = useRef(totalQty);

  useEffect(() => {
    prevTotalQty.current = totalQty;
  }, [totalQty]);

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className='flex lg:flex-row flex-col items-center w-full '>

      {isMobile ? (
        <AccordionCheckout />
      ) : (<div></div>)}
      {!isMobile ? (
        <div className='right bg-[#FFF6EE] w-1/2 h-full flex flex-col justify-start items-end pt-10 px-6'>
          <OrderCheckout />
        </div>
      ) : (<div></div>)}
      <div className='left bg-white flex flex-col justify-center items-start lg:w-1/2 w-full'>
        <CheckoutForm items={items} totalQty={totalQty} />
      </div>

    </div>
  )
}

export default Checkout