import Link from "next/link";

interface Category {
  titleEn: string;
  titleFa: string;
  slug: string;
  id: string;
}

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <div>
      {/* <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/products/category/${category.slug}`} // Link to the dynamic category page
              className="category-link"
            >
              {category.titleFa} ({category.titleEn})
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
