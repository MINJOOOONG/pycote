export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T;
  meta?: PaginationMeta;
  error?: string;
}
