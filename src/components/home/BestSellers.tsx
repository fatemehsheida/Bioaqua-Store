import Link from 'next/link'
import React from 'react'

const BestSellers = () => {
    return (
        <div className="New-&-Restock flex flex-col  gap-5 ">
            <div className='flex flex-col'>
            <h1 className="font-medium text-3xl pb-8 text-right">پرفروش‌ترین‌ها</h1>
            <div className="flex flex-col justify-center items-center ">
                <div className="flex flex-row justify-center items-center md:gap-8 gap-2 flex-wrap  ">


                    <div className="w-60 h-[325px] flex flex-col justify-between cursor-pointer group">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="best sellers/deep hydration mositurising face cream.webp" className="group-hover:scale-105 rounded-3xl transition-all duration-700" />
                        </div>

                        <div >
                            <span className="flex flex-row items-center flex-1 group-hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                                (00BQY70789) دستمال مرطوب کننده آرایش آووکادو
                            </span>
                            <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">
                                <span>
                                    $3.656
                                </span>
                                <small className="line-through opacity-80">
                                    $7.11-
                                </small>
                            </div>
                        </div>
                        
                    </div>



                    <div className="w-60 h-[325px] flex flex-col justify-between cursor-pointer group">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="best sellers/nenshong pink body cream.webp" className="group-hover:scale-105 rounded-3xl transition-all duration-700" />
                            <span className='px-4 py-1 bg-DarkPurple text-Snow rounded-3xl font-normal text-sm absolute bottom-3 left-3'>sold out</span>
                        </div>
                        <span className="flex flex-row items-center  flex-1 group-hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            (BQY78648) خط چشم مرطوب کننده لوسیون رشد مژه
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">

                            <span>
                                $3.656
                            </span>
                            <small className="line-through opacity-80">
                                $7.11
                            </small>
                        </div>
                    </div>





                    <div className="w-60 h-[325px] flex flex-col justify-between cursor-pointer group">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="sheet-mask/golden-osmanthus.webp" className="group-hover:scale-105 rounded-3xl transition-all duration-700" />
                        </div>
                        <span className="flex flex-row items-center flex-1 group-hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            (BQY90089) ماسک چشم آبرسان پپتید
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">

                            <span>
                                $3.656
                            </span>
                            <small className="line-through opacity-80">
                                $7.11
                            </small>
                        </div>
                    </div>





                    <div className="w-60 h-[325px] flex flex-col justify-between cursor-pointer group">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="sheet-mask/ance-rejuvenation.webp" className="group-hover:scale-105 rounded-3xl transition-all duration-700" />

                        </div>
                        <span className="flex flex-row items-center group-hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            (BQY90546) ماسک کلاژن پپتاید
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">
                            <span>
                                $3.656
                            </span>

                            <small className="line-through opacity-80">
                                $7.11
                            </small>
                        </div>
                    </div>



                </div>
                <div className="my-8 bg-Minty text-white w-32 h-11 group-hover:scale-105 cursor-pointer items-center text-center flex flex-col justify-center rounded-lg group-hover:w-32">

                    <button >
                        <Link href="/products/category/bestsellers">

                            دیدن همه
                        </Link>
                    </button>
                </div>

            </div>
            </div>

        </div>
    )
}

export default BestSellers