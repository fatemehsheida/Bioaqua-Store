import Link from 'next/link'
import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Checkout = () => {
  return (
    <div className='flex items-center w-full '>
      <div className='right bg-[#FFF6EE] w-1/2 '>

      </div>
      <div className='left bg-white flex flex-col justify-center items-start w-1/2'>

        <div className='w-full'>
          <div className='left flex flex-col justify-center items-center xl:w-2/3 sm:w-1/8 px-6 py-10'>

            <div className='w-full relative flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center gap-3'>
                <span className='text-[#707070] text-sm font-normal'>تسویه حساب سریع</span>
                <button className='bg-[#FFC439] w-56 h-10 items-center flex justify-center rounded-sm px-20'>
                  <img src="paypal.svg" className='object-cover' />
                </button>
              </div>
              <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-[1px] my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
                <div className="absolute px-2 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900 text-sm">
                  یا
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-8'>
              <div className='w-full'>
                <div className='w-full flex justify-between text-[#272727]'>
                  <span className=' font-normal text-base'>تماس بگیرید</span>
                  <Link href="/login" >
                    <span className='underline text-xs text-[#929190]'>وارد شوید</span>
                  </Link>
                </div>
                <div className='w-full flex flex-col'>
                  <input type="email" name="email" id="email" placeholder='ایمیل' className='px-3 py-2 border border-slate-300 rounded-md  my-2' />
                  <div className='text-xs font-normal flex justify-end px-1 items-center gap-2'>
                    <label htmlFor="offers">اخبار و پیشنهادات را برای من ایمیل کنید</label>
                    <input type="checkbox" name="offers" id="offers" className='accent-[#605E5C]' />
                  </div>
                </div>
              </div>

              <div className='w-full'>
                <span>تحویل</span>
                <div className='w-full flex justify-between gap-2'>
                  <input type="text" name="lastname" id="lastname" placeholder='نام خانوادگی' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
                  <input type="text" name="firstname" id="firstname" placeholder='نام(اختیاری)' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
                </div>
                <div className='w-full relative'>
                  <button>
                    <IoIosSearch className='absolute items-center justify-end top-5 left-3 opacity-80 hover:opacity-100' />
                  </button>
                  <input type="text" placeholder='آدرس' className='w-full px-3 py-2 border border-slate-300 rounded-md  my-2' />
                </div>
                <input type="text" placeholder='آپارتمانو سوئیت و غیره (اختیاری)' className='w-full px-3 py-2 border border-slate-300 rounded-md  my-2' />
                <div className='w-full flex justify-between gap-2'>
                  <input type="text" name="postal" id="postal" placeholder='کد پستی' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
                  <input type="text" name="city" id="city" placeholder='شهر' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
                </div>
                <div className='w-full'>
                  <input type="text" name="phone" id="phone" placeholder='تلفن' className='w-full px-3 py-2 border border-slate-300 rounded-md  my-2' />
                </div>
                <div className='text-xs font-normal flex justify-end px-1 items-center gap-2'>
                  <label htmlFor="saveinfo" >این اطلاعات را برای دفعه بعد ذخیره کنید</label>
                  <input type="checkbox" name="saveinfo" id="saveinfo" className='accent-[#605E5C]'  />
                </div>
              </div>

              <div>
                <span>روش ارسال</span>

                <div className="flex flex-col group my-3">
                  <div className="inline-flex items-center border border-slate-300 rounded-t-lg py-2 px-3 group-checked:border-slate-800">
                    <label className="relative flex items-center cursor-pointer" htmlFor="html">
                      <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full
                   border border-slate-300 group-checked:border-slate-300 transition-all" id="html" />
                      <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100
                     transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      </span>
                    </label>
                    <div className='px-2'>
                      <label className="ml-2 text-slate-600 cursor-pointer text-xs font-normal" htmlFor="html">✈ حمل و نقل استاندارد قابل ردیاب</label>
                      <label className="ml-2 text-slate-600 cursor-pointer text-xs font-normal" htmlFor="html">(ارسال رایگان برای سفارش های بالای 20 تومان)</label>
                      <span className="ml-2 text-slate-950 cursor-pointer text-xs font-normal">150.000 تومان</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center border border-slate-300 rounded-b-lg py-2 px-3">
                    <label className="relative flex items-center cursor-pointer" htmlFor="react">
                      <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full 
                  border border-slate-300 checked:border-slate-300 transition-all" id="react" />
                      <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 
                    transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      </span>
                    </label>
                    <div className='px-2'>
                      <label className="ml-2 text-slate-600 cursor-pointer text-xs font-normal" htmlFor="react">⚡ ارسال سریعتر در زمان انتظار خود صرفه جویی کنید</label>
                      <span className="ml-2 text-slate-950 cursor-pointer text-xs font-normal">70.000 تومان</span>
                    </div>
                  </div>

                </div>
              </div>



              <div>
                <div className='flex flex-col justify-center items-start'>
                  <span>پرداخت</span>
                  <span className='text-xs font-normal text-[#707070]/80'>همه تراکنش ها امن و رمزگذاری شده است</span>
                </div>
             
                  <div className="flex  flex-col my-3">
                    <div className="inline-flex items-center border border-slate-300 rounded-t-lg py-2 px-3">
                      <label className="relative flex items-center cursor-pointer" htmlFor="paypal">
                        <input name="pay" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full
                   border border-slate-300 checked:border-slate-300 transition-all" id="paypal" />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100
                     transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                      </label>
                      <div className='flex '>
                        <label className="ml-2 text-slate-600 cursor-pointer text-sm px-2" htmlFor="paypal">paypal</label>
                        <div className=' flex items-center justify-center'>
                          <img src="paypal.svg" className='w-10 h-10' />
                          <img src="p paypal.webp" className='w-5 h-5' />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center border border-slate-300 rounded-b-lg py-2 px-3">
                      <label className="relative flex items-center cursor-pointer" htmlFor="otherpay">
                        <input name="pay" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full 
                  border border-slate-300 checked:border-slate-300 transition-all" id="otherpay" />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 
                    transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                      </label>
                      <label className="ml-2 text-slate-600 cursor-pointer text-sm px-2" htmlFor="otherpay">روش های پرداخت اضافی</label>
                    </div>
                  </div>
                
              </div>




              <div className='flex flex-col justify-center items-start'>
                <span>آدرس صورتحساب</span>
                <div className="flex  flex-col my-3 w-full">
                  <div className="inline-flex items-center border border-slate-300 rounded-t-lg py-2 px-3">
                    <label className="relative flex items-center cursor-pointer" htmlFor="address">
                      <input name="address" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full
                   border border-slate-300 checked:border-slate-300 transition-all" id="address" />
                      <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100
                     transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      </span>
                    </label>
                    <label className="ml-2 text-slate-600 cursor-pointer text-sm px-2" htmlFor="address">همان آدرس حمل و نقل</label>
                  </div>
                  <div className="inline-flex items-center border border-slate-300 rounded-b-lg py-2 px-3">
                    <label className="relative flex items-center cursor-pointer" htmlFor="otheraddress">
                      <input name="address" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full 
                  border border-slate-300 checked:border-slate-300 transition-all" id="otheraddress" />
                      <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 
                    transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      </span>
                    </label>
                    <label className="ml-2 text-slate-600 cursor-pointer text-sm px-2" htmlFor="otheraddress">از آدرس صورتحساب دیگری استفاده کنید</label>
                  </div>
                </div>
              </div>

            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <button className='bg-[#003087] text-white w-full flex items-center justify-center py-2 my-2 rounded-lg text-base gap-1'>
                <span>
                  پرداخت با
                </span>
                <img src="download.svg" />
              </button>



              <button className='bg-[#FFC439] w-full py-2 my-2 rounded-lg text-base'>اکنون پرداخت کنید</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout