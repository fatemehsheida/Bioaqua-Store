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
    <div className='flex flex-col lg:flex-row items-stretch w-full min-h-screen bg-gray-100 dark:bg-[#21242d]'>

    {isMobile ? (
      <div className='w-full'>
        <AccordionCheckout />
      </div>
    ) : (
      <div className='right bg-[#FFF6EE] dark:bg-[#373941] lg:w-1/2 w-full flex flex-col justify-center items-center p-3 sticky top-0 h-screen'>
        <OrderCheckout />
      </div>
    )}
  
    <div className='left bg-white dark:bg-[#21242d] flex flex-col justify-center items-start lg:w-1/2 w-full p-6 lg:p-12'>
      <CheckoutForm items={items} totalQty={totalQty} />
    </div>
  
  </div>
  )
}

export default Checkout