import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const AccordionPayment = () => {
  return (
    <Accordion type="single" collapsible className='w-full bg-[#F6F6F6] '>
            <AccordionItem value="item-1 w-full ">
              <div className='flex items-center w-full justify-between px-6'>
                <AccordionTrigger className="flex gap-3 w-full text-base font-normal">
                  <span className="text-[#1A1D21] w-full ">خلاصه سفارش</span>
                </AccordionTrigger>
              </div>

              <AccordionContent className="text-sm font-normal  pb-0">
                <div className='right bg-[#f4f4f4c0] w-full h-full flex flex-col justify-start items-end px-6'>
                  <div className="flex flex-col justify-between h-full w-full">


                    <div className="flex flex-col items-center w-full  mb-5 px-5">

                      <div className=" mt-3 w-full">
                        <div className="flex items-center">
                          <div className="flex items-center w-full justify-between">
                            <span className="text-[#6C747F] text-base font-normal">نام محصول</span>
                            <div className="flex items-center gap-0.5 text-sm font-normal">
                              <span className="text-[#6C747F]">1</span>
                              <span className="text-[#6C747F]">×</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[#42474D] flex w-full justify-end text-sm font-normal">5.59 دلار</span>
                      </div>

                      <div className=" mt-3 w-full">
                        <div className="flex items-center">
                          <div className="flex items-center w-full justify-between">
                            <span className="text-[#6C747F] text-base font-normal">نام محصول</span>
                            <div className="flex items-center gap-0.5 text-sm font-normal">
                              <span className="text-[#6C747F]">1</span>
                              <span className="text-[#6C747F]">×</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[#42474D] flex w-full justify-end text-sm font-normal">5.59 دلار</span>
                      </div>
                    </div>



                    <div className="">
                      <hr className="opacity-15" />
                      <div className="my-3 w-full flex justify-between items-center px-5 text-sm font-normal">
                        <span className="text-[#6C747F]">جمع جزء</span>
                        <span className="text-[#6C747F]">28.16 دلار</span>
                      </div>
                      <hr className="opacity-15" />
                      <div className="my-3 w-full flex justify-between items-center px-5 text-sm font-medium">
                        <span className="text-[#42474D]">مجموع قابل پرداخت</span>
                        <span className="text-[#1A1D21]">28.16 دلار</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
  )
}

export default AccordionPayment