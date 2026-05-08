const errorHandlerMiddleware = (err, req, res, next) => {
console.error(`❌ Erro detectado: ${err.message}`);
 res.status(500).json({
        sucesso: false,
        mensagem: "Ops! Ocorreu um erro interno no servidor.",
 detalhe: err.message
    });
};

// ─── Exportação ───────────────────────────────────────────────
module.exports = errorHandlerMiddleware;
