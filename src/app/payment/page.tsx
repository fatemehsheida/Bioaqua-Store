'use client'
import OrderPayment from "@/components/payment/orderPayment"
import { useMediaQuery } from "react-responsive";

import PaymentForm from "@/components/payment/PaymentForm";
import Link from "next/link";
import AccordionPayment from "@/components/payment/AccordionPayment";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { createOrder } from "@/utils/apiClient";
import { cartAction } from "@/lib/slice";



const Payment = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items, totalQty } = useSelector((state: RootState) => state.cart);
  const [formData, setFormData] = useState<any>(null);
  
  const handleGoBack = () => {
    router.back(); 
  };
  useEffect(() => {
    const savedData = localStorage.getItem('checkoutFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const shipping = 1;
  const totalPrice = totalAmount + shipping;

  const handlePayment = async () => {
    if (!formData) return;
    const today = new Date();

    const twoDaysLater = new Date(today);
    twoDaysLater.setDate(today.getDate() + 2);

    const formattedDate = twoDaysLater.toISOString()
    const orderData = {
      ...formData,
      orderItems: items.map((item) => ({
        quantity: item.quantity,
        productSeller: item.bestSeller.id,
      })),
      deliveryDate: formattedDate,
    };

    const [status, result] = await createOrder(orderData);
    console.log(status,result)
    if (status && result) {
      dispatch(cartAction.RemoveCart({}));
      localStorage.removeItem('checkoutFormData');
      Swal.fire({
        text: 'پرداخت موفقیت آمیز بود!',
        icon: 'success',
        timer: 2000
      }).then(() => {
        router.push('/profile');
      });
    } else {
      Swal.fire({
        text: 'پرداخت ناموفق، لطفا مجددا تلاش کنید',
        icon: 'error',
        timer: 2000
      });
    }
  };
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className="px-20">
      <div className="flex items-center justify-between w-full  mb-16">
        <span className="text-Smokey text-left">BIOAQUA OFFICIAL STORE</span>
        <div
      className="flex items-center gap-2 justify-end cursor-pointer"
      onClick={handleGoBack}
    >
      <span className="text-impactful hover:underline text-xs font-normal">
        بازگشت به تسویه حساب
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-4 text-impactful"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </span>
    </div>

      </div>
      <div className="w-full h-fit flex lg:flex-row flex-col items-center">

        {isMobile ? (
          <AccordionPayment/>
        ) : (<div></div>)}
        {!isMobile ? (
          <OrderPayment/>
        ) : (<div></div>)}
        <PaymentForm
        totalAmount={totalPrice}
        onSubmit={handlePayment}
      />
      </div>
    </div>
  );
};

export default Payment;