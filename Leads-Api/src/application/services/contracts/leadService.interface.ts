import { Lead } from "../../entities";
import {
    SelectOneLeadDTO,
    SelectAllLeadDTO,
    CreateLeadDTO,
    UpdateLeadDTO,
} from "../../dtos";
import { PaginatedResponse } from "../../interfaces/bases";

export interface ILeadService {
    selectOneLead(id: string): Promise<Lead | null>;
    selectAllLead(data: SelectAllLeadDTO): Promise<PaginatedResponse<Lead>>;
    createLead(where: CreateLeadDTO): Promise<Lead>;
    updateLead(id: string, data: UpdateLeadDTO): Promise<void>;
    deleteLead(id: string): Promise<void>;
}
