export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
    QuantityInCart?: 0;
  }
  
  export interface Dimensions {
    width: number;
    height: number;
    depth: number;
  }
  
  export interface Review {
    rating: number;
    comment: string;
    date: string; // ISO 8601 date string
    reviewerName: string;
    reviewerEmail: string;
  }
  
  export interface Meta {
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    barcode: string;
    qrCode: string;
  }
  