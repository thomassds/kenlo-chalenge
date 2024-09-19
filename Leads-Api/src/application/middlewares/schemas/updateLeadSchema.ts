import * as Joi from "joi";
import { SchemaValidator } from "../routerValidator";

export class UpdateLeadSchema {
    static rules(): SchemaValidator {
        return {
            params: Joi.object({ id: Joi.string().required() }),
            body: Joi.object({
                name: Joi.string(),
                email: Joi.string().email(),
                phone: Joi.string()
                    .pattern(/^\+\d{1,3}\d{2}\d{8,9}$/)
                    .min(13)
                    .messages({
                        "string.pattern.base":
                            "Phone number must be in the format +[country code][area code][number].",
                    }),
            }),
        };
    }
}
