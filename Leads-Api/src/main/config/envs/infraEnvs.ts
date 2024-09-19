import { Environments } from "../enums";

export class InfraEnvs {
    static readonly server = {
        environment: process.env.NODE_ENV || Environments.DEVELOP,
        port: Number(process.env.PORT || "3333"),
        authSecret: process.env.AUTH_SECRET,
    };

    static readonly database = {
        type: process.env.DATABASE_TYPE,
        url: process.env.DATABASE_URL,
    };
}
