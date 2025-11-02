const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Criar ação ambiental
app.post('/acao', (req, res) => {
    const { nome_projeto, local, data_evento, responsavel, descricao } = req.body;

    const sql = `
        INSERT INTO acao_ambiental (nome_projeto, local, data_evento, responsavel, descricao)
        VALUES (?, ?, ?, ?, ?)
    `;

    acessaBancoNoServidor.query(sql, [nome_projeto, local, data_evento, responsavel, descricao], (err) => {
        if (err) {
            console.error(err);
            return res.json({ error: 'Erro ao cadastrar ação ambiental' });
        }
        res.json({ message: 'Ação ambiental cadastrada com sucesso!' });
    });
});

// Listar ações ambientais
app.get('/acoes', (req, res) => {
    const sql = 'SELECT * FROM acao_ambiental';

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