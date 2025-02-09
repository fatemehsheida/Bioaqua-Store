import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Delivery = () => {
    return (
        <div className='w-full'>
            <span>تحویل</span>
            <div className='w-full flex justify-between gap-2'>
                <input type="text" name="lastname" id="lastname" placeholder='نام خانوادگی' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
                <input type="text" name="firstname" id="firstname" placeholder='نام(اختیاری)' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
            </div>
            <div className='w-full relative'>
                <button>
                    <IoIosSearch className='absolute items-center justify-end top-5 left-3 opacity-80 hover:opacity-100' />
                </button>
                <input type="text" placeholder='آدرس' className='w-full px-3 py-2 border border-slate-300 rounded-md  my-2' />
            </div>
            <input type="text" placeholder='آپارتمانو سوئیت و غیره (اختیاری)' className='w-full px-3 py-2 border border-slate-300 rounded-md  my-2' />
            <div className='w-full flex justify-between gap-2'>
                <input type="text" name="postal" id="postal" placeholder='کد پستی' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
                <input type="text" name="city" id="city" placeholder='شهر' className='w-1/2 px-3 py-2 border border-slate-300 rounded-md  my-2' />
            </div>
            <div className='w-full'>
                <input type="text" name="phone" id="phone" placeholder='تلفن' className='w-full px-3 py-2 border border-slate-300 rounded-md  my-2' />
            </div>
            <div className='text-xs font-normal flex justify-end px-1 items-center gap-2'>
                <label htmlFor="saveinfo" >این اطلاعات را برای دفعه بعد ذخیره کنید</label>
                <input type="checkbox" name="saveinfo" id="saveinfo" className='accent-[#605E5C]' />
            </div>
        </div>
    )
}

export default Delivery