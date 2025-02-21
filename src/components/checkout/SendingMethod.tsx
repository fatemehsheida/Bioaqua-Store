import React from 'react'

const SendingMethod = () => {
    return (

        <div>
            <span>روش ارسال</span>

            <div className="flex flex-col my-3"> 
                <div className="inline-flex items-center border border-slate-300 rounded-t-lg py-2 px-3 has-[:checked]:border-slate-800">
                    <label className="relative flex items-center cursor-pointer  peer-has-checked:bg-indigo-200" htmlFor="html">
                        <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full 
       border border-slate-300 checked:border-slate-300 transition-all" id="html" />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 
         transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span> 

                    </label>
                    <div className='px-2  '>
                        <label className="ml-2 text-slate-600 cursor-pointer text-xs font-normal dark:text-white" htmlFor="html">✈ حمل و نقل استاندارد قابل ردیاب</label>
                        <label className="ml-2 text-slate-600 cursor-pointer text-xs font-normal dark:text-white" htmlFor="html">(ارسال رایگان برای سفارش های بالای 20 تومان)</label>
                        <span className="ml-2 text-slate-950 cursor-pointer text-xs font-normal dark:text-white">150.000 تومان</span>
                    </div>
                </div>
                <div className="inline-flex items-center border border-slate-300 rounded-b-lg py-2 px-3 has-[:checked]:border-slate-800">
                    <label className="relative flex items-center cursor-pointer" htmlFor="react">
                        <input name="framework" type="radio" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full 
      border border-slate-300 checked:border-slate-300 transition-all" id="react" />
                        <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 
        transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                    </label>
                    <div className='px-2'>
                        <label className="ml-2 text-slate-600 cursor-pointer text-xs font-normal dark:text-white" htmlFor="react">⚡ ارسال سریعتر در زمان انتظار خود صرفه جویی کنید</label>
                        <span className="ml-2 text-slate-950 cursor-pointer text-xs font-normal dark:text-white/50">70.000 تومان</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SendingMethod