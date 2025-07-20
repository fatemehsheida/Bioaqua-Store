"use client"
import { Order, OrderItemType } from '@/types/type'
import { getOrders } from '@/utils/apiClient'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Ordera = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders()
        console.log({data})
        setOrders(data[1].results)
      } catch (error) {
        console.error('Error fetching orders:', error)
      }
    }
    fetchOrders()
  }, [])


  const getStatus = (status: string) => {
    switch(status) {
      case 'pending': return 'در حال پردازش';
      default: return status;
    }
  }

  const calculateTotal = (items: OrderItemType[]) => {
    return items.reduce((acc, item) => 
      acc + (item.productSeller.price * item.quantity), 0
    ).toLocaleString()
  }

  return (
    <div className='bg-slate-100 w-full mx-auto px-12 h-full flex flex-col justify-start items-start pt-10 pl-6 mb-5'>
      <div className='w-full'>
        <div className='flex flex-row justify-between w-full pb-2'>
          <h3 className="text-lg font-bold mt-6 mb-8">تاریخچه سفارشات</h3>
        </div>
        <div className="gap-4 flex flex-col w-full">
          {orders.map((order) => (
            <Link key={order.id} href={`/profile/order/${order.id}`}>
              <div className="border border-gray-200 rounded-md p-4 flex gap-9 hover:ring-2 hover:ring-gray-600/50 cursor-pointer w-full">
              <div className='w-full flex justify-between px-7'>
                <h4 className="text-base font-medium">سفارش شماره: #{order.id.slice(-5)}</h4>
                <p className="text-sm text-gray-600">
                  تاریخ: {new Date(order.deliveryDate).toLocaleDateString('fa-IR')}
                </p>
                <p className="text-sm text-gray-600">
                  وضعیت: <span className="font-bold text-xs text-yellow-600">
                    {getStatus(order.orderStatus)}
                  </span>
                </p>
                <p className="text-xs text-gray-600">
                  جمع کل: {calculateTotal(order.orderItems)} تومان
                </p>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ordera