import { Route } from 'vue-router';

export interface IBreadcrumb {
  text: string;
  to: Partial<Route>;
};


export interface IPerPageVariants {
  value: number;
  text: string;
}

export interface IPagination {
  perPageVariants: IPerPageVariants[];
  perPage: number;
  page: number;
  total: number;
  totalPages?: number;
}