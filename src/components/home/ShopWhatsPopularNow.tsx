import React from 'react'
import CreateButton from '../createButton'

const ShopWhatsPopularNow = () => {
    return (
        <div className="New-&-Restock py-9 mt-10 flex flex-col dark:text-zinc-800 gap-2 ">
            <h1 className="font-medium text-3xl pb-8 text-right dark:text-slate-50 mx-auto">از محصولات پرطرفدار حال حاضر خرید کنید</h1>
            <div className="flex flex-col justify-center items-center ">
                <div className="flex flex-row xl:justify-between  md:justify-center items-center md:gap-8  gap-2 flex-wrap mx-auto">


                    <div className="w-48 h-[280px] flex flex-col justify-between cursor-pointer group duration-300 hover:shadow-lg rounded-xl">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-48 h-44 ">
                            <img src="Shop What's Popular Now/snake venom peptide ceye cream.webp" className="group-hover:scale-105 rounded-3xl w-48 h-44 transition-all duration-700" />
                        </div>

                        <div >
                            <span className="flex flex-row items-center flex-1 group-hover:underline dark:text-slate-300
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                                دستمال مرطوب کننده آرایش آووکادو
                            </span>
                            <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium dark:text-slate-300">
                                <span>
                                    $3.656
                                </span>
                                <small className="line-through dark:text-slate-400 opacity-80">
                                    $7.11
                                </small>
                            </div>
                        </div>

                    </div>


                    <div className="w-48 h-[280px] flex flex-col justify-between cursor-pointer group duration-300 hover:shadow-lg rounded-xl">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-48 h-44">
                            <img src="new & Restock/avacado-makeup-remover-wips.webp" className="group-hover:scale-105 rounded-3xl w-48 h-44 transition-all duration-700" />
                        </div>

                        <div >
                            <span className="flex flex-row items-center flex-1 group-hover:underline dark:text-slate-300
                     justify-start gap-3 px-4 py-2 text-sm font-medium ">
                                دستمال مرطوب کننده آرایش آووکادو
                            </span>
                            <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium dark:text-slate-300">
                                <span>
                                    $3.656
                                </span>
                                <small className="line-through dark:text-slate-400 opacity-80">
                                    $7.11
                                </small>
                            </div>
                        </div>

                    </div>




                    <div className="w-48 h-[280px] flex flex-col justify-between cursor-pointer group duration-300 hover:shadow-lg rounded-xl">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-48 h-44">
                            <img src="new & Restock/eyelash.webp" className="group-hover:scale-105 rounded-3xl w-48 h-44 transition-all duration-700" />
                            <span className='px-4 py-1 bg-DarkPurple text-Snow rounded-3xl font-normal text-sm absolute bottom-3 left-3'>sold out</span>
                        </div>
                        <span className="flex flex-row items-center  flex-1 group-hover:underline dark:text-slate-300
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            خط چشم مرطوب کننده لوسیون رشد مژه
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium dark:text-slate-300">

                            <span>
                                $3.656
                            </span>
                            <small className="line-through dark:text-slate-400 opacity-80">
                                $7.11
                            </small>
                        </div>
                    </div>





                    <div className="w-48 h-[280px] flex flex-col justify-between cursor-pointer group duration-300 hover:shadow-lg rounded-xl">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-48 h-44">
                            <img src="new & Restock/-peptide-hydrating-eye-mask.webp" className="group-hover:scale-105 rounded-3xl w-48 h-44 transition-all duration-700" />
                        </div>
                        <span className="flex flex-row items-center flex-1 group-hover:underline dark:text-slate-300
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            ماسک چشم آبرسان پپتید
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium dark:text-slate-300">

                            <span>
                                $3.656
                            </span>
                            <small className="line-through dark:text-slate-400 opacity-80">
                                $7.11
                            </small>
                        </div>
                    </div>





                    <div className="w-48 h-[280px] flex flex-col justify-between cursor-pointer group duration-300 hover:shadow-lg rounded-xl">
                        <div className="relative group-hover:overflow-hidden group-hover:rounded-3xl w-48 h-44">
                            <img src="new & Restock/peptidecollagen mask.webp" className="group-hover:scale-105 rounded-3xl w-48 h-44 transition-all duration-700" />

                        </div>
                        <span className="flex flex-row items-center group-hover:underline dark:text-slate-300
                     justify-start gap-3 px-4 py-2 text-sm font-medium">
                            ماسک کلاژن پپتاید
                        </span>
                        <div className="gap-2 flex flex-row justify-end items-center px-4 text-sm font-medium dark:text-slate-300">
                            <span>
                                $3.656
                            </span>

                            <small className="line-through dark:text-slate-400 opacity-80">
                                $7.11
                            </small>
                        </div>
                    </div>



                </div>
                <CreateButton
                  text="دیدن همه"
                  href="/"
                  className="my-8 bg-Minty dark:bg-Minty/50 group-hover:scale-105 cursor-pointer text-white w-32 h-11 items-center text-center hover:scale-105 flex flex-col justify-center rounded-lg group-hover:w-32"
                />
            </div>
        </div>
    )
}

export default ShopWhatsPopularNow