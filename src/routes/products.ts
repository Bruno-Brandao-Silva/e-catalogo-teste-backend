import { Router } from "express";
import { getById, getbyPage } from "../controllers/products";
const productRouter = Router();

productRouter.get('/id/:id', getById);

productRouter.get('/page/:page', getbyPage);


export default productRouter;