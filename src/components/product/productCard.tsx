import { Product } from "@/types/type";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="">
      <Link href={`/products/${product.code}`}>
        <img src={product.images.main} alt={product.titleEn} />
      </Link>
        <h3>{product.titleFa}</h3>

      <p>{product.titleEn}</p>
      <p>Brand: {product.brand.titleEn}</p>
      <p>Status: {product.status}</p>
      <p>{product.expert_reviews}</p>
    </div>
  );
};

export default ProductCard;
