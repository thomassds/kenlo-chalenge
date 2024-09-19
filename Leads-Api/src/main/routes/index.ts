import express, {
    Router,
    NextFunction,
    Request,
    Response,
    Express,
    json,
} from "express";

import * as swaggerUi from "swagger-ui-express";
import * as YAMLJS from "yamljs";

import { BusinessError } from "../exceptions/businessError";
import { UnprocessedEntityError } from "../exceptions/unprocessedEntityError";
import { AppError } from "../exceptions/appError";
import { getRoutes } from "../../application/routers";

interface dataInterface {
    message: string;
    internalCode: number | undefined;
}

export class AppRouters {
    static load(app: Express) {
        try {
            const router = Router();

            router.use("/api", getRoutes());

            const swaggerDocument = YAMLJS.load("./docs/api.yml");

            router.use("^/$", (req, res) => {
                return res.redirect("/api-docs");
            });
            router.use(
                "/api-docs",
                swaggerUi.serve,
                swaggerUi.setup(swaggerDocument)
            );

            app.use(router);
        } catch (error) {
            console.info(error);
        }
    }

    static loadErrors(app: Express) {
        app.use(
            (
                error: Error,
                request: Request,
                response: Response,
                next: NextFunction
            ) => {
                console.error(new Date(), error);

                if (error instanceof AppError) {
                    console.error(new Date(), "Previous:", error.getPrevious());

                    if (error instanceof UnprocessedEntityError) {
                        return response.status(error.getStatusCode()).json({
                            errors: error.getErrors(),
                        });
                    }

                    const data: dataInterface = {
                        message: error.message,
                        internalCode: undefined,
                    };

                    if (error instanceof BusinessError) {
                        data.internalCode = error.getAppInternalCode();
                    }

                    return response.status(error.getStatusCode()).json(data);
                }

                return response.status(500).json({
                    message: "Something broke!",
                });
            }
        );
    }
}
