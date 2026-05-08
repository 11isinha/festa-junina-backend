let categorias = [
    { id: 1, nome: "Doces Típicos" },
    { id: 2, nome: "Salgados" },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Pratos Tradicionais" }
];

let produtos = [

    // DOCES

    {
        categoriaId: 1,
        nome: "Pé de Moleque",
        descricao: "Doce crocante feito com amendoim torrado e rapadura.",
        preco: 12.00,
        imagem: ""
    },

    {
        categoriaId: 1,
        nome: "Canjica",
        descricao: "Canjica cremosa com leite condensado, coco e canela.",
        preco: 15.00,
        imagem: ""
    },

    {
        categoriaId: 1,
        nome: "Maçã do Amor",
        descricao: "Maçã coberta com calda crocante vermelha.",
        preco: 14.00,
        imagem: ""
    },

    {
        categoriaId: 1,
        nome: "Paçoca",
        descricao: "Doce típico feito com amendoim triturado.",
        preco: 8.00,
        imagem: ""
    },

    {
        categoriaId: 1,
        nome: "Cocada",
        descricao: "Cocada branca tradicional feita com coco fresco.",
        preco: 10.00,
        imagem: ""
    },

    {
        categoriaId: 1,
        nome: "Arroz Doce",
        descricao: "Arroz doce cremoso com leite condensado e canela.",
        preco: 13.00,
        imagem: ""
    },

    {
        categoriaId: 1,
        nome: "Curau",
        descricao: "Curau de milho verde cremoso com canela.",
        preco: 11.00,
        imagem: ""
    },

    // SALGADOS

    {
        categoriaId: 2,
        nome: "Pastel",
        descricao: "Pastel recheado com carne moída temperada e queijo.",
        preco: 18.00,
        imagem: ""
    },

    {
        categoriaId: 2,
        nome: "Espetinho",
        descricao: "Espetinho de carne assada na brasa.",
        preco: 16.00,
        imagem: ""
    },

    {
        categoriaId: 2,
        nome: "Cachorro Quente",
        descricao: "Cachorro quente completo com milho e batata palha.",
        preco: 17.00,
        imagem: ""
    },

    {
        categoriaId: 2,
        nome: "Batata Frita",
        descricao: "Porção de batata frita crocante.",
        preco: 14.00,
        imagem: ""
    },

    {
        categoriaId: 2,
        nome: "Hambúrguer Artesanal",
        descricao: "Hambúrguer artesanal com queijo cheddar.",
        preco: 25.00,
        imagem: ""
    },

    // BEBIDAS

    {
        categoriaId: 3,
        nome: "Quentão",
        descricao: "Bebida quente feita com gengibre, canela e cachaça.",
        preco: 20.00,
        imagem: ""
    },

    {
        categoriaId: 3,
        nome: "Vinho Quente",
        descricao: "Vinho aquecido com frutas e especiarias típicas.",
        preco: 22.00,
        imagem: ""
    },

    {
        categoriaId: 3,
        nome: "Suco de Milho",
        descricao: "Suco cremoso feito com milho verde.",
        preco: 12.00,
        imagem: ""
    },

    {
        categoriaId: 3,
        nome: "Chocolate Quente",
        descricao: "Chocolate quente cremoso.",
        preco: 14.00,
        imagem: ""
    },

    {
        categoriaId: 3,
        nome: "Refrigerante",
        descricao: "Lata 350ml gelada.",
        preco: 7.00,
        imagem: ""
    },

    // PRATOS

    {
        categoriaId: 4,
        nome: "Pamonha",
        descricao: "Pamonha tradicional de milho verde cozida na palha.",
        preco: 16.00,
        imagem: ""
    },

    {
        categoriaId: 4,
        nome: "Milho Cozido",
        descricao: "Espiga de milho verde cozida com manteiga e sal.",
        preco: 10.00,
        imagem: ""
    },

    {
        categoriaId: 4,
        nome: "Cuscuz",
        descricao: "Cuscuz nordestino com manteiga.",
        preco: 13.00,
        imagem: ""
    },

    {
        categoriaId: 4,
        nome: "Caldo Verde",
        descricao: "Caldo quente com batata e linguiça.",
        preco: 18.00,
        imagem: ""
    },

    {
        categoriaId: 4,
        nome: "Feijão Tropeiro",
        descricao: "Feijão tropeiro tradicional mineiro.",
        preco: 24.00,
        imagem: ""
    }

];

module.exports = { categorias, produtos };