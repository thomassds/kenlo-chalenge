import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";
import { UnauthenticatedError } from "../../main/exceptions";
import { InfraEnvs } from "../../main/config/envs";

@Service()
export class Authenticated {
    public execute = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const authorizationHeader = req.header("authorization");

        if (!authorizationHeader) {
            throw new UnauthenticatedError("Missing authorization header.");
        }

        const [, token] = authorizationHeader.split(" ");

        if (!token || token === "") {
            throw new UnauthenticatedError("Missing token.");
        }

        if (!token || token !== InfraEnvs.server.authSecret) {
            throw new UnauthenticatedError("Unauthorizated.");
        }

        next();
    };
}
