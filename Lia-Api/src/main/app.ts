import * as dotenv from "dotenv";
dotenv.config();

import express, { Express } from "express";

import "express-async-errors";

import Container, { Service } from "typedi";
import { TypeORMConnection } from "../infraestructure/database/connection";
import { AppBodyParse } from "./bodyParse";
import { AppCors } from "./cors";
import { AppRouters } from "./routes";

@Service()
export class App {
    private app: Express;
    private database: TypeORMConnection;

    constructor() {
        this.app = express();
        this.database = Container.get(TypeORMConnection);
    }

    async build() {
        await this.database.connect();

        AppBodyParse.load(this.app);

        AppCors.load(this.app);

        AppRouters.load(this.app);

        AppRouters.loadErrors(this.app);

        return this.app;
    }
}
