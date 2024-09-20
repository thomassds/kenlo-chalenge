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
    let id: string;

    it("Should create a new lead", async () => {
        const response = await request(appInstance)
            .post("/api/leads")
            .set("Authorization", `Bearer ${InfraEnvs.server.authSecret}`)
            .send({
                name: "Thomas Domingos",
                email: "thomasdomingos@kenlo.com.br",
                phone: "+5519981335164",
            });

        expect(response.status).toBe(201);

        expect(response.body).toEqual({
            _id: expect.any(String),
            name: "Thomas Domingos",
            email: "thomasdomingos@kenlo.com.br",
            phone: "+5519981335164",
        });

        id = response.body._id;
    });

    it("Should select one lead", async () => {
        const response = await request(appInstance)
            .get(`/api/leads/${id}`)
            .set("Authorization", `Bearer ${InfraEnvs.server.authSecret}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                _id: expect.any(String),
                name: expect.any(String),
                email: expect.any(String),
                phone: expect.any(String),
            }) || null
        );
    });

    it("Should select all leads with filter and pagination", async () => {
        const response = await request(appInstance)
            .get("/api/leads")
            .query({ name: "Thomas", page: 1, perPage: 10 })
            .set("Authorization", `Bearer ${InfraEnvs.server.authSecret}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                data: expect.arrayContaining([
                    expect.objectContaining({
                        _id: expect.any(String),
                        name: expect.any(String),
                        email: expect.any(String),
                        phone: expect.any(String),
                    }),
                ]),
                totalRows: expect.any(Number),
                totalPages: expect.any(Number),
                perPage: 10,
                page: 1,
            })
        );
    });

    it("Should update a lead", async () => {
        const response = await request(appInstance)
            .put(`/api/leads/${id}`)
            .set("Authorization", `Bearer ${InfraEnvs.server.authSecret}`)
            .send({
                name: "Thomas",
                email: "thomasdomingos@kenlo.com",
                phone: "+5519981335164",
            });

        expect(response.status).toBe(200);
    });

    it("Should add a interaction in lead", async () => {
        const response = await request(appInstance)
            .post(`/api/leads/${id}/interactions`)
            .set("Authorization", `Bearer ${InfraEnvs.server.authSecret}`)
            .send({
                message: "Porque o Thomas deve ser contratado?",
                response:
                    "Porque ele é o candidato mais preparado para solucionar os problemas do mercado imobiliario; Possuindo mais de 2 anos de experiencia com serviços de tecnologias para imobiliarias.",
                timestamp: "2024-09-20T05:00:00.000Z",
            });

        expect(response.status).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                interactions: expect.arrayContaining([
                    expect.objectContaining({
                        message: expect.any(String),
                        response: expect.any(String),
                        timestamp: expect.any(String),
                    }),
                ]),
            })
        );
    });

    it("Should delete a lead", async () => {
        const response = await request(appInstance)
            .put(`/api/leads/${id}`)
            .set("Authorization", `Bearer ${InfraEnvs.server.authSecret}`)
            .send({
                name: "Thomas",
                email: "thomasdomingos@kenlo.com",
                phone: "+5519981335164",
            });

        expect(response.status).toBe(200);
    });
});
