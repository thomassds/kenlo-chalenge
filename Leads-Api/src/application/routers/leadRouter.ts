import { Router } from "express";
import Container from "typedi";
import { LeadController } from "../controllers";
import { Authenticated, RouterValidator } from "../middlewares";
import {
    AddInteractionSchema,
    CreateLeadSchema,
    DeleteLeadSchema,
    SelectAllLeadSchema,
    SelectOneLeadSchema,
    UpdateLeadSchema,
} from "../middlewares/schemas";

export class LeadRouter {
    static getRouter(): Router {
        const controller = Container.get(LeadController);

        const auth = Container.get(Authenticated);
        const routerValidator = Container.get(RouterValidator);

        const router = Router();
        router.get(
            "/leads",
            auth.execute,
            routerValidator.execute(SelectAllLeadSchema.rules()),
            (req, res) => controller.selectAllLead(req, res)
        );

        router.get(
            "/leads/:id",
            auth.execute,
            routerValidator.execute(SelectOneLeadSchema.rules()),
            (req, res) => controller.selectOneLead(req, res)
        );

        router.post(
            "/leads",
            auth.execute,
            routerValidator.execute(CreateLeadSchema.rules()),
            (req, res) => controller.createLead(req, res)
        );

        router.put(
            "/leads/:id",
            auth.execute,
            routerValidator.execute(UpdateLeadSchema.rules()),
            (req, res) => controller.updateLead(req, res)
        );

        router.delete(
            "/leads/:id",
            auth.execute,
            routerValidator.execute(DeleteLeadSchema.rules()),
            (req, res) => controller.deleteLead(req, res)
        );

        router.post(
            "/leads/:leadId/interactions",
            auth.execute,
            routerValidator.execute(AddInteractionSchema.rules()),
            (req, res) => controller.addInteraction(req, res)
        );

        return router;
    }
}
