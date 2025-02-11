import React from 'react'
import { FaCakeCandles } from 'react-icons/fa6'
import { IoChevronDown } from "react-icons/io5";


const Profile = () => {
    // const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <div className='flex bg-white/85 lg:flex-row flex-col items-center w-full font-normal'>
            <div className='left flex flex-col justify-center items-start lg:w-3/5 w-full mx-10 my-10'>


                <div className='grid grid-cols-5 justify-center items-start object-cover h-44 lg:h-64 '>
                    <img src="cute_profile.jpg" className='md:w-64 md:h-64 w-44 h-44 rounded-full col-span-2 p-6' />
                    <div className='w-full flex flex-col justify-center items-start pt-8 px-4 col-span-3 text-wrap gap-2 text-[#434241]/80'>
                    <div className='flex gap-2'>
                    <span className='text-2xl font-semibold text-[#434241]'>یوسف</span>
                    <span className='text-2xl font-semibold text-[#434241]'>عرب اسدی</span>
                    </div>
                    <div className='grid grid-cols-7 grid-rows-3 space-x-1 space-y-3 items-center [&_span]:flex [&_span]:items-center pt-5'>
                        

                        <span className=' col-span-2 text-md font-semibold cursor-pointer  '>ایمیل</span>
                        <span className='text-md underline cursor-pointer hover:text-[#434241]/90  col-span-5'>yosofasady2@gmial.com</span>

                    <span className='text-md font-semibold cursor-pointer  col-span-2'>آدرس</span>
                    <span className='w-full text-md  col-span-5'>مشهد - بلوار کوهسنگی - کوهسنگی 22</span>
                    <span className='text-md font-semibold cursor-pointer  col-span-2'>تاریخ تولد</span>
                        <span className='text-md cursor-pointer  col-span-5'>1382/11/28</span>
                    </div>

                    <div className='flex gap-2 flex-col'>
                        <div className='flex gap-4'>
                         
                        </div>
                    <div className='flex gap-2 items-center'>
                    <FaCakeCandles />
                    <span className='w-full text-md'>مشتری با 21 سال عضویت</span>
                    </div>
                    
                    </div>
                    </div>
                    
                </div>


                <div className='flex flex-col mt-20 w-full gap-5 text-base font-semibold'>
                    <div className='flex gap-4 jusitfy-center w-full'>
                        <button className='text-xs font-normal w-[10rem]  bg-[#94D2BD] text-white  py-3 rounded-lg
                        hover:scale-[102%] transition duration-500 '>سفارشات</button>

                        <div className="p-10 w-[10rem]  bg-[#94D2BD]  text-white  py-0.5 rounded-lg ">
                            <div className="dropdown flex justify-center relative ">
                                <button className="font-normal text-xs py-3  rounded gap-2 flex items-center">
                                    <span className="mr-1 text-sm">وضعیت </span>
                                    <IoChevronDown />
                                </button>
                                <ul className="dropdown-menu absolute hidden mt-12 text-center bg-gray-100 rounded-lg p-5 w-[10rem] space-y-2">
                                    <li className=""><p className="rounded-lg w-full py-2 block
                                    text-sm font-semibold hover:bg-gray-200 transition duration-500 
                                     text-gray-700 whitespace-no-wrap ">ارسال شده</p></li>
                                    <li className=""><p className="rounded-lg w-full py-2 block
                                    text-sm font-semibold hover:bg-gray-200 transition duration-500 
                                     text-gray-700 whitespace-no-wrap ">در دست اقدام</p></li>
                                    <li className=""><p className="rounded-lg w-full py-2 block
                                    text-sm font-semibold hover:bg-gray-200 transition duration-500 
                                     text-gray-700 whitespace-no-wrap ">در حال انجام</p></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className='flex gap-4 justify-start w-full'>
                        <button className='bg-transparent  hover:ring-2  text-gray-700 w-1/2 hover:ring-[#94D2BD]
                         text-xs px-12 py-3 rounded-lg transition duration-500  font-semibold '>ویرایش</button>
                        <button className='bg-transparent transition duration-500 hover:ring-2 hover:ring-[#94D2BD]
                          text-gray-700 text-xs px-12 py-3 w-1/2
                         rounded-lg  font-semibold    '>تایید</button>
                    </div>

                </div>

            </div>
            {/* {isMobile ? (

                <Accordion type="single" collapsible className='w-full bg-[#F6F6F6]'>
                    <AccordionItem value="item-1 w-full ">
                        <div className='flex items-center w-full justify-between px-6'>
                            <AccordionTrigger className="flex gap-3 w-20  text-base font-normal">
                                سفارشات
                            </AccordionTrigger>
                            <span className="text-gray-500">{totalAmount}.000 تومان</span>

                        </div>
                        <AccordionContent className="text-sm font-normal text-[#918e99] pb-0 pt-0 ">
                            <div className='right bg-[#FFF6EE] w-full h-full flex flex-col justify-start items-end pt-10 px-6'>
                                <div className='w-full'>

                                    {items.map((item: IProductCart) => (
                                        <div
                                            key={item.id}
                                            className="mb-4 flex  gap-8 items-center group "
                                        >
                                            <div className='flex justify-start items-start gap-4 w-full'>
                                                <div className='flex items-center justify-between w-full'>
                                                    <p className="text-gray-600 text-sm font-normal">
                                                        {item.bestSeller.lastPrice * item.quantity}.000 تومان
                                                    </p>
                                                    <h3 className="font-noraml group-hover:underline rounded-lg text-base">{item.titleFa}</h3>
                                                </div>
                                                <div className='relative w-20 h-20'>
                                                    <Link href={`/products/${item.code}`} className="w-20 h-20">
                                                        <div className="col-span-1 pl-2">
                                                            <img src={item.images.main} alt={item.titleFa} className=" rounded-lg" />
                                                        </div>
                                                    </Link>
                                                    <div className="absolute lg:bottom-16 xl:left-[58px] lg:left-12 text-white rounded-full bg-[#706C69] px-2 pt-1
text-xs font-normal flex items-center justify-center">
                                                        {item.quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className='w-full flex justify-between items-center gap-3'>
                                        <button className='w-36 bg-[#FFF1E4] border-[#FDD8D8] border py-2 px-4 text-sm font-normal'>اعمال شود</button>
                                        <input type="text" placeholder='کد تخفیف' className='w-full bg-transparent border-[#FDD8D8] border py-2 px-4' />
                                    </div>

                                    <div className='w-full my-9 flex flex-col gap-2'>
                                        <div className='w-full flex justify-between items-center'>
                                            <span className="text-xs font-medium text-gray-500">{totalAmount}.000 تومان</span>
                                            <span className='text-base font-medium'>جمع محصولات</span>
                                        </div>

                                        <div className='w-full flex justify-between items-center'>
                                            <span className="text-xs font-medium text-gray-500">{shipping}.000 تومان</span>
                                            <span className='text-base font-medium'>حمل و نقل</span>
                                        </div>

                                        <div className='w-full flex justify-between items-center'>
                                            <span className="text-xs font-medium text-gray-500">{totalPrice}.000 تومان</span>
                                            <span className='text-base font-normal'>جمع کل</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ) : (<div></div>)} */}
            {/* {!isMobile ? ( */}
            <div className='right w-1/2 h-full flex flex-col justify-start items-end pt-10 px-6'></div>

            {/*  ) : (<div></div>)} */}



        </div>
    )
}

export default Profile