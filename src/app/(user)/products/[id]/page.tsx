import { Product } from "@/types/type";

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
      <h1>{product.titleFa}</h1>
      <h2>{product.titleEn}</h2>

      <img src={product.images.main} alt={product.titleEn} />

      <div>
        {product.images.list.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.titleEn} ${index + 1}`}
          />
        ))}
      </div>

      <div>
        <p>Code: {product.code}</p>
        <p>Status: {product.status}</p>
        <p>Expert Reviews: {product.expert_reviews}</p>
        <p>Created At: {new Date(product.createdAt).toLocaleDateString()}</p>
        <p>Updated At: {new Date(product.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
