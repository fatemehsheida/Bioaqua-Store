import React from 'react'

const CheckoutButton = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <button type='submit' className='bg-NavyBlue text-white w-full flex items-center justify-center py-2 my-2 rounded-lg text-base gap-1 shadow-md hover:scale-x-105 shadow-slate-400 dark:shadow-slate-600'>
                <span className='text-lg font-normal'>
                    پرداخت با
                </span>
                <img src="download.svg" />
            </button>



            <button type='submit' className='bg-Sunflower w-full py-2 my-2 rounded-lg shadow-md shadow-slate-400 dark:shadow-slate-600 text-lg font-normal hover:scale-x-105'>اکنون پرداخت کنید</button>
        </div>
    )
}

export default CheckoutButton