'use client'
import { cartAction } from '@/lib/slice'
import { Product } from '@/types/type'
import React from 'react'
import { useDispatch } from 'react-redux'

interface IAddToCartProps {
    product: Product,
    quantity: number,
    style: string
}

const AddToCart = ({product, quantity, style}:IAddToCartProps) => {
    const dispatch = useDispatch()
    const addToCartHandler = () => {
      console.log('add to cart utility',{product, quantity})
        dispatch(cartAction.addItemToCart({
            ...product,
            quantity,
            // totalPrice: product.price * quantity
            totalPrice: 100 * quantity
        }))
    }                                                   
  return (
    <button onClick={addToCartHandler} className={style}>اضافه کردن به سبد خرید</button>
  )
}

export default AddToCart