import { Router } from "express";
import { getAll } from "../controllers/subcategories";

const subcategoryRouter = Router();

subcategoryRouter.get('/', getAll);

export default subcategoryRouter;
