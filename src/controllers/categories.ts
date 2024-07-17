import type { Request, Response, NextFunction } from 'express';
import CategoriesModel from '../models/categories';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const categories = await CategoriesModel.getAll();
        const categoriesResponse = categories.map(categorie => categorie.nome)
        return res.json(categoriesResponse);
    } catch (error) {
        next(error);
    }
}