const mysql = require('mysql2');

const acessaBancoNoServidor = mysql.createConnection({
    host: 'benserverplex.ddns.net',
    port: 3306,
    user: 'alunos',
    password: 'senhaAlunos',
    database: 'ong_ambiental'
});

acessaBancoNoServidor.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados da ONG Ambiental!');
});

module.exports = acessaBancoNoServidor;

//Laura