async function listarAcoes() {
    const resposta = await fetch('http://localhost:3000/acoes');
    const dados = await resposta.json();

    let html = `
        <table>
            <tr>
                <th>nome</th>
                <th>missao</th>
                <th>area</th>
                <th>projetos</th>
                <th>financiamento</th>
                <th>publico</th>
            </tr>
    `;

    dados.forEach(acao => {
        html += `
            <tr>
                <td>${acao.nome}</td>
                <td>${acao.missao}</td>
                <td>${acao.area}</td>
                <td>${acao.projetos}</td>
                <td>${acao.financiamento}</td>
                <td>${acao.publico}</td>
            </tr>`;
    });

    html += '</table>';
    document.getElementById('resultado').innerHTML = html;
}
