import React from 'react'
import CreateButton from '../createButton'

const CheckoutButton = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
             <CreateButton
                type='submit'
                src="download.svg"
                text='پرداخت با'
                href="/payment"
               className='bg-NavyBlue flex-row-reverse text-white w-full flex items-center justify-center py-2 my-2 rounded-lg
             text-base gap-1 shadow-md hover:scale-x-105 shadow-slate-400 dark:shadow-slate-600'
                />

                <CreateButton
                    type='submit'
                    text='اکنون پرداخت کنید'
                    href="/payment"
                   className='bg-Sunflower w-full py-2 my-2 rounded-lg shadow-md shadow-slate-400 dark:shadow-slate-600 text-lg font-normal 
                    hover:scale-x-105'
                />
        </div>
    )
}

export default CheckoutButton