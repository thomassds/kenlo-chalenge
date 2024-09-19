import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Lead } from "../../entities";
import { FindManyOptions, FindOneOptions } from "typeorm";
import { PaginatedResponse } from "../../interfaces/bases";
import { CreateLeadDTO } from "../../dtos/leads/createLead.dto";
import { ObjectId } from "mongodb";

export interface ILeadRepository {
    selectOne(options: FindOneOptions): Promise<Lead | null>;
    selectAll(options: FindManyOptions): Promise<PaginatedResponse<Lead>>;
    createLead(data: CreateLeadDTO): Promise<Lead>;
    updateLead(id: ObjectId, data: QueryDeepPartialEntity<Lead>): Promise<void>;
    deleteLead(id: ObjectId): Promise<void>;
}
