import React from 'react'
import CreateButton from '../createButton'

const CheckoutHeader = () => {
    return (
        <div className='w-full relative flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <span className='text-Silver text-sm font-normal dark:text-slate-200'>تسویه حساب سریع</span>

                <CreateButton
                src="paypal.svg"
                href="/payment"
                className='bg-Sunflower w-56 h-10 items-center flex justify-center rounded-sm px-20 shadow-md
                 shadow-slate-400 dark:shadow-Storm'
                />
    
            </div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-[1px] my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700 shadow-md shadow-slate-40066" />
                <div className="absolute px-2 -translate-x-1/2 bg-white  left-1/2 dark:bg-ShadowBlue text-sm">
                    یا
                </div>
            </div>
        </div>)
}

export default CheckoutHeader