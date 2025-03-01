import React from 'react'
import { PiCreditCardThin } from "react-icons/pi";
import { MdAddCard } from "react-icons/md";

const PaymentForm = () => {
    return (
        <div className="w-full xl:w-1/2 xl:pl-20 xl:pr-10 flex flex-col ">
            <div className='w-full'>

               

                <div className="border border-[#5153553a] flex flex-col gap-7 px-7 py-4 xl:mt-10 mt-3 rounded-md">
                    <div className="flex items-center gap-1 ">
                        <input type="radio" name="card" id="card" className="accent-[#612FFF] mr-2" />
                        <PiCreditCardThin className="size-5 opacity-65" />
                        <span className="text-[#42474D] text-base font-medium">کارت</span>

                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <span className="text-[#42474D] text-sm font-normal">اطلاعات کارت</span>

                        <div className="flex flex-col items-center w-full">
                            <div className="w-full flex items-center border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none rounded-t-md bg-white">
                                <input
                                    dir="rtl"
                                    type="text"
                                    placeholder="****  ****  ****  ****"
                                    className="w-full px-3 py-2  outline-none bg-transparent text-sm"
                                />
                                <div className="flex items-center pl-8 gap-0.5">
                                    <img src="http://localhost:8000/uploads/image-1740779945479-522914529.png" className="w-5" />
                                    <img src="http://localhost:8000/uploads/image-1740779815693-619555251.png" className="w-5" />
                                    <img src="http://localhost:8000/uploads/image-1740779970542-419344239.png" className="w-5" />
                                    <img src="http://localhost:8000/uploads/image-1740779740671-101775695.png" className="w-5" />
                                </div>
                            </div>
                            <div className="flex items-center w-full ">

                                <div className="w-full flex items-center justify-between border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none rounded-br-md bg-white">
                                    <input
                                        type="password"
                                        placeholder="CVV2"
                                        className="w-full px-3 py-2  outline-none text-sm bg-transparent"
                                    />
                                    <MdAddCard className="ml-3 opacity-50" />
                                </div>

                                <div className="w-full border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none rounded-bl-md bg-white ">
                                    <input
                                        type="text"
                                        placeholder="MM / YY"
                                        className="w-full px-3 py-2  outline-none text-sm bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-[#42474D] text-sm font-normal my-3" >نام روی کارت</span>
                        <input type="text" name="Name" id="name" className="w-full px-3 rounded-md py-1.5 border border-[#51535548] hover:border-[#45494dae] focus:border-[#612FFF] outline-none " />
                    </div>



                    <div className="flex items-center justify-center bg-[#612FFF] hover:bg-[#5f2fffda] transition-all duration-500 text-slate-50 py-2 rounded-md cursor-pointer">
                        <button type="submit">پرداخت 54 تومان</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PaymentForm