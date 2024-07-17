import { PrismaClient } from '@prisma/client';
import { IProduct } from '../interfaces/products';

const prisma = new PrismaClient();

const ProductsModel = {
    async getById(id: number): Promise<IProduct | null> {
        return await prisma.produto.findUnique({
            where: {
                id
            },
            include: {
                categorias: {
                    select: {
                        categoria: true
                    },
                    orderBy: {
                        categoria: {
                            nome: 'asc',
                        }
                    },
                },
                subcategorias: {
                    select: {
                        subcategoria: true
                    },
                    orderBy: {
                        subcategoria: {
                            nome: 'asc'
                        }
                    }
                },
                cores: {
                    select: {
                        cor: true
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
        });
    },
    async getbyPage(page: number): Promise<IProduct[]> {
        return prisma.produto.findMany({
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
    }
}

export default ProductsModel;