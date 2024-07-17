import { Router } from "express";

import categoryRouter from './categories';
import productRouter from './products';
import subcategoryRouter from './subcategories';


const routes = Router();

routes.use('/categorias', categoryRouter);
routes.use('/produtos', productRouter);
routes.use('/subcategorias', subcategoryRouter);

export default routes;