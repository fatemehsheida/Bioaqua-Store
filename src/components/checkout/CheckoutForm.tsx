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
import { createOrder } from './checkout';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';


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
    const today = new Date();

    const twoDaysLater = new Date(today);
    twoDaysLater.setDate(today.getDate() + 2);

    const formattedDate = twoDaysLater.toISOString()

    formData.orderItems = items.map((item) => {
      return { quantity: item.quantity, productSeller: item.bestSeller.id }
    })

    formData.deliveryDate = formattedDate;
    console.log(formData)
    // const cookieStore = await cookies();
    // const accessToken = cookieStore.get("accessToken")?.value;
    // const { accessToken } = await auth()
    console.log('creating order')

    const [status,result]=await createOrder(formData)
    if (status){
      console.log(result)
              if (result==200) {
                dispach(cartAction.RemoveCart({}))
                Swal.fire({
                  text: 'ثبت سفارش موفقیت آمیز بود',
                  timer: 2000,
                  icon: 'success',
                });
                router.push('/')
              }
              else{
                Swal.fire({
                  text: 'متاسفانه سفارش شما با خطا مواجه شد!',
                  timer: 2000,
                  icon: 'error',
                });
              }
              
    }
    else{
      Swal.fire({
        text: 'خطا در ارسال سفارش',
        timer: 2000,
        icon: 'error',
      });
    }
    if (Object.keys(errors).length > 0) return;
  }

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