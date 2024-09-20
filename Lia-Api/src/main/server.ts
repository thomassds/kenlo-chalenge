import { Express } from "express";
import { InfraEnvs } from "./config/envs";

export class Server {
    static async init(app: Express) {
        app.listen(InfraEnvs.server.port, () =>
            console.info(`Aplication started on ${InfraEnvs.server.port}`)
        );
    }
}
