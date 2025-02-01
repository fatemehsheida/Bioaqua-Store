import { Product } from "@/types/type";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full px-40 bg-[#F1F3F1]">
      <div className="px-12 pt-9 pb-7">
        <div className="grid grid-cols-2 justify-center items-center gap-12">

          <div className="w-full">
            <h1 className="font-normal text-5xl">{product.titleFa}</h1>
            <p>{product.titleEn}</p>
            <p>Brand: {product.brand.titleEn}</p>
            <p className="font-light text-lg">$7.99</p>
          </div >
         
        <div>
            <div>
            <Link href={`/products/${product.code}`}>
              <img src={product.images.main} alt={product.titleEn} className="object-cover h-" />
            </Link>
            </div>
            <div>
            <div className="flex flex-row">
              {product.images.list.map((imageListURL,index) => <div key={index}>
                <img src={imageListURL} className=" w-24 h-24"/>
              </div>)}
              </div>
            </div>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: product.expert_reviews }}></p >
      </div>
      </div>
      );
};

      export default ProductCard;
