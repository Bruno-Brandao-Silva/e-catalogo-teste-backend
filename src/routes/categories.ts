import { Router } from "express";
import { getAll } from "../controllers/categories";

const categoryRouter = Router();

categoryRouter.get('/', getAll);

export default categoryRouter;
