import { Express } from "express";
import cors from "cors";

export class AppCors {
    static load(app: Express) {
        try {
            app.use(cors());
        } catch (error) {
            console.info(error);
        }
    }
}
