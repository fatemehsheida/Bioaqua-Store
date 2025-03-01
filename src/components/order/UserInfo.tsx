import React from 'react'


//     "user": {
//         "firstName": "fatemeh",
//         "lastName": "sheida",
//         "email": "ftm@gmail.com",
//         "role": 3,
//         "isActive": true,
//         "createdAt": "2025-01-31T09:12:12.879Z",
//         "updatedAt": "2025-01-31T09:12:12.879Z",
//         "id": "679c93ecbd8284e485ebc33e"
//     },



const UserInfo = ({ firstName, lastName, email }: {
    firstName: string,
    lastName: string,
    email: string,
}) => {
    return (
        <div className=''>
            <div className='relative w-full flex flex-col justify-center items-start pl-8 pr-4 text-wrap gap-2 text-[#434241]/80 ring-2
             ring-gray-500/40 rounded-lg mt-8 pt-4 hover:cursor-context-menu'>

                <span className='bg-white px-2 absolute -top-3 right-2 text-sm font-medium'>اطلاعات کاربر</span>

                <div className='items-start flex flex-col justify-center py-2  gap-2  w-72'>

                    <div className='flex flex-col gap-1 w-full'>
                        <div className='flex w-full'>
                            <span className='text-sm font-semibold cursor-pointer w-1/2'> نام  </span>
                            <span className='text-sm w-2/3'>{firstName}</span>
                        </div>

                        <div className='flex w-full'>
                            <span className='text-sm font-semibold cursor-pointer w-1/2'>
                                نام خانوادگی</span>
                            <span className='text-sm w-2/3'>{lastName}</span>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <span className=' col-span-2 text-sm font-semibold cursor-pointer'>ایمیل</span>
                        <span className='text-sm underline cursor-pointer hover:text-[#434241]/90 col-span-5'>{email}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserInfo