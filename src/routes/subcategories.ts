import { Router } from "express";
import { PrismaClient } from '@prisma/client';

const router = Router();

router.get('/', async (req, res, next) => {
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
        const subcategoriesResponse = subcategories.map(subcategorie=> subcategorie.nome)
        res.json(subcategoriesResponse);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar subcategorias' });
    } finally {
        await prisma.$disconnect();
    }
});

export default router;
