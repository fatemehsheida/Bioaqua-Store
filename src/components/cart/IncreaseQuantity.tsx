'use client'
import { cartAction } from '@/lib/slice'
import { Product } from '@/types/type'
import React from 'react'
import { useDispatch } from 'react-redux'

interface IIncreaseQuantityProps {
id: number
}

const IncreaseQuantity = ({id}:IIncreaseQuantityProps) => {
    const dispatch = useDispatch()
    const increaseQuantityHandler = () => {
        dispatch(cartAction.IncrementQuantity({
           id
        }))
    }
  return (
    <button onClick={increaseQuantityHandler} className=''>+</button>
  )
}

export default IncreaseQuantity