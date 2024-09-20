import { Request, Response } from "express";

import { Inject, Service } from "typedi";
import { LeadService } from "../services/implementations";
import { ILeadService } from "../services/contracts";

@Service()
export class LeadController {
    constructor(
        @Inject(() => LeadService)
        private readonly leadService: ILeadService
    ) {}

    async selectAllLead(req: Request, res: Response) {
        const query = req.query as any;

        if (query.page) query.page = Number(query.page);

        if (query.perPage) query.perPage = Number(query.perPage);

        const response = await this.leadService.selectAllLead(query);

        return res.status(200).json(response);
    }

    async selectOneLead(req: Request, res: Response) {
        const { id } = req.params;

        const response = await this.leadService.selectOneLead(id);

        return res.status(200).json(response);
    }

    async createLead(req: Request, res: Response) {
        const { name, email, phone } = req.body;

        const response = await this.leadService.createLead({
            name,
            email,
            phone,
        });

        return res.status(201).json(response);
    }

    async updateLead(req: Request, res: Response) {
        const { id } = req.params;

        const response = await this.leadService.updateLead(id, req.body);

        return res.status(200).json(response);
    }

    async deleteLead(req: Request, res: Response) {
        const { id } = req.params;

        const response = await this.leadService.deleteLead(id);

        return res.status(200).json(response);
    }

    async addInteraction(req: Request, res: Response) {
        const { leadId } = req.params;

        const { message, response, timestamp } = req.body;

        const result = await this.leadService.addInteractions(leadId, {
            message,
            response,
            timestamp,
        });

        return res.status(200).json(result);
    }
}
