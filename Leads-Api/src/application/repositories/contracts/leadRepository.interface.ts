import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Lead } from "../../entities";
import { FindManyOptions, FindOneOptions } from "typeorm";
import { PaginatedResponse } from "../../interfaces/bases";
import { ObjectId } from "mongodb";
import { CreateLeadDTO, AddInteractionDTO } from "../../dtos";

export interface ILeadRepository {
    selectOne(options: FindOneOptions): Promise<Lead | null>;
    selectAll(options: FindManyOptions): Promise<PaginatedResponse<Lead>>;
    createLead(data: CreateLeadDTO): Promise<Lead>;
    updateLead(id: ObjectId, data: QueryDeepPartialEntity<Lead>): Promise<void>;
    deleteLead(id: ObjectId): Promise<void>;

    addInteraction(
        leadId: ObjectId,
        interaction: AddInteractionDTO
    ): Promise<Lead | null>;
}
