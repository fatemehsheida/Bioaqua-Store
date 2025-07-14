"use client"
import AccordionOrder from '@/components/profile/AccordionOrder';
import OrderItem from '@/components/profile/OrderItem';
import ProfileUser from '@/components/profile/profile';
import React from 'react'
import { useMediaQuery } from 'react-responsive';


const Profile = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <div className='flex bg-white/85 dark:bg-AbyssBlue/50 lg:flex-row flex-col items-center w-full font-normal'>
            <ProfileUser />
            {isMobile ? (
                <AccordionOrder />
            ) : (<div></div>)}
            {!isMobile ? (
                <OrderItem />
            ) : (<div></div>)}
        </div>
    )
}

export default Profile