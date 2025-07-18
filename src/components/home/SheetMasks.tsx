import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import CreateButton from '../createButton'

const BestSellers = () => {
  const products = [
    {
      id: '00BQY70789',
      name: 'دستمال مرطوب کننده آرایش آووکادو',
      price: 3.656,
      originalPrice: 7.11,
      image: '/best sellers/deep hydration mositurising face cream.webp',
      soldOut: false
    },
    {
      id: 'BQY78648',
      name: 'خط چشم مرطوب کننده لوسیون رشد مژه',
      price: 3.656,
      originalPrice: 7.11,
      image:  '/best sellers/nenshong pink body cream.webp',
      soldOut: true
    },
    {
      id: 'BQY90089',
      name: 'ماسک چشم آبرسان پپتید',
      price: 3.656,
      originalPrice: 7.11,
      image: '/sheet-mask/golden-osmanthus.webp',
      soldOut: false
    },
    {
      id: 'BQY90546',
      name: 'ماسک کلاژن پپتاید',
      price: 3.656,
      originalPrice: 7.11,
      image:'/sheet-mask/ance-rejuvenation.webp',
      soldOut: false
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-right mb-10">
          <h2 className="text-3xl font-medium text-gray-900 dark:text-slate-50">ماسک های ورقه ای</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {product.soldOut && (
                  <span className="absolute bottom-3 left-3 bg-DarkPurple text-Snow px-3 py-1 rounded-full text-xs font-medium">
                    Sold Out
                  </span>
                )}
              </div>

              <div className="mt-4 px-2 pb-2 flex flex-col">
                <h3 className="text-sm font-medium  group-hover:underline dark:text-slate-300">
                  ({product.id}) {product.name}
                </h3>
                <div className="mt-2 flex justify-end items-center gap-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-slate-300">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through dark:text-slate-400">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <CreateButton
          text="دیدن همه"
          href="/"
          className="my-8 bg-Minty mx-auto dark:bg-Minty/50 group-hover:scale-105 cursor-pointer text-white w-32 h-11 items-center text-center hover:scale-105 flex flex-col justify-center rounded-lg group-hover:w-32"
        />
      </div>
    </section>
  )
}

export default BestSellers