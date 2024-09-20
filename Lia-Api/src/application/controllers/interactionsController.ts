import { Request, Response } from "express";

import { Inject, Service } from "typedi";
import { InteractionsService } from "../services/implementations";
import { IInteractionsService } from "../services/contracts";

@Service()
export class InteractionsController {
    constructor(
        @Inject(() => InteractionsService)
        private readonly interactionsService: IInteractionsService
    ) {}

    async sendMessage(req: Request, res: Response) {
        const { leadId, message } = req.body;

        const response = await this.interactionsService.sendMessage(
            leadId,
            message
        );

        return res.status(200).json(response);
    }
}
