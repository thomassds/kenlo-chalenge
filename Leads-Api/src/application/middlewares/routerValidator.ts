import * as Joi from "joi";
import { ValidationError } from "joi";
import { Request, Response, NextFunction } from "express";
import { UnprocessedEntityError } from "../../main/exceptions";
import { Service } from "typedi";

export interface SchemaValidator {
    body?: Joi.Schema;
    query?: Joi.Schema;
    params?: Joi.Schema;
}
interface ValidationResult {
    bodyError?: ValidationError;
    queryError?: ValidationError;
    parameterError?: ValidationError;
}

@Service()
export class RouterValidator {
    execute(schema: SchemaValidator) {
        return (req: Request, res: Response, next: NextFunction) => {
            const validateResult: ValidationResult = {};
            if (schema.body) {
                let validatedData = schema.body.validate(req.body);

                if (!validatedData.error) {
                    req.body = {
                        ...validatedData.value,
                        ...{ _originalData: req.body },
                    };
                }

                validateResult.bodyError = validatedData.error;
            }

            if (schema.query) {
                validateResult.queryError = schema.query.validate(
                    req.query
                ).error;
            }
            if (schema.params) {
                validateResult.parameterError = schema.params.validate(
                    req.params
                ).error;
            }

            const valid =
                !validateResult.bodyError &&
                !validateResult.parameterError &&
                !validateResult.queryError;

            if (valid) {
                next();
            } else {
                const details = (
                    validateResult.bodyError
                        ? validateResult.bodyError.details
                        : []
                )
                    .concat(
                        validateResult.parameterError
                            ? validateResult.parameterError.details
                            : []
                    )
                    .concat(
                        validateResult.queryError
                            ? validateResult.queryError.details
                            : []
                    );
                const messages = details.map(
                    (i: { message: string }) => i.message
                );

                console.warn(`Route validation error: ${messages.join("; ")}`);

                return next(new UnprocessedEntityError(messages));
            }
        };
    }
}
