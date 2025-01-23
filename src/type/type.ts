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
    category:
      | {
          titleEn: string;
          titleFa: string;
          slug: string;
          returnReasonAlert: string;
          properties: any;
        }
      | string;
    brand:
      | {
          titleEn: string;
          titleFa: string;
          slug: string;
          logo: string;
        }
      | string;
    review: any;
    specifications: any;
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
  export interface Brand {
    id: string; // Unique identifier for the brand
    titleFa: string; // Persian title of the brand
    titleEn: string; // English title of the brand
    slug: string; // URL-friendly slug for the brand
    logo: string; // URL of the brand's logo image
    createdAt: string; // Timestamp when the brand was created
    updatedAt: string; // Timestamp when the brand was last updated
  }
  export interface BrandsResponse {
    results: Brand[]; // Array of brand objects
    total: number; // Total number of brands
    totalPages: number; // Total number of pages
    page: number; // Current page number
    pageSize: number; // Number of brands per page
  }
  // types/category.ts
  export interface Category {
    id: string; // Unique identifier for the category
    titleFa: string; // Persian title of the category
    titleEn: string; // English title of the category
    slug: string; // URL-friendly slug for the category
    returnReasonAlert: string; // Alert message for return reasons
    properties: any; // Array of properties (can be further typed if needed)
    createdAt: string; // Timestamp when the category was created
    updatedAt: string; // Timestamp when the category was last updated
  }
  export interface CategoriesResponse {
    results: Category[]; // Array of category objects
    total: number; // Total number of categories
    totalPages: number; // Total number of pages
    page: number; // Current page number
    pageSize: number; // Number of categories per page
  }
  
  export interface ProductsPageProps {
    searchParams: {
      page?: string;
      pageSize?: string;
      category?: string; // Filter by category slug
      brand?: string; // Filter by brand slug
      status?: string; // Filter by product status
      titleFa?: string; // Filter by Persian title
      titleEn?: string; // Filter by English title
      // Add other query parameters here
    };
  }