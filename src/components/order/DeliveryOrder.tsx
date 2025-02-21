import React from 'react'



  //     "deliveryDate": "2025-02-12T15:02:29.448Z",
  //     "orderStatus": "pending",


  const DeliveryOrder = ({ deliveryDate, status }: { 
    deliveryDate: string, 
    status: string 
  }) => {
    const getStatusText = () => {
      switch(status) {
        case 'pending': return 'در حال پردازش';
        default: return status;
      }
    }
  
    return (
      <div className=''>
        <div className='relative w-full flex flex-col justify-center items-start pl-8 pr-4 text-wrap gap-2 text-[#434241]/80 ring-2
         ring-gray-500/40 rounded-lg mt-8 pt-4 hover:cursor-context-menu'>
          <span className='bg-white px-2 absolute -top-3 right-2 text-sm font-medium'>وضعیت سفارش</span>
          <div className='items-start flex flex-col justify-center py-2  gap-2 w-72'>
            <div className='flex gap-1 w-full'>
              <span className='text-sm font-semibold cursor-pointer w-full'>تاریخ تحویل</span>
              <span className='w-full text-sm'>
                {new Date(deliveryDate).toLocaleDateString('fa-IR')}
              </span>
            </div>
            <div className='flex gap-4 w-full'>
              <span className='col-span-2 text-sm font-semibold cursor-pointer w-2/5'>وضعیت سفارش</span>
              <span className='text-sm col-span-5 '>{getStatusText()}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default DeliveryOrder