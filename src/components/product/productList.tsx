import React from "react";
import ProductCard from './productCard';
import { Product } from "@/types/type";
import FilterBar from "./FilterBar";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list w-full bg-[#F1F3F1] flex flex-row flex-wrap lg:px-40 2xl:px-72 items-center justify-center ">
      <FilterBar />
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
