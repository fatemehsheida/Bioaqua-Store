import Link from 'next/link'
import React from 'react'

const ShopWhatsPopularNow = () => {
    return (
        <div className="New-&-Restock  py-9 flex flex-col  gap-5 ">
            <h1 className="font-semibold text-3xl px-8 pb-8 text-right">از محصولات پرطرفدار حال حاضر خرید کنید</h1>
            <div className="flex flex-col justify-center items-center ">
                <div className="flex flex-row justify-center items-center gap-8 ">


                    <div className="w-44 h-[280px] flex flex-col justify-between cursor-pointer">
                        <div className="relative">
                            <img src="new &/avacado-makeup-remover-wips.webp" className="w-44 h-44 rounded-xl" />
                            <span className='px-4 py-1 bg-[#94D2BD] text-[#2E2A39] rounded-3xl font-normal text-sm absolute bottom-3 left-3'>Sale</span>
                        </div>

                        <div >
                            <span className="flex flex-row items-center flex-1 hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                                (00BQY70789) دستمال مرطوب کننده آرایش آووکادو
                            </span>
                            <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">
                                <span>
                                    $3.656
                                </span>
                                <small className="line-through ">
                                    $7.11
                                </small>
                            </div>
                        </div>
                        
                    </div>



                    <div className="w-44 h-[280px] flex flex-col justify-between cursor-pointer">
                        <div className="relative">
                            <img src="new &/avacado-makeup-remover-wips.webp" className="w-44 h-44 rounded-xl" />
                            <span className='px-4 py-1 bg-[#94D2BD] text-[#2E2A39] rounded-3xl font-normal text-sm absolute bottom-3 left-3'>Sale</span>
                        </div>

                        <div >
                            <span className="flex flex-row items-center flex-1 hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                                (00BQY70789) دستمال مرطوب کننده آرایش آووکادو
                            </span>
                            <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">
                                <span>
                                    $3.656
                                </span>
                                <small className="line-through ">
                                    $7.11
                                </small>
                            </div>
                        </div>
                        
                    </div>




                    <div className="w-44 h-[280px] flex flex-col justify-between cursor-pointer">
                        <div className="relative">
                            <img src="new &/eyelash.webp" className="w-44 h-44 rounded-xl" />
                            <span className='px-4 py-1 bg-[#2E2A39] text-[#FAFAFA] rounded-3xl font-normal text-sm absolute bottom-3 left-3'>sold out</span>
                        </div>
                        <span className="flex flex-row items-center  flex-1 hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            (BQY78648) خط چشم مرطوب کننده لوسیون رشد مژه
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">

                            <span>
                                $3.656
                            </span>
                            <small className="line-through">
                                $7.11
                            </small>
                        </div>
                    </div>





                    <div className="w-44 h-[280px] flex flex-col justify-between cursor-pointer">
                        <div className="relative">
                            <img src="new &/-peptide-hydrating-eye-mask.webp" className="w-44 h-44 rounded-xl" />
                            <span className='px-4 py-1 bg-[#94D2BD] text-[#2E2A39] rounded-3xl font-normal text-sm absolute bottom-3 left-3'>Sale</span>
                        </div>
                        <span className="flex flex-row items-center flex-1 hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            (BQY90089) ماسک چشم آبرسان پپتید
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">

                            <span>
                                $3.656
                            </span>
                            <small className="line-through">
                                $7.11
                            </small>
                        </div>
                    </div>





                    <div className="w-44 h-[280px] flex flex-col justify-between cursor-pointer">
                        <div className="relative">
                            <img src="new &/peptidecollagen mask.webp" className="w-44 h-44 rounded-xl" />
                            <span className='px-4 py-1 bg-[#94D2BD] text-[#2E2A39] rounded-3xl font-normal text-sm absolute bottom-3 left-3'>Sale</span>

                        </div>
                        <span className="flex flex-row items-center hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            (BQY90546) ماسک کلاژن پپتاید
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">
                            <span>
                                $3.656
                            </span>

                            <small className="line-through">
                                $7.11
                            </small>
                        </div>
                    </div>



                </div>
                <div className="my-8 bg-[#94D2BD] text-white w-32 h-11 items-center text-center flex flex-col justify-center rounded-lg hover:w-32">

                    <button >
                        <Link href="/">

                            دیدن همه
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShopWhatsPopularNow