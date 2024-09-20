import { Router } from "express";
import Container, { Service } from "typedi";
import { InteractionsController } from "../controllers";
import { Authenticated, RouterValidator } from "../middlewares";
import { SendInteractionSchema } from "../middlewares/schemas";

@Service()
export class InteractionRouter {
    static getRouter(): Router {
        const controller = Container.get(InteractionsController);

        const auth = Container.get(Authenticated);
        const routerValidator = Container.get(RouterValidator);

        const router = Router();
        router.post(
            "/interactions",
            auth.execute,
            routerValidator.execute(SendInteractionSchema.rules()),
            (req, res) => controller.sendMessage(req, res)
        );

        return router;
    }
}
