import { ILead } from "../../interfaces";

export interface IInteractionsService {
    sendMessage(leadId: string, message: string): Promise<ILead>;
}
