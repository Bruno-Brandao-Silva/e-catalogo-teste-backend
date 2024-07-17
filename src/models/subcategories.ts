import { PrismaClient } from '@prisma/client';
import { ISubcategorie } from '../interfaces/subcategories';

const prisma = new PrismaClient();

const SubcategoriesModel = {
    async getAll(): Promise<ISubcategorie[]> {
        return prisma.subcategoria.findMany({
            orderBy: {
                nome: 'asc'
            }
        });
    }
}

export default SubcategoriesModel;