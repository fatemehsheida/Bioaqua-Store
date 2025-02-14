import Link from 'next/link'
import React from 'react'

const OrderItem = () => {
    return (
        <div className='left w-1/2 h-full flex flex-col justify-start items-start pt-10 pl-6'>
            <div className='w-full'>
                <div className='flex flex-row justify-between w-full pb-2'>
                    <h3 className="text-lg font-medium mt-6 mb-2">تاریخچه سفارشات</h3>
                    {/* <div className='flex gap-4 justify-center items-center'>
                        <button className='bg-transparent transition duration-500 hover:ring-2 hover:ring-[#94D2BD]
                                     text-gray-700 text-xs px-5 py-3 w-1/8 rounded-lg font-semibold'>مشاهده جزئیات</button>
                    </div> */}
                </div>
                <div className="gap-4 flex flex-col">
                    <Link href="/profile/order">
                        <div className="border border-gray-200 rounded-md p-4 flex gap-9 hover:ring-2 hover:ring-gray-600/50 cursor-pointer">
                            <h4 className="text-base font-medium">سفارش شماره: #12345</h4>
                            <p className="text-sm text-gray-600">تاریخ: 13 آبان 1403</p>
                            <p className="text-sm text-gray-600">وضعیت: <span className="font-bold text-green-600">تحویل داده شده</span></p>
                            <p className="text-sm text-gray-600">جمع کل: 500,000 تومان</p>
                        </div>
                    </Link>


                    <Link href="/profile/order">
                        <div className="border border-gray-200 rounded-md p-4 flex gap-9 hover:ring-2 hover:ring-gray-600/50 cursor-pointer">
                            <h4 className="text-base font-medium">سفارش شماره: #67890</h4>

                            <div className='flex xl:flex-row flex-col'>
                                <p className="text-sm text-gray-600">تاریخ:</p>
                                <span className="text-sm text-gray-600">20 بهمن 1403</span>
                            </div>

                            <div className='flex xl:flex-row flex-col'>
                                <p className="text-sm text-gray-600">وضعیت:</p>
                                <span className="font-bold text-yellow-600">در حال پردازش</span>
                            </div>

                            <p className="text-sm text-gray-600">جمع کل: 800,000 تومان</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderItem