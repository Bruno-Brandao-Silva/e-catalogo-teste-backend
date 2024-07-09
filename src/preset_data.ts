import { PrismaClient } from '@prisma/client';

async function main(prisma: PrismaClient) {
    await prisma.produto.deleteMany({});
    await prisma.categoria.deleteMany({});
    await prisma.subcategoria.deleteMany({});
    await prisma.cor.deleteMany({});
    await prisma.tamanho.deleteMany({});

    const categorias = [
        { nome: 'Camisetas' },
        { nome: 'Calças' },
        { nome: 'Shorts' },
        { nome: 'Vestidos' },
        { nome: 'Saias' },
        { nome: 'Blusas' },
        { nome: 'Bermudas' },
        { nome: 'Macacões' },
        { nome: 'Jaquetas' },
        { nome: 'Sapatos' },
        { nome: 'Bolsas' },
        { nome: 'Relógios' },
        { nome: 'Óculos' },
    ];

    const subcategorias = [
        { nome: 'Estampada' },
        { nome: 'Lisa' },
        { nome: 'Listrada' },
        { nome: 'Jeans' },
        { nome: 'Social' },
        { nome: 'Esportiva' },
        { nome: 'Casual' },
        { nome: 'Curta' },
        { nome: 'Longa' },
        { nome: 'Manga curta' },
        { nome: 'Manga longa' },
        { nome: 'Regata' },
    ];

    const tamanhos = [
        { nome: 'P' },
        { nome: 'M' },
        { nome: 'G' },
        { nome: 'GG' },
    ];

    const cores = [
        { nome: 'Preto' },
        { nome: 'Branco' },
        { nome: 'Azul' },
        { nome: 'Vermelho' },
    ];

    await prisma.categoria.createMany({ data: categorias });
    await prisma.tamanho.createMany({ data: tamanhos });
    await prisma.cor.createMany({ data: cores });

    const createdCategorias = await prisma.categoria.findMany();
    const createdSubcategorias = await prisma.subcategoria.findMany();
    const createdTamanhos = await prisma.tamanho.findMany();
    const createdCores = await prisma.cor.findMany();

    const categoriasMap = new Map<string, string>();
    const subcategoriasMap = new Map<string, string>();
    const tamanhosMap = new Map<string, string>();
    const coresMap = new Map<string, string>();

    createdCategorias.forEach((cat) => {
        categoriasMap.set(cat.nome, cat.id);
    });
    createdSubcategorias.forEach((subcat) => {
        subcategoriasMap.set(subcat.nome, subcat.id);
    });
    createdTamanhos.forEach((tam) => {
        tamanhosMap.set(tam.nome, tam.id);
    });
    createdCores.forEach((cor) => {
        coresMap.set(cor.nome, cor.id);
    });

    // Inserir produtos
    await prisma.produto.createMany({
        data: [
            {
                nome: 'Camiseta',
                marca: 'Nike',
                descricao: 'Camiseta azul royal para sublimação tradicional',
                preco: 50.00,
                imagem: 'https://loja.comerciomix.com.br/media/catalog/product/cache/fb4f878514d02efd710032ded901d118/c/a/camiseta-azul-royal-para-sublima_o-tradicional_1.jpg',
            }
        ]
    });
    
    prisma.produtoCategoria.createMany({
        data: [
            {
                produtoId: 1,
                categoriaId: categoriasMap.get('Camisetas'),
            }
        ]
    });
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
