'use client'

import React from 'react'
import ShowCart from "@/components/payment/showCart"
import HeaderPayment from '@/components/payment/HeaderPayment';
import { useState } from 'react';


const LeftPayment = () => {
  const [showCard, setShowCard] = useState(true);

  return (

      <div className="bg-white px-8 pb-6 rounded-b shadow-lg w-full  ">
        {/* <div className="mb-2">
          <img src="https://preview.cruip.com/mosaic/images/user-64-13.jpg" className='w-16 h-16 -mt-8 inline-flex rounded-full' 
          alt="User"/>
          </div> */}
      <HeaderPayment/>            
      <div className="flex justify-center mb-16">
              <div className="relative flex w-full p-1 bg-gray-50 rounded">
                <span className="absolute inset-0 m-1 pointer-events-none">
                  <span className={`absolute inset-0 w-1/2 bg-white rounded border shadow-sm transition-transform duration-150 ${showCard ? 'translate-x-0' : 'translate-x-full'
                    }`} />
                </span>
                <button
                  onClick={() => setShowCard(true)}
                  className="relative flex-1 text-sm font-medium p-1"
                >
                  Pay With Card
                </button>
                <button
                  onClick={() => setShowCard(false)}
                  className="relative flex-1 text-sm font-medium p-1"
                >
                  Pay With PayPal
                </button>
              </div>
            </div>
        {showCard ? (
          <ShowCart/>
        ) : (
          <div>
            <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">
              Pay with PayPal - $253.00
            </button>
            <p className="text-sm text-gray-500 text-center italic mt-2">
              Bioaqua
            </p>
          </div>
        )}
      </div>

  )
}

export default LeftPayment