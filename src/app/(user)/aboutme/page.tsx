import CreateButton from '@/components/createButton'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-[] dark:bg-ShadowBlue'>

      <div className="about-us rtl bg-IvoryCream dark:bg-ShadowBlue py-12 md:py-20 px-4 sm:px-6 ">
        <div className='border-FrostedJade border-4 pb-10 max-w-5xl mx-auto px-16 rounded-lg'>

          <div className="max-w-7xlxl mx-auto space-y-16 md:space-y-24 ">

            <section className="text-center relative overflow-hidden w-full">
              <div className="absolute -top-10 md:-top-20 left-0 w-full opacity-10">
                <svg viewBox="0 0 1440 320" className="text-AquaHaze w-full">
                  <path fill="currentColor" d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,202.7C672,181,768,139,864,138.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 mt-4">
                <span className="text-DeepVerdigris">زیبایی</span>
                <span className="text-AquaHaze mx-2 md:mx-3">•</span>
                <span className="text-CashmereBlush">آرامش</span>
              </h1>
              <p className="text-AquaHaze text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 md:px-0">
                ترکیبی از طبیعت و نوآوری برای پوستی درخشان
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-2 md:-inset-4 dark:bg-DriftwoodTan bg-gradient-to-tr from-CashmereBlush to-transparent rounded-xl md:rounded-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white dark:bg-IronOre p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
                  <h2 className="text-xl md:text-2xl text-DeepVerdigris dark:text-GlacialStream font-bold mb-4 md:mb-6">
                    <span className="border-b-4 border-CashmereBlush pb-2">از علاقه تا اشتراک</span>
                  </h2>
                  <p className="text-AquaHaze dark:text-TidalFoam  text-sm md:text-base leading-7 md:leading-8 mb-4">
                    من فاطمه شیدا ، به عنوان یک برنامه‌نویس و عاشق زیبایی، این مسیر رو با اشتیاق به مراقبت پوستی پایدار شروع کردم.
                    <br className="hidden md:block" />
                    ایده اصلی ما ساده بود: ایجاد فضایی که در آن علم و طبیعت در هماهنگی کامل عمل کنند.
                  </p>
                  <div className="flex items-center space-x-3 md:space-x-4 mt-6 md:mt-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-CashmereBlush rounded-full flex items-center justify-center ml-4 px-4">
                      <span className="text-DeepVerdigris text-lg md:text-xl ">💡</span>
                    </div>
                    <div>
                      <p className="text-AquaHaze dark:text-QuietSilver text-sm md:text-base font-medium">ما باور داریم که:</p>
                      <p className="text-DeepVerdigris dark:text-VerdigrisWave text-xs md:text-sm">"زیبایی واقعی از ترکیب دانش و احترام به طبیعت زاده می‌شود"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-AquaHaze rounded-xl md:rounded-2xl p-6 md:p-8 h-64 md:h-96 flex items-end relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-DeepVerdigris/20 to-transparent"></div>
                <div className="relative text-right text-white">
                  <p className="text-lg md:text-xl font-medium mb-10">تخصص ما در چیست؟</p>
                  <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
                    {['انتخاب هوشمندانه محصولات', 'تضمین کیفیت و اصالت', 'ارائه دانش مراقبت پوستی'].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-CashmereBlush rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {[
                { icon: '🌱', title: 'طبیعی', desc: 'فاقد مواد شیمیایی مضر' },
                { icon: '💧', title: 'تغذیه', desc: 'آبرسانی عمقی پوست' },
                { icon: '✨', title: 'درخشش', desc: 'طراوت فوری و ماندگار' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border-2 border-CashmereBlush hover:border-AquaHaze transition-all duration-300 group"
                >
                  <div className='flex items-center gap-2'>
                  <div className="text-3xl md:text-xl mb-3 md:mb-4">{item.icon}</div>
                  <h3 className="text-lg md:text-xl text-DeepVerdigris font-bold mb-1 md:mb-2">{item.title}</h3>
                  </div>
                  <p className="text-AquaHaze text-sm md:text-base">{item.desc}</p>
                </div>
              ))}
            </section>


            <div className=' relative '>

            <section className="bg-AquaHaze rounded-xl md:rounded-2xl p-6 md:p-12 text-center text-white relative overflow-hidden h-64 ">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNXpNMiAxN2wxMCA1IDEwLTVNMiAxMmwxMCA1IDEwLTUiLz48L3N2Zz4=')]"></div>
              <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">آماده تغییر هستید؟</h2>
              <p className="text-sm md:text-lg mb-4 md:mb-8 opacity-90 max-w-xl mx-auto">
                همین امروز به خانواده هزاران مشتری راضی ما بپیوندید
              </p>
            </section>
              
              <div className='w-full absolute bottom-6'>
                <CreateButton
                  text="شروع تجربه جدید"
                  href="/"
                  className=" bg-CashmereBlush cursor-pointer text-DeepVerdigris px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-LightApricot transition duration-300 flex items-center justify-center mx-auto text-sm md:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default page