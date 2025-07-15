import React from "react";
import ProductCard from './productCard';
import { Category, Product } from "@/types/type";
import FilterBar from "./FilterBar";

interface ProductListProps {
  products: Product[];
    onSelectCategory: (categoryId: string) => void;
    selectedCategory: string;
    onSelectBrand: (brandId: string) => void;
    selectedBrand: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelectCategory,
   selectedCategory,
  onSelectBrand,selectedBrand  }) => {
  return (
    <div className="product-list w-full bg-FrostGray dark:bg-transparent flex flex-row flex-wrap lg:px-40 2xl:px-64 items-center justify-center ">
      <FilterBar  
        onSelectCategory={onSelectCategory} 
        selectedCategory={selectedCategory}
        onSelectBrand={onSelectBrand} 
        selectedBrand={selectedBrand}
        />
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
