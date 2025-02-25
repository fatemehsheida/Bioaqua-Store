import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { Order, OrderItemType } from '@/types/type'
import React, { useEffect, useState } from 'react'




const AccordionOrder = () => {
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                //TODO: fix headers
                const res = await fetch('http://localhost:8000/orders', { headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWM5M2VjYmQ4Mjg0ZTQ4NWViYzMzZSIsInJvbGUiOjMsImlhdCI6MTczOTgyNTI3MCwiZXhwIjoxNzQwNDMwMDcwfQ.OeWnS_y1qZFqUJtJJqv3y9MUleOResHvTmgQ-W8Y9Nw" } })
                const data = await res.json()
                setOrders(data.results)
            } catch (error) {
                console.error('Error fetching orders:', error)
            }
        }
        fetchOrders()
    }, [])


    const getStatus = (status: string) => {
        switch (status) {
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
        <Accordion type="single" collapsible className='w-full '>
            <AccordionItem value="item-1">
                <div className='flex items-center w-full justify-between px-6 '>

                    <div className='flex flex-row justify-between w-full pb-2'>
                        <AccordionTrigger className="flex gap-3 w-40  text-base font-normal ">
                            تاریخچه سفارشات
                        </AccordionTrigger>

                    </div>
                </div>
                <AccordionContent className="text-sm font-normal text-[#918e99] pb-0 pt-0 ">
                    <div className='right w-full h-full flex flex-col justify-start items-end py-2 px-6'>
                        <div className='w-full transition-all duration-700 gap-4 flex flex-col '>
                            <Link href="/profile/order">
                                {orders.map((order) => (
                                    <Link key={order.id} href={`/profile/order/${order.id}`}>
                                        <div className="border border-gray-200 my-4 rounded-md p-4 flex gap-9 hover:ring-2 hover:ring-gray-600/50 cursor-pointer">
                                            <h4 className="text-base font-medium">سفارش شماره: #{order.id.slice(-5)}</h4>
                                            <p className="text-sm text-gray-600  dark:text-slate-50/70 ">
                                                تاریخ: {new Date(order.deliveryDate).toLocaleDateString('fa-IR')}
                                            </p>
                                            <p className="text-sm text-gray-600  dark:text-slate-50/70 ">
                                                وضعیت: <span className="font-bold text-xs text-yellow-600">
                                                    {getStatus(order.orderStatus)}
                                                </span>
                                            </p>
                                            <p className="text-xs text-gray-600  dark:text-slate-50/70 ">
                                                جمع کل: {calculateTotal(order.orderItems)} تومان
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </Link>
                           
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion >
    )
}

export default AccordionOrder