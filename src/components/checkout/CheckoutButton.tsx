import React from 'react'

const CheckoutButton = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <button className='bg-[#003087] text-white w-full flex items-center justify-center py-2 my-2 rounded-lg text-base gap-1 shadow-md shadow-slate-400'>
                <span className='text-lg font-normal'>
                    پرداخت با
                </span>
                <img src="download.svg" />
            </button>



            <button className='bg-[#FFC439] w-full py-2 my-2 rounded-lg shadow-md shadow-slate-400 text-lg font-normal hoveer:scale-105'>اکنون پرداخت کنید</button>
        </div>
    )
}

export default CheckoutButton