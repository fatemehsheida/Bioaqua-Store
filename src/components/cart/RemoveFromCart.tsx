'use client'
import { cartAction } from '@/lib/slice'
import { Product } from '@/types/type'
import React from 'react'
import { useDispatch } from 'react-redux'
import { PiTrash } from "react-icons/pi";

interface IRemoveFromCartProps {
  id: number,
  quantity: number,
}

const RemoveFromCart = ({ id, quantity }: IRemoveFromCartProps) => {
  const dispatch = useDispatch()
  const removeFromCartHandler = () => {
    dispatch(cartAction.removeItemFromCart({
      id,
      quantity,
      // totalPrice: product.price * quantity
      totalPrice: 100 * quantity
    }))
  }
  return (
    <button onClick={removeFromCartHandler} className=""><PiTrash /></button>
  )
}

export default RemoveFromCart