
import { Metadata } from "next";
import ProductList from "@/components/product/productList";
import { ProductsResponse } from "@/types/type";
import updateQueryParams from "@/utils/Query";
import Link from "next/link";

interface CategoryPageProps {
  params: {
    slug: string; // The dynamic slug from the URL
  };
  searchParams: {
    page?: string;
    pageSize?: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  return {
    title: `Products in ${params.slug}`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const productsEndpoint = "http://localhost:8000/products";
  const categorySlug = params.slug;

  const queryParams = {
    page: searchParams.page || "1",
    pageSize: searchParams.pageSize || "16",
    category: categorySlug,
  };


  const query = new URLSearchParams(queryParams).toString();
  const url = `${productsEndpoint}?${query}`;
  console.log(url);
  const res = await fetch(url, { next: { revalidate: 60 } });
  const data: ProductsResponse = await res.json();

  return (
    <div>
      {/* <h1>Products in {categorySlug}</h1> */}


      <ProductList products={data.results} />

      <div className="pagination">
        <Link
          href={`/products/${categorySlug}?${updateQueryParams(
            queryParams,
            "page",
            String(Number(queryParams.page) - 1)
          )}`}
          className={Number(queryParams.page) === 1 ? "disabled" : ""}
        >
          Previous
        </Link>
        <span>Page {queryParams.page}</span>
        <Link
          href={`/products/${categorySlug}?${updateQueryParams(
            queryParams,
            "page",
            String(Number(queryParams.page) + 1)
          )}`}
          className={
            data.results.length < Number(queryParams.pageSize) ? "disabled" : ""
          }
        >
          Next
        </Link>
      </div>
    </div>
  );
}
