const produtosPreset = [
    {
        nome: "Camiseta",
        marca: "Nike",
        descricao: "Camiseta azul royal para sublimação tradicional",
        categorias: ["Camisetas"],
        subcategorias: ["Lisa", "Esportiva"],
        cores: ["Azul", "Branco", "Preto"],
        tamanhos: [{
            nome: "P",
            quantidade: 1
        },
        {
            nome: "M",
            quantidade: 5
        },
        {
            nome: "G",
            quantidade: 2
        },
        {
            nome: "GG",
            quantidade: 8
        }],
        preco: 50,
        imagem: "https://loja.comerciomix.com.br/media/catalog/product/cache/fb4f878514d02efd710032ded901d118/c/a/camiseta-azul-royal-para-sublima_o-tradicional_1.jpg"
    },
    {
        nome: "Calça",
        marca: "Levi's",
        descricao: "Calça jeans azul escuro, confortável e resistente",
        categorias: ["Calças"],
        subcategorias: ["Jeans"],
        cores: ["Azul"],
        tamanhos: [{
            nome: "P",
            quantidade: 3
        },
        {
            nome: "M",
            quantidade: 4
        },
        {
            nome: "G",
            quantidade: 1
        },
        {
            nome: "GG",
            quantidade: 7
        }],
        preco: 100,
        imagem: "https://static.camisariafmw.com.br/produtograde/multifotos/hd/20230914115133_3584996416_GZ.jpg"
    },
    {
        nome: "Shorts",
        marca: "Adidas",
        descricao: "Shorts esportivo preto, leve e respirável",
        categorias: ["Shorts"],
        subcategorias: ["Esportivo"],
        cores: ["Preto"],
        tamanhos: [{
            nome: "P",
            quantidade: 2
        },
        {
            nome: "M",
            quantidade: 3
        },
        {
            nome: "G",
            quantidade: 4
        },
        {
            nome: "GG",
            quantidade: 5
        }],
        preco: 70,
        imagem: "https://cdn.awsli.com.br/2500x2500/304/304285/produto/116793175/bermuda-linho-masculina-preta01-jrhlwu.jpg"
    },
    {
        nome: "Vestido",
        marca: "Zara",
        descricao: "Vestido longo vermelho, ideal para festas e eventos",
        categorias: ["Vestidos"],
        subcategorias: ["Festa"],
        cores: ["Vermelho"],
        tamanhos: [{
            nome: "P",
            quantidade: 5
        },
        {
            nome: "M",
            quantidade: 3
        },
        {
            nome: "G",
            quantidade: 2
        },
        {
            nome: "GG",
            quantidade: 1
        }],
        preco: 150,
        imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5NRaY5gRzw5E03kyAvqRQ-doawaW24xtbbK9erqTCc-z-A4a9WarDDUY3SLIW3weta5T8txL0j9OjLj8K-y1JfJ5B6id8uMzR5jHzAaZI&usqp=CAY"
    },
    {
        nome: "Saia",
        marca: "H&M",
        descricao: "Saia xadrez colegial, estilo clássico e versátil",
        categorias: ["Saias"],
        subcategorias: ["Colegio"],
        cores: ["Xadrez"],
        tamanhos: [{
            nome: "P",
            quantidade: 4
        },
        {
            nome: "M",
            quantidade: 3
        },
        {
            nome: "G",
            quantidade: 2
        },
        {
            nome: "GG",
            quantidade: 1
        }],
        preco: 60,
        imagem: "https://61007.cdn.simplo7.net/static/61007/sku/roupas-saia-feminina-colegial-xadrez-escoces--p-1629207948934.png"
    },
    {
        nome: "Blusa",
        marca: "Mooboo",
        descricao: "Blusa de moletom aberta com bolso e capuz",
        categorias: ["Blusas"],
        subcategorias: ["Moletom"],
        cores: ["Cinza"],
        tamanhos: [{
            nome: "P",
            quantidade: 1
        },
        {
            nome: "M",
            quantidade: 2
        },
        {
            nome: "G",
            quantidade: 3
        },
        {
            nome: "GG",
            quantidade: 4
        }],
        preco: 40,
        imagem: "https://static.netshoes.com.br/produtos/blusa-moletom-algodao-aberto-mooboo-c-bolso-e-capuz/06/38B-0000-006/38B-0000-006_zoom1.jpg?ts=1630917620?ims=1088x"
    },
    {
        nome: "Bermuda",
        marca: "Quiksilver",
        descricao: "Bermuda casual, ideal para o dia a dia",
        categorias: ["Bermudas"],
        subcategorias: ["Casual"],
        cores: ["Bege"],
        tamanhos: [{
            nome: "P",
            quantidade: 2
        },
        {
            nome: "M",
            quantidade: 3
        },
        {
            nome: "G",
            quantidade: 4
        },
        {
            nome: "GG",
            quantidade: 5
        }],
        preco: 80,
        imagem: "https://uniaoskateshop.com.br/wp-content/uploads/2022/08/FOTO_1-3.jpg"
    },
    {
        nome: "Macacão",
        marca: "Forever 21",
        descricao: "Macacão laranja de verão, confortável e estiloso",
        categorias: ["Macacões"],
        subcategorias: ["Verão"],
        cores: ["Laranja"],
        tamanhos: [{
            nome: "P",
            quantidade: 3
        },
        {
            nome: "M",
            quantidade: 2
        },
        {
            nome: "G",
            quantidade: 1
        },
        {
            nome: "GG",
            quantidade: 4
        }],
        preco: 120,
        imagem: "https://havencraft.co.ke/wp-content/uploads/2021/03/Orange-Front-4.png"
    },
    {
        nome: "Jaqueta",
        marca: "The North Face",
        descricao: "Jaqueta puffer preta, ideal para o inverno",
        categorias: ["Jaquetas"],
        subcategorias: ["Puffer"],
        cores: ["Preto"],
        tamanhos: [{
            nome: "P",
            quantidade: 1
        },
        {
            nome: "M",
            quantidade: 2
        },
        {
            nome: "G",
            quantidade: 3
        },
        {
            nome: "GG",
            quantidade: 4
        }],
        preco: 200,
        imagem: "https://images.tcdn.com.br/img/img_prod/698738/copia_jaqueta_masculina_puffer_nylon_preta_747_1_378b31a1d36e3a94d141494c066d7f39.jpg"
    },
    {
        nome: "Sapato",
        marca: "Louie",
        descricao: "Sapato social Derby, couro legítimo, cor marrom",
        categorias: ["Sapatos"],
        subcategorias: ["Social"],
        cores: ["Marrom"],
        tamanhos: [{
            nome: "P",
            quantidade: 2
        },
        {
            nome: "M",
            quantidade: 3
        },
        {
            nome: "G",
            quantidade: 4
        },
        {
            nome: "GG",
            quantidade: 5
        }],
        preco: 90,
        imagem: "https://www.louie.com.br/loja/image/cache/data/colecao-2022/masculino/DERBY%20ESINO/derby-esino-flo-03-550x550.jpg"
    },
    {
        nome: "Bolsa",
        marca: "Vizzano",
        descricao: "Bolsa feminina com duas alças, cor preta",
        categorias: ["Bolsas"],
        subcategorias: ["Transversal"],
        cores: ["Preto"],
        tamanhos: [{
            nome: "P",
            quantidade: 3
        },
        {
            nome: "M",
            quantidade: 4
        },
        {
            nome: "G",
            quantidade: 5
        },
        {
            nome: "GG",
            quantidade: 6
        }],
        preco: 70,
        imagem: "https://images-americanas.b2w.io/produtos/7482387329/imagens/bolsa-feminina-vizzano-duas-alcas-transversal-original/7482387333_1_xlarge.jpg"
    },
    {
        nome: "Relógio",
        marca: "Bewatch",
        descricao: "Relógio feminino, pulseira de couro marrom",
        categorias: ["Relógios"],
        subcategorias: ["Feminino"],
        cores: ["Marrom"],
        tamanhos: [{
            nome: "P",
            quantidade: 4
        },
        {
            nome: "M",
            quantidade: 3
        },
        {
            nome: "G",
            quantidade: 2
        },
        {
            nome: "GG",
            quantidade: 1
        }],
        preco: 100,
        imagem: "https://acdn.mitiendanube.com/stores/002/333/562/products/relogio-bewatch-feminino-marrom-pulseira-de-couro-petite-luminus-prata-white-32mm1-835afa23775234796c16728321292322-1024-1024.webp"
    },
    {
        nome: "Óculos",
        marca: "Armani",
        descricao: "Óculos de grau, armação preta e elegante",
        categorias: ["Óculos"],
        subcategorias: ["Grau"],
        cores: ["Preto"],
        tamanhos: [{
            nome: "P",
            quantidade: 1
        },
        {
            nome: "M",
            quantidade: 2
        },
        {
            nome: "G",
            quantidade: 3
        },
        {
            nome: "GG",
            quantidade: 4
        }],
        preco: 50,
        imagem: "https://img.irroba.com.br/fit-in/450x450/filters:format(webp):fill(transparent):quality(80)/authaeeo/catalog/oculos-de-grau/armani/0ea3185-5875-54.png"
    }
]
export default produtosPreset;