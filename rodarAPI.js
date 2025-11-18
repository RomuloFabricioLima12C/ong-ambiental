const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Criar ação ambiental
app.post('/acao', (req, res) => {
    const { nome, missao, area, projetos, financiamento, publico } = req.body;

    const sql = `
        INSERT INTO verdinho (nome, missao, area, projetos, financiamento, publico)
        VALUES (?, ?, ?, ?, ?)
    `;

    acessaBancoNoServidor.query(sql, [nome, missao, area, projetos, financiamento, publico], (err) => {
        if (err) {
            console.error(err);
            return res.json({ error: 'Erro ao cadastrar ação ambiental' });
        }
        res.json({ message: 'ONG cadastrada com sucesso!' });
    });
});

// Listar ações ambientais
app.get('/acoes', (req, res) => {
    const sql = 'SELECT * FROM verdinho';

    acessaBancoNoServidor.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.json({ error: 'Erro ao buscar ações ambientais' });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
    //Victor