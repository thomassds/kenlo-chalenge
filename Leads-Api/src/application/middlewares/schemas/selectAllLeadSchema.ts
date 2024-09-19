import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";

export class SelectAllLeadSchema {
    static rules(): SchemaValidator {
        return {
            query: Joi.object({
                page: Joi.number().min(1).required(),
                perPage: Joi.number().min(1).required(),
                name: Joi.string(),
                phone: Joi.string(),
                email: Joi.string(),
            }),
        };
    }
}
