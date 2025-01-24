export interface Product {
  id: string;
  images: {
    main: string;
    list: string[];
  };
  code: number;
  titleFa: string;
  titleEn: string;
  status: string;
  badges: string[];
  category: {
    titleEn: string;
    titleFa: string;
    slug: string;
    returnReasonAlert: string;
    properties: unknown;
  };
  brand: {
    titleEn: string;
    titleFa: string;
    slug: string;
    logo: string;
  };
  review: unknown;
  specifications: unknown;
  expert_reviews: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  results: Product[];
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
}

export interface Category {
  id: string;
  titleFa: string;
  titleEn: string;
  slug: string;
  returnReasonAlert: string;
  properties: unknown;
  createdAt: string;
  updatedAt: string;
}
export interface CategoriesResponse {
  results: Category[];
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
}

export interface ProductsPageProps {
  searchParams: {
    page?: string;
    pageSize?: string;
    category?: string;
    brand?: string;
    status?: string;
    titleFa?: string;
    titleEn?: string;
  };
}
