import React, { useState } from 'react'
import CheckoutAddress from '@/components/checkout/address';
import CheckoutButton from '@/components/checkout/CheckoutButton';
import CheckoutHeader from '@/components/checkout/CheckoutHeader';
import CheckoutPayment from '@/components/checkout/CheckoutPayment';
import Contact from '@/components/checkout/Contact';
import Delivery from '@/components/checkout/delivery';
import SendingMethod from '@/components/checkout/SendingMethod';
import { OrderRequest } from '@/types/type'
import Swal from 'sweetalert2';
import { FormContext } from './FormContext';
import { cartAction, IProductCart } from '@/lib/slice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { createOrder } from '@/utils/apiClient';


const CheckoutForm = ({ items, totalQty }: { items: IProductCart[], totalQty: number }) => {

  const [formData, setFormData] = useState<OrderRequest>({
    shippingAddress: {
      street: '',
      city: '',
      postalCode: '',
      location: [1, 1],
    },
    deliveryDate: '',
    orderItems: [],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispach = useDispatch()
  const router = useRouter()
  const validateField = (fieldPath: string, value: string) => {
    const newErrors = { ...errors };
    if (!value.trim()) {
      newErrors[fieldPath] = 'این فیلد الزامی است';
    } else {
      delete newErrors[fieldPath];
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (Object.keys(errors).length > 0) return;

  localStorage.setItem('checkoutFormData', JSON.stringify(formData));
  router.push('/payment');
};

  return (
    <FormContext.Provider value={{ formData, setFormData, errors, validateField }}>
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
    </FormContext.Provider>
  )
}

export default CheckoutForm