import React from 'react'
import { GoChevronRight } from 'react-icons/go'

const MultimediaCollagen = () => {
    return (
        <div className="multimedia-collagen py-9 flex flex-row justify-center" >
            <div className="flex flex-col">
                <h1 className="font-semibold text-3xl pb-8 ">کلاژ چندرسانه‌ای</h1>
                <div className="flex flex-row gap-9">



                    <div className="flex flex-col gap-7">
                        <div>
                            <img src="Multimedia collage/cleanse & exfolitors.webp" className="w-[340px] h-[243px] rounded-lg" />
                            <div>
                                <button>
                                    <div className="flex flex-row items-center 
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                                        <div className='hover:scale-150'>
                                            <GoChevronRight />
                                        </div>
                                        <h4>پاک‌کننده‌ها و اسکراب‌ها</h4>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src="sheet-mask/golden-osmanthus.webp" className="w-[340px] h-[340px] rounded-lg" />
                            <div>
                                <button>
                                    <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                                        <div className='hover:scale-150'>
                                            <GoChevronRight />
                                        </div>

                                        <h4>ماسک بیوآکوا</h4>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <img src="Multimedia collage/acen&blemishedtreatmants.webp" alt="" className="w-[750px] h-[651px] rounded-lg" />
                            <div>
                                <button>
                                    <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                                        <div className='hover:scale-150'>
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
    )
}

export default MultimediaCollagen