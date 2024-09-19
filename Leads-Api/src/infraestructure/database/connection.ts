import * as path from "path";
import { DataSource } from "typeorm";
import { Service } from "typedi";
import { InfraEnvs } from "../../main/config/envs";

type DatabaseType = "mongodb";

export interface IDBConnection {
    instance: DataSource;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

@Service()
export class TypeORMConnection implements IDBConnection {
    private _instance: DataSource;

    constructor() {
        this._instance = new DataSource({
            type: InfraEnvs.database.type as DatabaseType,
            url: InfraEnvs.database.ulr,
            logging: false,
            entities: [path.join("dist", "application", "entities", "*.js")],
        });
    }

    async connect(): Promise<void> {
        await this._instance.initialize();
    }

    async disconnect(): Promise<void> {
        await this._instance.destroy();
    }

    public get instance(): DataSource {
        return this._instance;
    }
}
