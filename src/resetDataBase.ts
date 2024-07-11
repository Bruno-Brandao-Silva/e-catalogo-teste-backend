import { PrismaClient } from '@prisma/client';
import produtosPreset from './produtosPreset';

async function main(prisma: PrismaClient) {
    await prisma.produto.deleteMany({});
    await prisma.tamanho.deleteMany({});
    await prisma.subcategoria.deleteMany({});
    await prisma.categoria.deleteMany({});
    await prisma.cor.deleteMany({});
    for (const produto of produtosPreset) {
        await prisma.produto.create({
            data: {
                nome: produto.nome,
                marca: produto.marca,
                descricao: produto.descricao,
                preco: produto.preco,
                imagem: produto.imagem,
                categorias: {
                    create: produto.categorias.map((categoria: string) => ({
                        categoria: {
                            connectOrCreate: {
                                where: { nome: categoria },
                                create: { nome: categoria }
                            }
                        }
                    }))
                },
                subcategorias: {
                    create: produto.subcategorias.map((subcategoria: string) => ({
                        subcategoria: {
                            connectOrCreate: {
                                where: { nome: subcategoria },
                                create: { nome: subcategoria }
                            }
                        }
                    }))
                },
                cores: {
                    create: produto.cores.map((cor: string) => ({
                        cor: {
                            connectOrCreate: {
                                where: { nome: cor },
                                create: { nome: cor }
                            }
                        }
                    }))
                },
                tamanhos: {
                    create: produto.tamanhos.map((tamanho) => ({
                        nome: tamanho.nome,
                        quantidade: tamanho.quantidade
                    }))
                }
            }
        });
    };
}



export default async () => {
    const prisma = new PrismaClient();
    try {
        await main(prisma);
    } catch (e) {
        throw e;
    } finally {
        await prisma.$disconnect();
    }
};
