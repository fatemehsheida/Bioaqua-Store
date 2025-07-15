import React from 'react';
import { GoChevronRight } from 'react-icons/go';

const MultimediaCollagen = () => {
    return (
        <div className="multimedia-collagen py-9 flex justify-center">
            <div className="w-full max-w-[1200px] px-4">
                <h1 className="font-medium text-3xl pb-8 text-right">کلاژ چندرسانه‌ای</h1>
                
                <div className="flex flex-col lg:flex-row lg:gap-9">
                    <div className="flex flex-col lg:w-[340px] gap-7 md:gap-[70px] mb-8 lg:mb-0 ">
                        <div className='group relative w-full h-[243px] overflow-hidden rounded-lg'>
                            <img 
                                src="Multimedia collage/cleanse & exfolitors.webp" 
                                className="w-full h-full object-cover group-hover:scale-105 rounded-lg transition-all duration-700" 
                                alt="پاک‌کننده‌ها و اسکراب‌ها"
                            />
                            <div className="absolute bottom-0 right-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                                <button>
                                    <div className="flex flex-row items-center justify-start gap-3 text-lg font-medium text-white">
                                        <div className='group-hover:scale-150 transition-transform'>
                                            <GoChevronRight />
                                        </div>
                                        <h4>پاک‌کننده‌ها و اسکراب‌ها</h4>
                                    </div>
                                </button>
                            </div>
                        </div>
                        
                        <div className='group relative w-full h-[340px] overflow-hidden rounded-lg'>
                            <img 
                                src="sheet-mask/golden-osmanthus.webp" 
                                className="w-full h-full object-cover group-hover:scale-105 rounded-lg transition-all duration-700" 
                                alt="ماسک بیوآکوا"
                            />
                            <div className="absolute bottom-0 right-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                                <button>
                                    <div className="flex flex-row items-center justify-start gap-3 text-lg font-medium text-white">
                                        <div className='group-hover:scale-150 transition-transform'>
                                            <GoChevronRight />
                                        </div>
                                        <h4>ماسک بیوآکوا</h4>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1">
                        <div className="group relative w-full h-auto lg:h-[651px] overflow-hidden rounded-lg">
                            <img 
                                src="Multimedia collage/acen&blemishedtreatmants.webp" 
                                className="w-full h-full object-cover group-hover:scale-105 rounded-lg transition-all duration-700" 
                                alt="درمان‌های آکنه و لک"
                            />
                            <div className="absolute bottom-0 right-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
                                <button>
                                    <div className="flex flex-row items-center justify-start gap-3 text-lg font-medium text-white">
                                        <div className='group-hover:scale-150 transition-transform'>
                                            <GoChevronRight />
                                        </div>
                                        <h4>درمان‌های آکنه و لک</h4>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultimediaCollagen;