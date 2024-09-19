import { PaginatedDTO } from "../bases";

export interface SelectAllLeadDTO extends PaginatedDTO {
    id?: string;
    name?: string | RegExp;
    email?: string | RegExp;
    phone?: string | RegExp;
}
