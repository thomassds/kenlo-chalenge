import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { ILeadRepository } from "../contracts";
import { Lead } from "../../entities";
import { AddInteractionDTO, CreateLeadDTO } from "../../dtos";
import { PaginatedResponse } from "../../interfaces/bases";
import { TypeORMConnection } from "../../../infraestructure/database/connection";
import Container, { Service } from "typedi";
import { ObjectId } from "mongodb";
import { DatabaseError } from "../../../main/exceptions";

@Service()
export class LeadRepository implements ILeadRepository {
    private repository: Repository<Lead>;

    private dataSource: TypeORMConnection;

    constructor() {
        this.dataSource = Container.get(TypeORMConnection);

        this.repository = this.dataSource.instance.getRepository(Lead);
    }

    async selectAll(
        options: FindManyOptions
    ): Promise<PaginatedResponse<Lead>> {
        try {
            const [data, count] = await this.repository.findAndCount(options);

            return {
                data,
                totalRows: count,
                totalPages: options.skip ? Math.ceil(count / options.skip) : 1,
                perPage: options.take || data.length,
                page: (options?.skip || 0) / (options?.take || 0) + 1,
            };
        } catch (error) {
            throw new DatabaseError("Fail to get all Leads");
        }
    }

    async selectOne(options: FindOneOptions): Promise<Lead | null> {
        try {
            const response = await this.repository.findOne(options);

            return response;
        } catch (error) {
            throw new DatabaseError("Fail to get this Lead");
        }
    }

    async createLead(data: CreateLeadDTO): Promise<Lead> {
        try {
            const response = await this.repository.save(data);

            return response;
        } catch (error) {
            throw new DatabaseError("Fail to create this Lead");
        }
    }

    async updateLead(
        id: ObjectId,
        data: QueryDeepPartialEntity<Lead>
    ): Promise<void> {
        try {
            await this.repository.update({ _id: id }, data);

            return;
        } catch (error) {
            throw new DatabaseError("Fail to update this Lead");
        }
    }

    async deleteLead(id: ObjectId): Promise<void> {
        try {
            await this.repository.delete({ _id: id });

            return;
        } catch (error) {
            throw new DatabaseError("Fail to delete this Lead");
        }
    }

    async addInteraction(
        leadId: ObjectId,
        interaction: AddInteractionDTO
    ): Promise<Lead | null> {
        const lead = await this.selectOne({
            where: { _id: leadId },
        });
        if (!lead) {
            throw new DatabaseError("Fail to add interaction - Lead not found");
        }

        if (!lead.interactions) {
            lead.interactions = [];
        }

        lead.interactions.push(interaction);

        await this.repository.save(lead);

        return lead;
    }
}
