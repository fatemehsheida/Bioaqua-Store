import React, { useState } from 'react'
import CheckoutAddress from '@/components/checkout/address';
import CheckoutButton from '@/components/checkout/CheckoutButton';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';
import CheckoutPayment from '@/components/checkout/CheckoutPayment';
import Contact from '@/components/checkout/Contact';
import Delivery from '@/components/checkout/delivery';
import SendingMethod from '@/components/checkout/SendingMethod';
import {OrderRequest} from '@/types/type'


const CheckoutForm = () => {
  const [orderRequest, setOrderRequest] = useState<OrderRequest>({
    shippingAddress: {
      street: '',
      city: '',
      postalCode: '',
      location: [0, 0], 
    },
    deliveryDate: '',
    orderItems: [], 
  });
  bezar begam gpt bezane 
  const handleSubmit = (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target)
    console.log(formData)

  }
  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit}>

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
                  
      </form>
        </div>
  )
}

export default CheckoutForm