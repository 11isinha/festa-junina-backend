const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const app = express();



app.use(cors());
app.use(express.json());
app.use(logger);
app.get('/', (req, res) => {
    res.json({ mensagem: 'Bem-vindo à API da Maior Festa Junina' });
});


// ─── 6. Importação e Registro das Rotas ───────────────────────
// Importamos os arquivos de rota da pasta /routes
const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');



// app.use('prefixo', router) registra o router com um prefixo de URL.
// Toda rota definida dentro de categorias.js ficará em /api/categorias/...
// Toda rota definida dentro de produtos.js ficará em /api/produtos/...
app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);

app.use((req, res, next) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `Rota '${req.url}' não encontrada na API da festa junina.`
    });
});


// =============================================================
// ── NOVO NA AULA 6: Middleware de Erros Global ────────────────
// ⚠️ DEVE SER SEMPRE O ÚLTIMO middleware registrado!
// Ele só "acorda" quando uma rota chama next(err) ou joga throw new Error().
// Como tem 4 parâmetros (err, req, res, next), o Express sabe que é
// um middleware de erro e chama automaticamente em caso de problema.
// =============================================================
app.use(errorHandler);


// ─── 7. Iniciando o Servidor ──────────────────────────────────
// Definimos a porta como constante para facilitar a mudança depois.
const PORTA = process.env.PORT||3000;

// app.listen() inicia o servidor na porta definida.
// O callback (função passada como parâmetro) é executado
// assim que o servidor está pronto para receber requisições.
app.listen(PORTA, () => {
    console.log('');
    console.log('🚀 ================================');
    console.log(`🚀 Servidor rodando!`);
    console.log(`🚀 Porta local : ${PORTA}`);
    console.log('🚀 ================================');
    console.log('');
    console.log('📋 Rotas disponíveis:');
    console.log(`   GET    /api/categorias`);
    console.log(`   POST   /api/categorias`);
    console.log(`   GET    /api/produtos`);
    console.log(`   GET    /api/produtos/:id`);
    console.log(`   POST   /api/produtos`);
    console.log(`   PUT    /api/produtos/:id`);
    console.log(`   DELETE /api/produtos/:id`);
    console.log(`   GET    /api/pedidos`);
    console.log(`   POST   /api/pedidos`);
    console.log('');
    console.log('💣 Rota de teste de erro:');
    console.log(`   GET    /api/produtos/erro-teste`);
    console.log('');
});
module.exports = app;
