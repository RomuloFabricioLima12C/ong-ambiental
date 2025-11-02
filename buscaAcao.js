async function listarAcoes() {
    const resposta = await fetch('http://localhost:3000/acoes');
    const dados = await resposta.json();

    let html = `
        <table>
            <tr>
                <th>ID</th>
                <th>Projeto</th>
                <th>Local</th>
                <th>Data</th>
                <th>Responsável</th>
                <th>Descrição</th>
            </tr>
    `;

    dados.forEach(acao => {
        html += `
            <tr>
                <td>${acao.id}</td>
                <td>${acao.nome_projeto}</td>
                <td>${acao.local}</td>
                <td>${acao.data_evento}</td>
                <td>${acao.responsavel}</td>
                <td>${acao.descricao}</td>
            </tr>`;
    });

    html += '</table>';
    document.getElementById('resultado').innerHTML = html;
}
//Laura