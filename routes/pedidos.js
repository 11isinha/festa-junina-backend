const express = require('express');
const router = express.Router();

router.post('/pedido', (req, res) => {
    const { totalItens } = req.body;

   const LIMITE_MAXIMO = 50;

if (totalItens > LIMITE_MAXIMO) {
    return res.status(400).json({
        erro: `O máximo permitido é ${LIMITE_MAXIMO} pamonhas`
    });
}

    res.status(200).json({
        mensagem: 'Pedido realizado com sucesso!'
    });
});

module.exports = router;