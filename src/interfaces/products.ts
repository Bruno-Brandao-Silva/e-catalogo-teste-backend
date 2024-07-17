import { ICategorie } from "./categories";
import IColor from "./color";
import { ISubcategorie } from "./subcategories";

export interface IProduct {
    id?: number;
    nome: string;
    marca: string;
    descricao: string;
    preco: number;
    imagem: string;
    categorias: {
        categoria: ICategorie
    }[];
    subcategorias: {
        subcategoria: ISubcategorie
    }[];
    cores: {
        cor: IColor
    }[];
    tamanhos: {
        nome: string;
        quantidade: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}
