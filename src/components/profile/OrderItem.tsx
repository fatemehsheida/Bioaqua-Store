import { Order, OrderItemType } from '@/types/type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const OrderItem = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        //TODO: fix headers
        const res = await fetch('http://localhost:8000/orders',{headers:{ "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWM5M2VjYmQ4Mjg0ZTQ4NWViYzMzZSIsInJvbGUiOjMsImlhdCI6MTczOTgyNTI3MCwiZXhwIjoxNzQwNDMwMDcwfQ.OeWnS_y1qZFqUJtJJqv3y9MUleOResHvTmgQ-W8Y9Nw"}})
        const data = await res.json()
        setOrders(data.results)
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
    <div className='left w-1/2 h-full flex flex-col justify-start items-start pt-10 pl-6'>
      <div className='w-full'>
        <div className='flex flex-row justify-between w-full pb-2'>
          <h3 className="text-lg font-medium mt-6 mb-2">تاریخچه سفارشات</h3>
        </div>
        <div className="gap-4 flex flex-col">
          {orders.map((order) => (
            <Link key={order.id} href={`/profile/order/${order.id}`}>
              <div className="border border-gray-200 rounded-md p-4 flex gap-9 hover:ring-2 hover:ring-gray-600/50 cursor-pointer">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderItem