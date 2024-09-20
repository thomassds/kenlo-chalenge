import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";

export class SendInteractionSchema {
    static rules(): SchemaValidator {
        return {
            body: Joi.object({
                leadId: Joi.string().required(),
                message: Joi.string().required(),
            }),
        };
    }
}
