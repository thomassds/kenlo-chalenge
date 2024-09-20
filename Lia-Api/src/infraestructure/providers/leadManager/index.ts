import OpenAI from "openai";
import { InfraEnvs } from "../../../main/config/envs";
import { IntegrationError } from "../../../main/exceptions";
import { Service } from "typedi";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ILead } from "../../../application/interfaces";
import { SaveInteractionDTO } from "./leadManagar.dto";

@Service()
export class LeadManager {
    private leadManagerClient: AxiosInstance;

    constructor() {
        this.leadManagerClient = axios.create({
            baseURL: InfraEnvs.leadManager.base_url,
            headers: {
                Authorization: `Bearer ${InfraEnvs.leadManager.apiKey}`,
                "Content-Type": "application/json",
            },
        });
    }

    async selectOneLead(_id: string): Promise<ILead> {
        try {
            const response = await this.leadManagerClient.get<ILead>(
                `/leads/${_id}`
            );

            return response.data;
        } catch (error) {
            console.error("Error fetching lead:", error);
            throw new IntegrationError("Failed to fetch lead", 500);
        }
    }

    async saveInteractions({
        leadId,
        message,
        response,
    }: SaveInteractionDTO): Promise<ILead> {
        try {
            const { data } = await this.leadManagerClient.post<ILead>(
                `/leads/${leadId}/interactions`,
                {
                    message,
                    response,
                    timestamp: new Date().toISOString(),
                }
            );

            return data;
        } catch (error) {
            console.error("Error to save interaction lead:", error);
            throw new IntegrationError("Failed to save interaction lead", 500);
        }
    }
}
