import "reflect-metadata";

import request from "supertest";
import { Express } from "express";
import { App } from "../src/main/app";
import { InfraEnvs } from "../src/main/config/envs";

let appInstance: Express;

beforeAll(async () => {
    appInstance = await new App().build();
});

describe("Lead API", () => {
    it("Should create a new lead", async () => {
        const response = await request(appInstance)
            .post("/api/lia/interactions")
            .set("Authorization", `Bearer ${InfraEnvs.server.authSecret}`)
            .send({
                message:
                    "Porque o Thomas deveria ser contratado para o processo seletivo?",
                leadId: "66eb9df69df8435b5aeb3e12",
            });

        expect(response.status).toBe(200);

        expect(response.body).toEqual({
            _id: expect.any(String),
            name: expect.any(String),
            email: expect.any(String),
            phone: expect.any(String),
            interactions: expect.arrayContaining([
                expect.objectContaining({
                    message: expect.any(String),
                    response: expect.any(String),
                    timestamp: expect.any(String),
                }),
            ]),
        });
    }, 20000);
});
