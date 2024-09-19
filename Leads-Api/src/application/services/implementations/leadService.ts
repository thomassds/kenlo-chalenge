import { Inject, Service } from "typedi";
import {
    CreateLeadDTO,
    SelectAllLeadDTO,
    SelectOneLeadDTO,
    UpdateLeadDTO,
} from "../../dtos";
import { Lead } from "../../entities";
import { ILeadService } from "../contracts";
import { LeadRepository } from "../../repositories/implementations";
import { ILeadRepository } from "../../repositories/contracts";
import { PaginatedResponse } from "../../interfaces/bases";
import { ObjectId } from "mongodb";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

@Service()
export class LeadService implements ILeadService {
    constructor(
        @Inject(() => LeadRepository)
        private readonly leadRepository: ILeadRepository
    ) {}

    async selectAllLead(
        data: SelectAllLeadDTO
    ): Promise<PaginatedResponse<Lead>> {
        let where: { name?: RegExp; phone?: RegExp; email?: RegExp } = {};

        if (data.name) where.name = new RegExp(data.name, "i");

        if (data.phone) where.phone = new RegExp(data.phone, "i");

        if (data.email) where.email = new RegExp(data.email, "i");

        const skip = data.page ? (data.page - 1) * (data.perPage || 1) : 0;

        const take = data.perPage || 10;

        const response = await this.leadRepository.selectAll({
            where,
            skip,
            take,
        });

        return response;
    }

    async selectOneLead(id: string): Promise<Lead | null> {
        const response = await this.leadRepository.selectOne({
            where: { _id: new ObjectId(id) },
        });

        return response;
    }

    async createLead(data: CreateLeadDTO): Promise<Lead> {
        const response = await this.leadRepository.createLead(data);

        return response;
    }

    async updateLead(id: string, data: UpdateLeadDTO): Promise<void> {
        const response = await this.leadRepository.updateLead(
            new ObjectId(id),
            data
        );

        return response;
    }

    async deleteLead(id: string): Promise<void> {
        const response = await this.leadRepository.deleteLead(new ObjectId(id));

        return response;
    }
}
