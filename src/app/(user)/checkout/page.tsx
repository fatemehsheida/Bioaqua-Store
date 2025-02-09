'use client'
import QuantityBtn from '@/components/cart/QuantityBtn';
import CheckoutAddress from '@/components/checkout/address';
import CheckoutButton from '@/components/checkout/CheckoutButton';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';
import CheckoutPayment from '@/components/checkout/CheckoutPayment';
import Contact from '@/components/checkout/Contact';
import Delivery from '@/components/checkout/delivery';
import SendingMethod from '@/components/checkout/SendingMethod';
import { cartAction, IProductCart } from '@/lib/slice';
import { RootState } from '@/lib/store';
import React, { useEffect, useRef } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";


const Checkout = () => {
  const dispatch = useDispatch();
  const { items, totalQty } = useSelector((state: RootState) => state.cart);
  const prevTotalQty = useRef(totalQty);

  useEffect(() => {
    prevTotalQty.current = totalQty;
  }, [totalQty]);

  const totalAmount = items.reduce((sum, item) => sum + Number(item.totalPrice), 0);
  console.log(totalAmount)
  const handleIncrement = (id: string) => {
    dispatch(cartAction.IncrementQuantity(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(cartAction.DecrementQuantity(id));
  };

  const handleRemove = (id: string) => {
    dispatch(cartAction.RemoveItem(id));
  };

  return (
    <div className='flex items-center w-full '>
      <div className='right bg-[#FFF6EE] w-1/2 '>
      {items.map((item: IProductCart) => (
                  <div
                    key={item.id}
                    className="mb-4 grid grid-cols-4 grid-rows-1 gap-8 items-center  border-b pb-4 group "
                  >
                    <Link href={`/products/${item.code}`} className="w-[100]">
                      <div className="col-span-1 pl-2">
                        <img src={item.images.main} alt={item.titleFa} className=" rounded-lg" />
                      </div>
                    </Link>
                    <div className="flex-col col-span-2 ">
                      <h3 className="font-noraml group-hover:underline rounded-lg">{item.titleFa}</h3>
                      <p className="text-gray-600 text-xs">
                      {item.bestSeller.lastPrice} تومان
                      </p>
                      <div className="flex gap-5 items-end">
                        <button className="mb-3 pb-2" onClick={() => handleRemove(item.id)}>

                          <HiOutlineTrash />
                        </button>
                        <QuantityBtn count={item.quantity} dec={() => handleDecrement(item.id)}
                          inc={() => handleIncrement(item.id)} setCount={undefined} />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 col-span-1">

                        {item.bestSeller.lastPrice * item.quantity}.000 تومان
                      </p>
                    </div>



                  </div>
                ))}

      </div>

      <div className='left bg-white flex flex-col justify-center items-start w-1/2'>
        <div className='w-full'>
          <div className='left flex flex-col justify-center items-center xl:w-2/3 sm:w-1/8 px-6 py-10'>
            <CheckoutHeader/>
            <div className='flex flex-col gap-8'>
             <Contact/>
              <Delivery/>
              <SendingMethod />
              <CheckoutPayment />
              <CheckoutAddress />
            </div>
            <CheckoutButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout