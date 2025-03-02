'use client'

import { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import Addresorder from '@/components/order/Addresorder';
import UserInfo from '@/components/order/UserInfo';
import DeliveryOrder from '@/components/order/DeliveryOrder';
import { Order, UserInfoResponse } from '@/types/type';
import { useParams } from 'next/navigation';
import { getOrders, getUserData } from '@/utils/apiClient';
import { IoArrowBackOutline } from "react-icons/io5";
import Link from 'next/link';


const Orders = () => {
  const params = useParams<{id: string}>()
  const id = params.id
  const [order, setOrder] = useState<Order | null>(null)
  const [userData,setUserData] = useState<UserInfoResponse |null>(null)
 

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrders()
        const userdata = await getUserData()
               console.log({data})
               console.log({userdata})
        const foundOrder = data[1].results.find((o: Order) => o.id === id)
        setOrder(foundOrder)
        setUserData(userdata[1])
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
      <div className='pt-4 w-full flex justify-end px-7'>
      <Link href='/profile'>
      <IoArrowBackOutline className='size-7 opacity-75 cursor-pointer'/>
      </Link>
      </div>
      <div className='flex lg:flex-row flex-col items-center justify-evenly p-8 pt-0 xl:px-28 w-full gap-6 flex-wrap'>
        {userData&&
        <div><UserInfo firstName={userData?.user.firstName} lastName={userData?.user.lastName} email={userData?.user.email}/></div>
}
        <Addresorder address={order.shippingAddress} />
        <div><DeliveryOrder deliveryDate={order.deliveryDate} status={order.orderStatus} createAt={order.createdAt}/></div>
      </div>
      <div className="w-screen py-4 px-6  " dir='ltr'>
        <MaterialReactTable table={table} />
      </div>
    </div>
  )
}

export default Orders