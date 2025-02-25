import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex justify-between text-[#272727]'>
                <span className=' font-normal text-base'>تماس بگیرید</span>
                <Link href="/login" >
                    <span className='underline text-xs text-[#929190] dark:text-white/80'>وارد شوید</span>
                </Link>
            </div>
            <div className='w-full flex flex-col'>
                <input type="email" name="email" id="email" placeholder='ایمیل' className='px-3 py-2 border border-slate-300 rounded-md  my-2' />
                <div className='text-xs font-normal flex justify-end px-1 items-center gap-2'>
                    <label htmlFor="offers">اخبار و پیشنهادات را برای من ایمیل کنید</label>
                    <input type="checkbox" name="offers" id="offers" className='accent-[#605E5C]' />
                </div>
            </div>
        </div>
    )
}

export default Contact