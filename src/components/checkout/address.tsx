import React from 'react'

const CheckoutAddress = () => {
    return (
        <div className='flex flex-col justify-center items-start'>
            <span className='text-lg font-normal'>آدرس صورتحساب</span>
            <div className="flex  flex-col my-3 w-full">
                <div className="inline-flex items-center border border-slate-300 rounded-t-lg py-2 px-3 has-[:checked]:border-slate-800">
                    <label className="relative flex items-center cursor-pointer" htmlFor="address">
                        <input name="address" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full
       border border-slate-300 checked:border-slate-300 transition-all" id="address" />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100
         transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                    </label>
                    <label className="ml-2 text-slate-600 dark:text-white cursor-pointer text-base px-2" htmlFor="address">همان آدرس حمل و نقل</label>
                </div>
                <div className="inline-flex items-center border border-slate-300 rounded-b-lg py-2 px-3 has-[:checked]:border-slate-800">
                    <label className="relative flex items-center cursor-pointer" htmlFor="otheraddress">
                        <input name="address" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full 
      border border-slate-300 checked:border-slate-300 transition-all" id="otheraddress" />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 
        transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                    </label>
                    <label className="ml-2 text-slate-600 dark:text-white cursor-pointer text-base px-2" htmlFor="otheraddress">از آدرس صورتحساب دیگری استفاده کنید</label>
                </div>
            </div>
        </div>
    )
}

export default CheckoutAddress