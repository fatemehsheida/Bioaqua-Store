import { Product } from '@/types/type';
import Link from 'next/link'
import React from 'react'


interface ProductListProps {
    products: Product[];
}

const NewRestock: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="New-&-Restock flex flex-col  gap-5 mt-10">
            <div className='flex flex-col'>
                <h1 className="font-medium text-3xl pb-8 text-right">جدید و موجودی مجدد</h1>
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex flex-row justify-center items-center md:gap-8 gap-2 flex-wrap  ">

                        <div className=" flex md:gap-8 gap-2 justify-between cursor-pointer ">
                            {products.slice(0, 4).map((product) => (
                                <div key={product.code} className='group'>
                                    <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-60 h-60">
                                        <img src={product.images.main} className="group-hover:scale-105 rounded-3xl" />
                                    </div>

                                    <div >
                                        <span className="flex flex-row items-center flex-1 group-hover:underline
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                                            {product.titleFa}
                                        </span>
                                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium">
                                            <span>
                                                $3.656
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

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

        </div>
    )
}

export default NewRestock