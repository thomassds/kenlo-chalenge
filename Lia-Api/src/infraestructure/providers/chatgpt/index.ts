import OpenAI from "openai";
import { InfraEnvs } from "../../../main/config/envs";
import { IntegrationError } from "../../../main/exceptions";
import { Service } from "typedi";

@Service()
export class ChatGpt {
    private client: OpenAI;

    constructor() {
        this.client = new OpenAI({
            apiKey: InfraEnvs.openai.apiKey,
        });
    }

    async sendMessage(message: string): Promise<string | null> {
        try {
            const response = await this.client.chat.completions.create({
                model: "gpt-4o",
                messages: [{ role: "user", content: message }],
            });

            return response.choices[0].message.content;
        } catch (error) {
            console.error("Error communicating with ChatGPT API:", error);

            throw new IntegrationError(
                "Failed to get response from ChatGPT",
                500
            );
        }
    }
}
