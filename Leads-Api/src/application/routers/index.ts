import { Router } from "express";
import { LeadRouter } from "./leadRouter";

export const getRoutes = () => {
    const router = Router();

    const routers = [LeadRouter];

    routers.forEach((routerClass) => {
        router.use(routerClass.getRouter());
    });

    return router;
};
