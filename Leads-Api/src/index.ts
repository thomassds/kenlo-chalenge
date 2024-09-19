import * as dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";

import { Express } from "express";
import { App } from "./main/app";
import { Server } from "./main/server";

class Bootstrap {
    static async main() {
        const app: Express = await new App().build();

        Server.init(app);
    }
}

Bootstrap.main();
