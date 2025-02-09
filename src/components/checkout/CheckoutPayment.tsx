import React from 'react'

const CheckoutPayment = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-start'>
                <span>پرداخت</span>
                <span className='text-sm font-normal text-[#707070]/80'>همه تراکنش ها امن و رمزگذاری شده است</span>
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
                        <label className="ml-2 text-slate-600 cursor-pointer text-base px-2" htmlFor="paypal">paypal</label>
                        <div className=' flex items-center justify-center'>
                            {/* <img src="paypal.svg" className='w-10 h-10' />
                            <img src="p paypal.webp" className='w-5 h-5' /> */}
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
                    <label className="ml-2 text-slate-600 cursor-pointer text-base px-2" htmlFor="otherpay">روش های پرداخت دیگر</label>
                </div>
            </div>

        </div>
    )
}

export default CheckoutPayment