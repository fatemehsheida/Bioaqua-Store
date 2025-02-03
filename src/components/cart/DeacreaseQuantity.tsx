'use client'
import { cartAction } from '@/lib/slice'
import { Product } from '@/types/type'
import React from 'react'
import { useDispatch } from 'react-redux'

interface IDeacreaseQuantityProps {
id: number
}

const DeacreaseQuantity = ({id}:IDeacreaseQuantityProps) => {
    const dispatch = useDispatch()
    const deacreaseQuantityHandler = () => {
        dispatch(cartAction.DecrementQuantity({
           id
        }))
    }
  return (
    <button onClick={deacreaseQuantityHandler} className=''>-</button>
  )
}

export default DeacreaseQuantity