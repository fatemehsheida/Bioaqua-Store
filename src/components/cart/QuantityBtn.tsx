'use client'
import React from 'react'
import IncreaseQuantity from './IncreaseQuantity'
import { FaMinus, FaPlus } from "react-icons/fa6";

const QuantityBtn = ({count, dec, inc, setCount}) => {
    

    return (
        <div className='flex flex-col py-2'>
            <p className='text-sm font-normal text-[#5F5C68]'>تعداد</p>
            <div className='flex bg-white border justify-between items-center text-sm
             border-[#8C8A92] p-1 gap-2 rounded-lg w-fit text-[#2E2A39] font-semibold'>
                <button onClick={dec} className='p-3'><FaMinus className='size-2' /></button>
                <input type="text" value={count} onChange={(e)=>setCount(e.target.value)} className='bg-transparent w-10 text-center' />
                <button onClick={inc} className='p-3'><FaPlus className='size-2'/></button>
            </div>
        </div>
    )
}

export default QuantityBtn