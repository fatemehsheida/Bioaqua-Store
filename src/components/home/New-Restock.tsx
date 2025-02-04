import Link from 'next/link'
import React from 'react'

const NewRestock = () => {
    return (
        <div className="New-&-Restock w-full py-9 flex flex-col justify-between items-start md:gap-5 sm:px-6">

            <h1 className="font-medium text-3xl pb-8 text-right">جدید و موجودی مجدد</h1>
            <div className="flex flex-col justify-center items-center w-full flex-wrap">
                <div className="flex justify-between items-center md:gap-8 flex-wrap  ">


                    <div className="md:w-60 md:h-[325px] w-7 h-52 items-start flex flex-col justify-between cursor-pointer group">

                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="new &/avacado-makeup-remover-wips.webp" className="group-hover:scale-105 rounded-3xl" />
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
                                    $7.11
                                </small>
                            </div>
                        </div>
                        
                    </div>

                    <div className="md:w-60 md:h-[325px] w-1/2 h-84 items-start flex flex-col justify-between cursor-pointer group">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl
                         md:w-60 md:h-60 w-full h-60">

                    <div className="md:w-60 md:h-[325px] w-7 h-52 flex flex-col justify-between cursor-pointer group">

                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="new &/eyelash.webp" className="group-hover:scale-105 rounded-3xl" />
                            <span className='px-4 py-1 bg-[#2E2A39] text-[#FAFAFA] rounded-3xl font-normal text-sm absolute bottom-3 left-3'>sold out</span>
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





                    <div className="md:w-60 md:h-[325px] w-7 h-52 flex flex-col justify-between cursor-pointer group">
                        <div className="relative  group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="new &/-peptide-hydrating-eye-mask.webp" className="group-hover:scale-105 rounded-3xl" />
                        </div>
                        <span className="flex flex-row items-center group-hover:underline
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





                    <div className="md:w-60 md:h-[325px] w-7 h-52 flex flex-col justify-between cursor-pointer group">
                        <div className="relative  group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                            <img src="new &/peptidecollagen mask.webp" className="group-hover:scale-105 rounded-3xl" />

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
                <div className="my-8 bg-[#94D2BD] text-white w-32 h-11 group-hover:scale-105 cursor-pointer items-center text-center flex flex-col justify-center rounded-lg group-hover:w-32">

                    <button >
                        <Link href="/products/category/new">

                            دیدن همه
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewRestock