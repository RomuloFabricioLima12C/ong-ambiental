USE api_crud;

CREATE TABLE verdinho(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    missao_principal VARCHAR(100) NOT NULL,
    area_atuacao VARCHAR(100) NOT NULL,
    projetos_acoes VARCHAR(100),
    fontes_financiamento VARCHAR(100),
    publico_alvo VARCHAR(150)
);

drop table verdinho