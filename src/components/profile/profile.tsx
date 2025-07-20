"use client"
import { Order, UserInfoResponse } from '@/types/type';
import { getOrders, getUserData } from '@/utils/apiClient';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaCakeCandles } from 'react-icons/fa6'
import { IoChevronDown } from "react-icons/io5";
import CreateButton from '../createButton';

const ProfileUser = () => {
    const [userData, setUserData] = useState<UserInfoResponse | null>(null)
    const [order, setOrder] = useState<Order | null>(null)
    const [status, setStatus] = useState<Order[]>([])

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const userdata = await getUserData()
                const data = await getOrders()
                console.log({ data })
                const foundOrder = data[1].results.find((o: Order) => o.id)
                setOrder(foundOrder)
                console.log({ setOrder })
                console.log({ foundOrder })


                const foundStatus = data[1].results
                setStatus(foundStatus)
                console.log({ foundStatus })
                console.log({ setStatus })
                console.log({ status })

                setUserData(userdata[1])
            } catch (error) {
                console.error('Error fetching order:', error)
            }
        }
        fetchOrder()
    }, [])

    const statusTranslations: { [key: string]: string } = {
        pending: 'در حال پردازش ',
        processing: 'در حال انجام',
        delivered: 'تحویل داده شده',
        cancelled: 'لغو شده',
        completed: 'تکمیل شده'
    };



    console.log({ userData })
    return (
        <div className='right flex flex-col justify-center items-start lg:w-3/5 w-full my-10'>


            <div className='grid lg:grid-cols-5 grid-cols-6 justify-center items-start object-cover h-56 lg:h-64 '>
                <img src="cute_profile.jpg" className='md:w-64 md:h-64 w-44 h-44 rounded-full lg:col-span-2 col-span-2 lg:p-6' />
                <div className='w-full flex flex-col justify-center items-start pt-8 lg:px-4 px-8 lg:col-span-3 col-span-4 text-wrap gap-2 text-Iron/80'>
                    <div className='flex gap-2'>
                        <span className='text-2xl font-semibold text-Iron dark:text-slate-50/80'>{userData?.user.lastName}</span>
                        <span className='text-2xl font-semibold text-Iron dark:text-slate-50/80'>{userData?.user.firstName}</span>
                    </div>
                    <div className='grid grid-cols-7 grid-rows-3 space-x-1 space-y-3 items-center [&_span]:flex [&_span]:items-center pt-5'>


                        <span className=' col-span-2 text-md font-semibold cursor-pointer dark:text-slate-50/70 '>ایمیل</span>
                        <span className='text-md underline cursor-pointer hover:text-Iron/90 col-span-5 dark:text-slate-50/50'>{userData?.user.email}</span>

                        <span className='text-md font-semibold cursor-pointer  col-span-2 dark:text-slate-50/70 '>آدرس</span>
                        <span className='w-full text-md  col-span-5 dark:text-slate-50/50'>{order?.shippingAddress.city} - {order?.shippingAddress.street}</span>
                        <span className='text-md font-semibold cursor-pointer  col-span-2 dark:text-slate-50/70 '>تاریخ تولد</span>
                        <span className='text-md cursor-pointer  col-span-5 dark:text-slate-50/50'>1382/11/28</span>
                    </div>

                    <div className='flex gap-2 flex-col'>
                        <div className='flex gap-4'>

                        </div>
                        <div className='flex gap-2 items-center mt-6 dark:text-Luminous'>
                            <FaCakeCandles />
                            <span className='w-full text-md '>مشتری با 21 سال عضویت</span>
                        </div>

                    </div>
                </div>

            </div>


            <div className='flex flex-col mt-20 w-full gap-5 text-base font-semibold items-center'>
                <div className='flex  gap-4 justify-center w-full items-center lg:justify-start mt-16 pr-8 sm:mt-0'>

                    <CreateButton
                            text="سفارشات"
                            href="#"
                            className="text-xs font-normal w-[10rem] bg-Minty text-white py-4 rounded-lg hover:scale-[102%] transition duration-500 "
                            />

                    <div className="p-10 w-[10rem]  bg-Minty text-white  py-0.5 rounded-lg ">
                        <div className="dropdown flex justify-center relative ">
                            
                            <CreateButton
                            text="وضعیت"
                            href="#"
                            icon={<IoChevronDown size={16} />}
                            className="font-normal flex-row-reverse py-3  rounded gap-2 flex items-center mr-1 text-sm"
                            />

                            <ul className="dropdown-menu absolute hidden mt-12 text-center bg-gray-100 rounded-lg p-5 w-[10rem] space-y-2">
                                {status?.map((item) => (
                                    <li key={item.id} className="">
                                        <p className="rounded-lg w-full py-2 block
                   text-sm font-semibold hover:bg-gray-200 transition duration-500 
                   text-gray-700 whitespace-no-wrap">
                                            {statusTranslations[item.orderStatus] || item.orderStatus}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex gap-4 justify-start w-full mx-3 px-5'>
                    <CreateButton
                        text="ویرایش"
                        href="/profile/edit"
                        className='bg-transparent  hover:ring-2  text-gray-700 w-1/2 hover:ring-Minty
                            text-xs px-12 py-3 rounded-lg transition duration-500  font-semibold dark:text-white'
                    />
                    <CreateButton
                        text="تایید"
                        href="#"
                        className='bg-transparent transition duration-500 hover:ring-2 hover:ring-Minty text-gray-700 text-xs px-12 py-3 
                        w-1/2 rounded-lg dark:text-white font-semibold flex justify-center items-center'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileUser