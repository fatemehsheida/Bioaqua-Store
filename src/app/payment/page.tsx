'use client'
import OrderPayment from "@/components/payment/orderPayment"
import { useMediaQuery } from "react-responsive";

import PaymentForm from "@/components/payment/PaymentForm";
import Link from "next/link";
import AccordionPayment from "@/components/payment/AccordionPayment";



const Payment = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className="px-20">
      <div className="flex items-center justify-between w-full  mb-16">
        <span className="text-[#1a1d215a] text-left">BIOAQUA OFFICIAL STORE</span>
        <Link href="/checkout">
          <div className="flex items-center gap-2 justify-end cursor-pointer">
            <span className="text-[#612FFF] hover:underline text-xs font-normal">بازگشت به تسویه حساب</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              className="size-4 text-[#612FFF]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full h-fit flex lg:flex-row flex-col items-center">

        {isMobile ? (
          <AccordionPayment/>
        ) : (<div></div>)}
        {!isMobile ? (
          <OrderPayment/>
        ) : (<div></div>)}
        <PaymentForm />
      </div>
    </div>
  );
};

export default Payment;