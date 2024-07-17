import type { Request, Response, NextFunction } from 'express';
import ProductsModel from '../models/products';

export async function getById(req: Request, res: Response, next: NextFunction) {
    try {

        const id = Number(req.params.id);
        if (isNaN(id) || id < 1) {
            return res.status(400).json({ error: 'ID inválido' });
        }

        const product = await ProductsModel.getById(id);
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
        return res.json(productResponse);
    } catch (error) {
        next(error);
    }
}

export async function getbyPage(req: Request, res: Response, next: NextFunction) {
    try {
        const page = Number(req.params.page);
        if (isNaN(page) || page < 1) {
            return res.status(400).json({ error: 'Número de página inválido' });
        }

        const products = await ProductsModel.getbyPage(page);

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
        return res.json(productsResponse);
    } catch (error) {
        next(error);
    }
}