import React from 'react'
import { GoChevronRight } from 'react-icons/go'

const Collctions = () => {
  return (
    <div className="py-9 flex flex-col" >
      <h1 className="font-medium text-3xl">کالکشن ها</h1>

      <div className="flex flex-row gap-12 justify-center py-8">

        <div className='group transition-all duration-75'>
          <div className='group-hover:overflow-hidden group-hover:rounded-2xl w-80 h-80 cursor-pointer '>
            <img src="collections/rem.webp" className="group-hover:scale-105 rounded-2xl transition-all duration-700 " />
          </div>
          <button>
            <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
              <div className='group-hover:scale-150'>
                <GoChevronRight />

              </div>

              <h4>ست های آرایشی</h4>
            </div>
          </button>
        </div>

        <div className='group'>
          <div className='group-hover:overflow-hidden group-hover:rounded-2xl w-80 h-80 cursor-pointer'>
            <img src="collections/balm.webp" className="group-hover:scale-105 rounded-2xl transition-all duration-700" />
          </div>
          <button>
            <div className="flex flex-row items-center
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
              <div className='group-hover:scale-150'>
                <GoChevronRight />

              </div>

              <h4>پیشنهادات زیبایی</h4>
            </div>
          </button>
        </div>

        <div className='group'>
          <div className='group-hover:overflow-hidden group-hover:rounded-2xl w-80 h-80 cursor-pointer'>
            <img src="collections/skin-care.webp" className="group-hover:scale-105 rounded-2xl transition-all duration-700" />
          </div>
          <button>
            <div className="flex flex-row items-center 
                     justify-start gap-3 px-4 py-2 text-lg font-medium">
              <div className='group-hover:scale-150'>
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