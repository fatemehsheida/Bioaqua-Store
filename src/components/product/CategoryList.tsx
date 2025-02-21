import { Category } from "@/types/type";

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export default function CategoryList({ categories, onSelectCategory, selectedCategory }: CategoryListProps) {
  return (
    <div>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          style={{ fontWeight: selectedCategory === cat.id ? 'bold' : 'normal' }}
        >
          {cat.titleFa}
        </button>
      ))}
    </div>
  );
}