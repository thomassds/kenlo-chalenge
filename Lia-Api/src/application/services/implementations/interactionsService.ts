import Container, { Service } from "typedi";
import { ChatGpt, LeadManager } from "../../../infraestructure/providers";
import { IInteractionsService } from "../contracts";
import { BusinessError } from "../../../main/exceptions";
import { ILead } from "../../interfaces";

@Service()
export class InteractionsService implements IInteractionsService {
    private chatGpt: ChatGpt;
    private leadManager: LeadManager;

    constructor() {
        this.chatGpt = Container.get(ChatGpt);
        this.leadManager = Container.get(LeadManager);
    }

    public async sendMessage(leadId: string, message: string): Promise<ILead> {
        const lead = await this.leadManager.selectOneLead(leadId);
        if (!lead) {
            throw new BusinessError("Lead not found", 404);
        }

        const response = await this.chatGpt.sendMessage(message);
        if (response === null) {
            throw new BusinessError("ChatGPT had no response", 404);
        }

        const result = await this.leadManager.saveInteractions({
            leadId,
            message,
            response,
        });

        return result;
    }
}
