import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";

export class AddInteractionSchema {
    static rules(): SchemaValidator {
        return {
            params: Joi.object({
                leadId: Joi.string().required(),
            }),
            body: Joi.object({
                message: Joi.string().required(),
                response: Joi.string().required(),
                timestamp: Joi.date().required(),
            }),
        };
    }
}
