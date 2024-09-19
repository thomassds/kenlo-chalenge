export interface PaginatedResponse<T> {
    data: T[];
    totalRows: number;
    totalPages: number;
    page: number | null;
    perPage: number | null;
}
