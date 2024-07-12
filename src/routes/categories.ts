import { Router } from "express";
import { PrismaClient } from '@prisma/client';

const router = Router();

router.get('/', async (req, res, next) => {
    const prisma = new PrismaClient();
    try {
        const categories = await prisma.categoria.findMany({
            select: {
                nome: true
            },
            orderBy: {
                nome: 'asc'
            }
        });
        const categoriesResponse = categories.map(categorie=> categorie.nome)
        res.json(categoriesResponse);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    } finally {
        await prisma.$disconnect();
    }
});

export default router;
