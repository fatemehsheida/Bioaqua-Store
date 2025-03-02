'use client'
import React from 'react'
import QuantityBtn from './QuantityBtn'
import AddToCart from './AddToCart'

const ProductDetailCart = ({ product }) => {
    const [count, setCount] = React.useState<number>(1)
    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div> <QuantityBtn count={count} dec={dec} inc={inc} setCount={setCount} />
            <div className="w-[90%]  flex flex-col justify-center items-center gap-3 my-5">
                <AddToCart product={product} quantity={count} style={"w-full font-normal text-center bg-[#FFFFFF] my-1 text-[#2E2A39] text-sm rounded-lg py-2 ring-1 hover:ring-2 ring-[#2E2A39] "} />

                <button className="w-full font-normal text-center bg-[#94D2BD] text-[#FDFBF7] text-sm rounded-lg py-2 hover:scale-105 transition-all duration-500">همین حالا خرید کنید</button>
            </div></div>
    )
}

export default ProductDetailCart