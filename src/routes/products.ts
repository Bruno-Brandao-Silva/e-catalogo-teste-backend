import { Router } from "express";
import { PrismaClient } from '@prisma/client';

const router = Router();

router.get('/id/:id', async (req, res, next) => {
    const prisma = new PrismaClient();
    try {

        const id = Number(req.params.id);
        if (isNaN(id) || id < 1) {
            return res.status(400).json({ error: 'ID inválido' });
        }

        const product = await prisma.produto.findUnique({
            where: {
                id
            },
            include: {
                categorias: {
                    select: {
                        categoria: {
                            select: {
                                nome: true
                            }
                        },
                    },
                    orderBy: {
                        categoria: {
                            nome: 'asc'
                        }
                    }
                },
                subcategorias: {
                    select: {
                        subcategoria: {
                            select: {
                                nome: true,
                            },
                        },
                    },
                    orderBy: {
                        subcategoria: {
                            nome: 'asc'
                        }
                    }
                },
                cores: {
                    select: {
                        cor: {
                            select: {
                                nome: true
                            }
                        }
                    },
                    orderBy: {
                        cor: {
                            nome: 'asc'
                        }
                    }
                },
                tamanhos: {
                    select: {
                        nome: true,
                        quantidade: true
                    },
                    orderBy: {
                        quantidade: 'asc'
                    }
                }
            },
        })

        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        const productResponse = {
            id: product.id,
            nome: product.nome,
            marca: product.marca,
            descricao: product.descricao,
            preco: product.preco,
            imagem: product.imagem,
            categorias: product.categorias.map(categoria => categoria.categoria.nome),
            subcategorias: product.subcategorias.map(subcategoria => subcategoria.subcategoria.nome),
            cores: product.cores.map(cor => cor.cor.nome),
            tamanhos: product.tamanhos.map(tamanho => ({
                nome: tamanho.nome,
                quantidade: tamanho.quantidade
            }))
        }

        res.json(productResponse);

    } catch (error) {
        next(error);
    } finally {
        await prisma.$disconnect();
    }
});

router.get('/page/:page', async (req, res, next) => {
    const prisma = new PrismaClient();
    try {
        const page = Number(req.params.page);
        if (isNaN(page) || page < 1) {
            return res.status(400).json({ error: 'Número de página inválido' });
        }

        const products = await prisma.produto.findMany({
            skip: (page - 1) * 5,
            take: 5,
            include: {
                categorias: {
                    select: {
                        categoria: {
                            select: {
                                nome: true
                            }
                        },
                    },
                    orderBy: {
                        categoria: {
                            nome: 'asc'
                        }
                    }
                },
                subcategorias: {
                    select: {
                        subcategoria: {
                            select: {
                                nome: true,
                            },
                        },
                    },
                    orderBy: {
                        subcategoria: {
                            nome: 'asc'
                        }
                    }
                },
                cores: {
                    select: {
                        cor: {
                            select: {
                                nome: true
                            }
                        }
                    },
                    orderBy: {
                        cor: {
                            nome: 'asc'
                        }
                    }
                },
                tamanhos: {
                    select: {
                        nome: true,
                        quantidade: true
                    },
                    orderBy: {
                        quantidade: 'asc'
                    }
                }
            }
        });

        if (products.length === 0) {
            return res.status(404).json({ error: 'Nenhum produto encontrado' });
        }
        const productsResponse = products.map(product => ({
            id: product.id,
            nome: product.nome,
            marca: product.marca,
            descricao: product.descricao,
            preco: product.preco,
            imagem: product.imagem,
            categorias: product.categorias.map(categoria => categoria.categoria.nome),
            subcategorias: product.subcategorias.map(subcategoria => subcategoria.subcategoria.nome),
            cores: product.cores.map(cor => cor.cor.nome),
            tamanhos: product.tamanhos.map(tamanho => ({
                nome: tamanho.nome,
                quantidade: tamanho.quantidade
            }))
        }));
        res.json(productsResponse);
    } catch (error) {
        next(error);
    } finally {
        await prisma.$disconnect();
    }
});


export default router;