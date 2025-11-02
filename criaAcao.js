document.getElementById('formAcao').addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        nome_projeto: document.getElementById('nome_projeto').value,
        local: document.getElementById('local').value,
        data_evento: document.getElementById('data_evento').value,
        responsavel: document.getElementById('responsavel').value,
        descricao: document.getElementById('descricao').value
    };

    const resposta = await fetch('http://localhost:3000/acao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    const retorno = await resposta.json();
    document.getElementById('mensagem').textContent = retorno.message || retorno.error;
    document.getElementById('formAcao').reset();
});

//Victor