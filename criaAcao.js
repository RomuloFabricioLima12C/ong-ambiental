document.getElementById('formAcao').addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        nome: document.getElementById("nome").value,
    missao: document.getElementById("missao").value,
    area: document.getElementById("area").value,
    projetos: document.getElementById("projetos").value,
    financiamento: document.getElementById("financiamento").value,
    publico: document.getElementById("publico").value
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