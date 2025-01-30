import React from 'react'
import { GoChevronRight } from 'react-icons/go'

const Collctions = () => {
  return (
    <div className="py-9 flex flex-col" >
            <h1 className="font-semibold text-3xl px-8">کالکشن ها</h1>

            <div className="flex flex-row gap-12 justify-center py-8">

              <div>
                <img src="collections/rem.webp" className="w-80 h-80 rounded-2xl" />
                <button>
                  <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                    <div className='hover:scale-150'>
                    <GoChevronRight />

                    </div>
                    
                    <h4>ست های آرایشی</h4>
                  </div>
                </button>
              </div>

              <div>
                <img src="collections/balm.webp" className="w-80 h-80 rounded-2xl" />
                <button>
                  <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                    <div className='hover:scale-150'>
                    <GoChevronRight />

                    </div>
                    
                    <h4>پیشنهادات زیبایی</h4>
                  </div>
                </button>
              </div>

              <div>
                <img src="collections/skin-care.webp" className="w-80 h-80 rounded-2xl" />
                <button>
                  <div className="flex flex-row items-center 
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
                    <div className='hover:scale-150'>
                    <GoChevronRight />

                    </div>
                    
                    <h4> مراقبت از پوست</h4>
                  </div>
                </button>
              </div>

            </div>


          </div>
  )
}

export default Collctions