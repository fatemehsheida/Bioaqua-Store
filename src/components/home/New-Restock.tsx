import { Product } from '@/types/type';
import Link from 'next/link';
import React from 'react';
import CreateButton from '../createButton';

interface ProductListProps {
    products: Product[];
}

const NewRestock: React.FC<ProductListProps> = ({ products }) => {
    return (
        <section className="new-restock py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-medium text-right mb-8 dark:text-slate-50">جدید و موجودی مجدد</h1>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
                    {products.slice(0, 4).map((product) => (
                        <Link 
                            key={product.code}
                            href={`/products/${product.code}`}
                            className="group block transition-transform hover:shadow-lg rounded-xl duration-300"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-square mb-3">
                                <img 
                                    src={product.images.main} 
                                    alt={product.titleFa}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-2">
                                <h3 className="text-sm font-medium text-right line-clamp-2 group-hover:text-primary group-hover:underline dark:text-slate-300">
                                    {product.titleFa}
                                </h3>
                                <div className="flex justify-end mt-2">
                                    <span className="text-sm font-medium dark:text-slate-300">
                                        {product.bestSeller.lastPrice.toLocaleString('fa-IR')}.000 تومان
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                  
                     <CreateButton
                  text="دیدن همه"
                  href="/products/category/new"
                    className="bg-Minty dark:bg-Minty/50 text-white px-6 py-3 rounded-lg hover:bg-Minty/90 transition-colors duration-300  hover:scale-105 text-center w-32"
                />
                </div>
            </div>
        </section>
    );
};

export default NewRestock;