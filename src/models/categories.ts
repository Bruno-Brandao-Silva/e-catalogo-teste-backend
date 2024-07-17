import { PrismaClient } from '@prisma/client';
import { ICategorie } from '../interfaces/categories';

const prisma = new PrismaClient();

const CategoriesModel = {
    async getAll(): Promise<ICategorie[]> {
        return prisma.categoria.findMany({
            orderBy: {
                nome: 'asc'
            }
        });
    }
}
export default CategoriesModel;