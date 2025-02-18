// components/order/Example.tsx
'use client'

import { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import Addresorder from '@/components/order/Addresorder';
import UserInfo from '@/components/order/UserInfo';
import DeliveryOrder from '@/components/order/DeliveryOrder';
import { Order } from '@/types/type';
import { useParams } from 'next/navigation';

const Example = () => {
  const params = useParams<{id: string}>()
  const id = params.id
  const [order, setOrder] = useState<Order | null>(null)


  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch('http://localhost:8000/orders',{headers:{ "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWM5M2VjYmQ4Mjg0ZTQ4NWViYzMzZSIsInJvbGUiOjMsImlhdCI6MTczOTgyNTI3MCwiZXhwIjoxNzQwNDMwMDcwfQ.OeWnS_y1qZFqUJtJJqv3y9MUleOResHvTmgQ-W8Y9Nw"}})
        const data = await res.json()
        const foundOrder = data.results.find((o: Order) => o.id === id)
        setOrder(foundOrder)
      } catch (error) {
        console.error('Error fetching order:', error)
      }
    }
    
    if (id) fetchOrder()
  }, [id])

  const columns = useMemo<MRT_ColumnDef<Order['orderItems'][0]>[]>(
    () => [
      {
        accessorKey: 'productSeller.product.titleFa',
        header: 'نام محصول',
        size: 150,
      },
      {
        accessorKey: 'quantity',
        header: 'تعداد',
        size: 100,
      },
      {
        accessorKey: 'productSeller.price',
        header: 'قیمت واحد',
        size: 120,
        Cell: ({ cell }) => cell.getValue<number>().toLocaleString() + ' تومان',
      },
      {
        header: 'مجموع',
        size: 150,
        accessorFn: (row) => row.quantity * row.productSeller.price,
        Cell: ({ cell }) => cell.getValue<number>().toLocaleString() + ' تومان',
      },
    ],
    [],
  )

  const table = useMaterialReactTable({
    columns,
    data: order?.orderItems || [],
  })

  if (!order) return <div>Loading...</div>

  return (
    <div className='w-full bg-white flex flex-col items-center '>
      <div className='flex lg:flex-row flex-col items-center justify-evenly p-8 xl:px-28 w-full gap-6 flex-wrap'>
        <div><UserInfo/></div>
        <Addresorder address={order.shippingAddress} />
        <div><DeliveryOrder deliveryDate={order.deliveryDate} status={order.orderStatus} /></div>
      </div>
      <div className="w-screen py-4 px-6  " dir='ltr'>
        <MaterialReactTable table={table} />
      </div>
    </div>
  )
}

export default Example