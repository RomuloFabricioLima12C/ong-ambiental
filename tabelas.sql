CREATE DATABASE ong_ambiental;
USE ong_ambiental;

CREATE TABLE acao_ambiental (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_projeto VARCHAR(100),
    local VARCHAR(100),
    data_evento DATE,
    responsavel VARCHAR(100),
    descricao TEXT
);

--Rômulo