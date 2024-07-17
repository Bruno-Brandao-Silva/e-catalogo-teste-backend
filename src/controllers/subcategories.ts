import { PrismaClient } from '@prisma/client';
import type { Request, Response, NextFunction } from 'express';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    const prisma = new PrismaClient();
    try {
        const subcategories = await prisma.subcategoria.findMany({
            select: {
                nome: true
            },
            orderBy: {
                nome: 'asc'
            }
        });
        const subcategoriesResponse = subcategories.map(subcategorie => subcategorie.nome)
        return res.json(subcategoriesResponse);
    } catch (error) {
        next(error);
    } finally {
        await prisma.$disconnect();
    }
}