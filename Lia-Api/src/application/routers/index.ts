import { Router } from "express";
import { InteractionRouter } from "./interactionRouter";

export const getRoutes = () => {
    const router = Router();

    const routers = [InteractionRouter];

    routers.forEach((routerClass) => {
        router.use(routerClass.getRouter());
    });

    return router;
};
