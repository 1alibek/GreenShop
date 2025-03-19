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
  data?:T

}

export interface DiscountType {
id:number
title:string
discoount_up_to:number
poster_image_url:string

}