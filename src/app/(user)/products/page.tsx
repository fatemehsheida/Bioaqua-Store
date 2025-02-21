'use client'
import ProductList from "@/components/product/productList";
import CategoryList from "@/components/product/CategoryList";
import {
  ProductsResponse,
  CategoriesResponse,
  Product,
  Category,
} from "@/types/type";
import React, { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [titleFa, setTitleFa] = useState("");
  const [titleEn, setTitleEn] = useState("");

  const productsEndpoint = "http://localhost:8000/products";

  const fetchData = async () => {
    try {


      const queryParams = {
        page: String(page),
        pageSize: String(pageSize),
        ...(category && { category }),
        ...(brand && { brand }),
        ...(titleFa && { titleFa }),
        ...(titleEn && { titleEn }),
      };
      console.log({queryParams})

      const query = new URLSearchParams(queryParams).toString();
      console.log(query)
      const url = `${productsEndpoint}?${query}`;
      console.log({ url })
      console.log(brand)

      const productsRes = await fetch(url, { next: { revalidate: 60 } });
      const productsData: ProductsResponse = await productsRes.json();

      setProducts(productsData.results);
      setTotalPages(productsData.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, category, brand, titleFa, titleEn]);

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setPage(1);
  };
  const handleBrandSelect = (selectedBrand: string) => {
    setBrand(selectedBrand);
    setPage(1);
  };
  const handlePreviousPage = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  console.log(totalPages)
  return (
    <div className="w-full bg-[#F4F3EF] dark:bg-[#21242D]">
      <div className="p-4 bg-white dark:bg-transparent shadow-md">
        <input
          type="text"
          placeholder="Search Persian Title"
          value={titleFa}
          onChange={(e) => setTitleFa(e.target.value)}
          className="p-2 border rounded-md mr-2"
        />
        <input
          type="text"
          placeholder="Search English Title"
          value={titleEn}
          onChange={(e) => setTitleEn(e.target.value)}
          className="p-2 border rounded-md mr-2"
        />
      </div>

      <ProductList products={products}
        onSelectCategory={handleCategorySelect}
        selectedCategory={category}
        onSelectBrand={handleBrandSelect}
        selectedBrand={brand}
      />

      <div className="flex items-center justify-center mb-10 mt-16">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className={`px-4 py-2 text-sm font-medium text-gray-700
             bg-white border border-gray-300 rounded-lg hover:bg-gray-50 
             ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Previous
        </button>

        <span className="text-sm font-medium text-gray-700 mx-4 text-center dark:text-slate-200">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 text-sm font-medium text-gray-700 
             bg-white border border-gray-300 rounded-lg hover:bg-gray-50 
             ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>

      {/* <div className="p-4 flex items-center justify-center">
        <span className="mr-2">Items per page:</span>
        <select
          value={pageSize}
          onChange={(e) =>{
            setPageSize(Number(e.target.value))
            setPage(1)
          }}
          className="p-2 border rounded-md"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div> */}
    </div>
  );
}