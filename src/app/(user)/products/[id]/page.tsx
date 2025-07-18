// "use cFlient"
import { Product } from "@/types/type";
import ProductDetailCart from "@/components/cart/ProductDetailCart";
import ImageGallery from "@/components/product/ImageGallery";
import AccordionDetail from "@/components/product/AccordionDetail";
import CommentsSection from "@/components/product/CommenSection";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import CreateButton from "@/components/createButton";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const endpoint = `http://localhost:8000/products/${params.id}`;

  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product: Product = await res.json();

  return (
    <div>
      <div className="w-full lg:px-40 2xl:px-80 bg-FrostGray dark:bg-ShadowBlue">

        <div className="w-full flex justify-end pt-8 opacity-65">
          <Link href="/products">
        <button 
            type="button"
            className="cursor-pointer hover:opacity-75 transition-opacity"
            >
            <IoArrowBackOutline size={32} />
          </button>
            </Link>
        </div>
        <div className="px-12 pt-9 pb-7">
          <div dir="ltr" className="grid md:grid-cols-2  justify-center  gap-12">
            <ImageGallery images={product.images.list} />
            <div className="w-full flex-col" dir="rtl">
              <div className="flex flex-col gap-3">
                <div>
                  <div>
                    <p className="font-light text-xs text-gray-600 dark:text-white/50">BIOAQUA® OFFICIAL STORE</p></div>
                  <div>
                    <h1 className="font-normal text-gray-800 text-5xl dark:text-white/80">{product.titleFa}</h1>
                  </div>
                  <div>
                    <p className="font-normal text-lg ">{product.bestSeller.lastPrice}.000 تومان</p>
                  </div>
                </div>
                <div>
                  {product.specifications.length > 0 &&
                    <>
                      <span className="text-sm font-normal text-GraphiteViole">{product.specifications[0].name}</span>
                      <div className="flex flex-row gap-3 flex-wrap">


                        {product.specifications.map((items, index) => <div key={index}>
                          <CreateButton
                            text={items.title}
                            href="#"
                            className="px-[0.70rem] py-[0.4rem]  bg-white rounded-lg text-sm font-normal border-FogAsh border shadow-md
                             inset-shadow-indigo-900 hover:border-DarkPurple transition-all duration-300 focus:bg-DarkPurple
                              focus:text-white text-StoneLilac focus:border-none"
                          />
                          
                        </div>)}
                      </div>

                    </>}
                </div>
                <div>
                </div>
              </div>
              <ProductDetailCart product={product} />
              <div className="w-[90%]" dir="rtl">
                <hr />
                <AccordionDetail />
              </div>
            </div >
          </div>
          <p dangerouslySetInnerHTML={{ __html: product.expert_reviews }} className="text-sm font-normal text-GraphiteViole/80 py-8 dark:text-white/70"></p >
          <CommentsSection productId={params.id} />

        </div>
      </div>
    </div >
  );
}
