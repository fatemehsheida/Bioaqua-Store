'use client'
import ProductList from "@/components/product/productList";
import CategoryList from "@/components/product/CategoryList";
import {
  ProductsResponse,
  CategoriesResponse,
  ProductsPageProps,
  Product,
  Category,
} from "@/types/type";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import updateQueryParams from '@/utils/Query'



export default function ProductsPage({
}: ProductsPageProps) {
  const searchParams = useSearchParams()
  const productsEndpoint = "http://localhost:8000/products";
  const categoriesEndpoint = "http://localhost:8000/categories";


  const [categories, setCategories] = useState<Category[] | []>([])
  const [products, setProducts] = useState<Product[] | []>([])
  const [totalPages, setTotalPages] = useState(0)

  const queryParams = {
    page: searchParams.get('page') || "1",
    pageSize: searchParams.get('pageSize') || "5",
    category: searchParams.get('category') || "",
    status: searchParams.get('status') || "",
    titleFa: searchParams.get('titleFa') || "",
    titleEn: searchParams.get('titleEn') || "",
  };

  const filteredQueryParams = Object.fromEntries(
    Object.entries(queryParams).filter(([key, value]) => value !== "")
  );
  const fetchData = async () => {
    const [categoriesRes] = await Promise.all([fetch(categoriesEndpoint)]);
    const categoriesData: CategoriesResponse = await categoriesRes.json();
    const query = new URLSearchParams(filteredQueryParams).toString();
    const url = `${productsEndpoint}?${query}`;
    const res = await fetch(url, { next: { revalidate: 60 } });

    const data: ProductsResponse = await res.json();
    setProducts(data.results)
    setTotalPages(data.totalPages)
    setCategories(categoriesData.results)
  }
  useEffect(() => {
    fetchData()
  }, [searchParams])

  console.log(totalPages)
  return (
    <div className="w-full bg-[#F4F3EF]">
      {/* <h1>Product List</h1> */}
      <CategoryList categories={categories} />
      <ProductList products={products} />
      <div className="flex items-center justify-center space-x-4">
        <Link
          href={`/products?${updateQueryParams(
            filteredQueryParams,
            "page",
            String(Number(queryParams.page) - 1)
          )}`}
          className={`px-4 py-2 text-sm font-medium text-gray-700
             bg-white border border-gray-300 rounded-lg hover:bg-gray-50 ${Number(queryParams.page) == 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Previous
        </Link>
        <span className="text-sm font-medium text-gray-700">
          Page {queryParams.page}
        </span>
        <Link
          href={`/products?${updateQueryParams(
            filteredQueryParams,
            "page",
            String(Number(queryParams.page) + 1)
          )}`}
          className={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 ${totalPages == Number(queryParams.pageSize) ? "opacity-50 cursor-not-allowed " : ""
            }`}
        >
          Next
        </Link>
      </div>



    </div>
  );
}
