'use client';

import { RxCross1 } from "react-icons/rx";
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { cartAction, IProductCart } from '@/lib/slice';
import QuantityBtn from "./QuantityBtn";
import { Product } from "@/types/type";
import { HiOutlineTrash } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { useRouter } from "next/navigation";


interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { items, totalQty } = useSelector((state: RootState) => state.cart);
  const prevTotalQty = useRef(totalQty);

  useEffect(() => {
    if (totalQty > prevTotalQty.current && !isOpen) {
      onClose();
    }
    prevTotalQty.current = totalQty;
  }, [totalQty, isOpen, onClose]);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 cart-overlay transition-all duration-1000" onClick={onClose}>
      <div className=" right-0 h-full w-[80%] max-w-md z-50 cart-modal bg-white transition duration-1000"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col">


          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4">

            {items.length === 0 ? (
              <>

                <div className="flex-col space-y-3">
                  <div className="flex items-center justify-end">

                    <button
                      onClick={onClose}
                      className="rounded p-2 hover:bg-gray-100"
                    >
                      <RxCross1 className="size-5" />

                    </button>
                  </div>

                </div>


                <div className="flex flex-col items-center group text-[#2E2A39] justify-between h-[94%] pt-24">
                  <div className="flex flex-col mb-4 gap-6 items-center pb-4 group text-lg font-normal">
                    <p className="text-center  ">سبد خرید شما خالی است</p>
                    <div className="bg-[#94d2bd] text-[#F7F9F3] px-1 py-2 items-center text-center w-48 h-12 rounded-xl flex justify-center hover:scale-x-105">
                      <Link href="/products">
                        <button>به خرید ادامه دهید</button>
                      </Link>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Link href="/login">
                        <span>حساب کاربری دارید؟</span>
                      </Link>
                      <span className="text-[#625F6A] text-sm">برای بررسی سریعتر <a href="/register" className="underline">وارد شوید</a></span>
                    </div>
                  </div>
                  <div className="group flex flex-col">
                    <div className="overflow-hidden rounded-xl w-80 h-80">
                      <img src="http://localhost:8000/uploads/image-1739028061106-873113164.png" className="w-80 h-80 rounded-xl object-cover group-hover:scale-105 " />
                    </div>
                    <div className="flex gap-3 py-3 items-center justify-end px-2 w-ful">
                      <GoChevronRight className="group-hover:scale-150 " />
                      <span className="text-left text-lg font-normal">پرفروش ترین ها</span>
                    </div>
                  </div>
                </div>


              </>
            ) : (
              <>


                <div className="flex-col space-y-3 ">
                  <div className="flex items-center justify-between">

                    <h2 className="text-xl font-noraml text-gray-600">سبد خرید ({totalQty})</h2>
                    <button
                      onClick={onClose}
                      className="rounded p-2 hover:bg-gray-100"
                    >
                      <RxCross1 />

                    </button>
                  </div>
                  <div className="flex justify-between text-sm items-center pb-4 text-gray-500  border-b">
                    <p >محصولات</p>
                    <p> مجموع</p>
                  </div>
                </div>




                {items.map((item: IProductCart) => (
                  <div
                    key={item.id}
                    className="mb-4 grid grid-cols-4 grid-rows-1 gap-8 items-center  border-b pb-4 group pt-2"
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

                <div className="fixed bottom-0 bg-white w-[417px] ">
                  <div className="border-t px-4">
                    <Accordion type="single" collapsible>
                      <div >
                        <AccordionItem value="item-1">
                          <AccordionTrigger className="flex gap-3">
                            <p className="text-sm font-normal text-gray-500">توضیحات سفارش</p>
                          </AccordionTrigger>
                          <AccordionContent className="text-sm font-normal text-[#918e99]">
                            <textarea id="CartDrawer-Note" rows={4}
                              className="w-full p-2 border border-gray-300 rounded-md resize-y focus:ring-2
                   focus:ring-blue-500" name="note" placeholder=""></textarea>

                          </AccordionContent>
                        </AccordionItem>
                      </div>



                    </Accordion>

                  </div>
                  <hr />
                  <div className=" p-4">
                    <div className="mb-4 flex justify-between text-lg font-noraml">
                      <span className="text-gray-700">جمع کل</span>
                      <span className="text-gray-500">{totalAmount}.000 تومان</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-gray-500 text-xs">مالیات و هزینه ارسال در زمان پرداخت محاسبه میگردد</span>
                    </div>
                    <button
                      className="w-full rounded-lg bg-[#94D2BD] py-3 text-white hover:scale-[101%] transition duration-500"
                      onClick={() => {
                        console.log('Checkout', items);
                        onClose();
                        router.push('/checkout')
                      }}
                    >
                      پرداخت
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>


        </div>
      </div>
    </div>
  );
};

export default Cart;