import React from 'react'
import { GoChevronRight } from 'react-icons/go'

const Collctions = () => {
  return (
    <div className="xl:py-9 flex flex-col">
 <div className="text-right mb-10 mx-auto">
          <h2 className="text-3xl font-medium text-gray-900">کالکشن ها</h2>
        </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 py-6 sm:py-8">
        
        <div className="group transition-all duration-75 cursor-pointer">
          <div className="w-40 h-40 sm:w-80 sm:h-80 group-hover:overflow-hidden group-hover:rounded-2xl">
            <img 
              src="collections/rem.webp" 
              alt="ست های آرایشی" 
              className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-all duration-700" 
            />
          </div>
          <button>
            <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-lg font-medium">
              <div className="group-hover:scale-150 transition-transform duration-300">
                <GoChevronRight />
              </div>
              <h4>ست های آرایشی</h4>
            </div>
          </button>
        </div>

        <div className="group transition-all duration-75 cursor-pointer">
          <div className="w-40 h-40 sm:w-80 sm:h-80 group-hover:overflow-hidden group-hover:rounded-2xl">
            <img 
              src="collections/balm.webp" 
              alt="پیشنهادات زیبایی" 
              className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-all duration-700" 
            />
          </div>
          <button>
            <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-lg font-medium">
              <div className="group-hover:scale-150 transition-transform duration-300">
                <GoChevronRight />
              </div>
              <h4>پیشنهادات زیبایی</h4>
            </div>
          </button>
        </div>

        <div className="group transition-all duration-75 cursor-pointer">
          <div className="w-40 h-40 sm:w-80 sm:h-80 group-hover:overflow-hidden group-hover:rounded-2xl">
            <img 
              src="collections/skin-care.webp" 
              alt="مراقبت از پوست" 
              className="w-full h-full rounded-2xl object-cover group-hover:scale-105 transition-all duration-700" 
            />
          </div>
          <button>
            <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-lg font-medium">
              <div className="group-hover:scale-150 transition-transform duration-300">
                <GoChevronRight />
              </div>
              <h4>مراقبت از پوست</h4>
            </div>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Collctions
