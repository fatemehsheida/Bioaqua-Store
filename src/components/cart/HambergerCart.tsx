'use client'
import { cartAction } from '@/lib/slice'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const HambergerCart  = ({open}:{open:boolean}) => {
  
  const { items, totalQty } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleIncrement = (id) => {
    dispatch(cartAction.IncrementQuantity(id))
  }

  const handleDecrement = (id) => {
    dispatch(cartAction.DecrementQuantity(id))
  }

  return (
<>
      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 z-40 transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>

          {items && items.length > 0 ? (
            <ul>
              {items.map((item) => (
                <li key={item.id} className="mb-4 border-b pb-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.name}</span>
                    <span>${item.price}</span>
                  </div>

                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    Total: ${item.totalPrice}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}

          <div className="mt-4 border-t pt-2">
            <p className="font-bold">Total Items: {totalQty}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HambergerCart 
