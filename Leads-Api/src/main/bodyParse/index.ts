import express, { Express } from "express";

export class AppBodyParse {
    static load(app: Express) {
        try {
            app.use(express.json());
        } catch (error) {
            console.info(error);
        }
    }
}
