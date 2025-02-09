import React from 'react'
import CheckoutAddress from '@/components/checkout/address';
import CheckoutButton from '@/components/checkout/CheckoutButton';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';
import CheckoutPayment from '@/components/checkout/CheckoutPayment';
import Contact from '@/components/checkout/Contact';
import Delivery from '@/components/checkout/delivery';
import SendingMethod from '@/components/checkout/SendingMethod';



const CheckoutForm = () => {
  return (
    <div className='w-full'>
          <div className='left flex flex-col justify-center items-center xl:w-2/3 sm:w-1/8 px-6 py-10'>
            <CheckoutHeader />
            <div className='flex flex-col gap-8'>
              <Contact />
              <Delivery />
              <SendingMethod />
              <CheckoutPayment />
              <CheckoutAddress />
            </div>
            <CheckoutButton />
          </div>
        </div>
  )
}

export default CheckoutForm