import { Order } from '@/types/type'
import React from 'react'



//  "shippingAddress": {
//         "street": "dfsg",
//         "city": "fd",
//         "postalCode": "dfsgdfsg",
//         "location": [
//             1,
//             1
//         ]
//     },


const Addresorder = ({ address }: { address: Order['shippingAddress'] }) => {
    return (
      <div className=''>
        <div className='relative w-full flex flex-col justify-center items-start pl-8 pr-4 text-wrap gap-2 text-[#434241]/80 ring-2
         ring-gray-500/40 rounded-lg mt-8 pt-4 hover:cursor-context-menu'>
          <span className='bg-white px-2 absolute -top-3 right-2 text-sm font-medium'>نشانی</span>
          <div className=' items-start flex flex-col justify-center py-2  gap-2 w-72'>
            <div className='flex gap-4'>
              <span className='text-sm font-semibold cursor-pointer'>آدرس</span>
              <span className='w-full text-sm'>{address.street}، {address.city}</span>
            </div>
            <div className='flex gap-4'>
              <span className='text-sm font-semibold cursor-pointer'>کد پستی</span>
              <span className='text-sm underline cursor-pointer hover:text-[#434241]/90'>{address.postalCode}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Addresorder