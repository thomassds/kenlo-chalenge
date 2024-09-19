import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";

export class CreateLeadSchema {
    static rules(): SchemaValidator {
        return {
            body: Joi.object({
                name: Joi.string().required(),
                email: Joi.string().email().required(),
                phone: Joi.string()
                    .pattern(/^\+\d{1,3}\d{2}\d{8,9}$/)
                    .min(13)
                    .required()
                    .messages({
                        "string.pattern.base":
                            "Phone number must be in the format +[country code][area code][number].",
                    }),
            }),
        };
    }
}
