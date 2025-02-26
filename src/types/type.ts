export interface Product {
  quantity: unknown;
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
  specifications: [
    {
      name: string,
      title: string,
      value: string,
      _id: number,
      id: number
    }];

  expert_reviews: string;
  createdAt: string;
  updatedAt: string;
  bestSeller: {
    lastPrice: number,
    discount: number,
    count: number,
    id: string,
    seller: {
      user: string,
      name: string,
      slug: string
    }
  },


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

export interface Brand {
  id: string;
  titleFa: string;
  titleEn: string;
  slug: string;
  logo: string;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
}

export interface BrandsResponse {
  results: Brand[];
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
}

interface OrderItem {
  productSeller: string;
  quantity: number;
}

export interface OrderRequest {
  shippingAddress: {
    street: string,
    city: string,
    postalCode: string,
    location: number[]
  }
  deliveryDate: string;
  orderItems: OrderItem[]
}

export interface Order {
  id: string;
  shippingAddress: {
    street: string;
    city: string;
    postalCode: string;
    location: number[];
  };
  user: IUser;
  deliveryDate: string;
  orderStatus: string;
  orderItems: OrderItemType[];
  createdAt: string;
  updatedAt: string;
}

export interface OrderItemType {
  productSeller: {
    product: {
      titleFa: string;
      code: number;
    };
    price: number;
  };
  quantity: number;
}


export interface IUser {
  firstName: string,
  lastName: string,
  email: string,
  role: number,
  isActive: boolean,
  createdAt: string,
  updatedAt: string,
  id: string
}