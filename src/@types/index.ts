export interface ComponentType {
  children: React.ReactNode;
}

export interface FieldType {
  email?: string;
  password?: string;
}

export interface FieldRegisterType {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
}

export interface CategoryType {
  count: number;
  created_at?: string;
  created_by?: string;
  route_path?: string;
  title?: string;
  _id?: number;
}

export interface QueryType<T> {
  isError?: boolean;
  isLoading?: boolean;
  data?: T;
}

export interface DiscountType {
  id: number;
  title: string;
  discoount_up_to: number;
  poster_image_url: string;
}

export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface CardType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  discount: boolean;
  detailed_images: string[];
  discount_price: "12";
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: [];
  title: string;
  views: number;
  _id: string;
}

export interface CardDataType extends CardType{
    counter:number
    userPrice:number
}