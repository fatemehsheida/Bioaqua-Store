import ProductList from "@/components/ui/product/productList";
import CategoryList from "@/components/ui/product/CategoryList";
import updateQueryParams from "@/utils/Query";
import {
  ProductsResponse,
  CategoriesResponse,
  ProductsPageProps,
} from "@/types/type";
import Link from "next/link";



export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const productsEndpoint = "http://localhost:8000/products";
  const categoriesEndpoint = "http://localhost:8000/categories";

  const [categoriesRes] = await Promise.all([fetch(categoriesEndpoint)]);
  const categoriesData: CategoriesResponse = await categoriesRes.json();
  const categories = categoriesData.results;

  const queryParams = {
    page: searchParams.page || "1",
    pageSize: searchParams.pageSize || "16",
    category: searchParams.category || "",
    status: searchParams.status || "",
    titleFa: searchParams.titleFa || "",
    titleEn: searchParams.titleEn || "",
  };

  const filteredQueryParams = Object.fromEntries(
    Object.entries(queryParams).filter(([key, value]) => value !== "")
  );

  const query = new URLSearchParams(filteredQueryParams).toString();
  const url = `${productsEndpoint}?${query}`;
  console.log(url);
  const res = await fetch(url, { next: { revalidate: 60 } });

  const data: ProductsResponse = await res.json();

  return (
    <div>
      <h1>Product List</h1>
      <CategoryList categories={categories} />
      <ProductList products={data.results} />
      <div className="pagination">
        <Link
          href={`/products?${updateQueryParams(
            filteredQueryParams,
            "page",
            String(Number(queryParams.page) - 1)
          )}`}
          className={Number(queryParams.page) === 1 ? "disabled" : ""}
        >
          Previous
        </Link>
        <span>Page {queryParams.page}</span>
        <Link
          href={`/products?${updateQueryParams(
            filteredQueryParams,
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
