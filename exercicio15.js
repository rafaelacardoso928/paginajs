let votos = {
    "Time A": 0,
    "Time B": 0,
    "Time C": 0
};

function votar() {
    // Obter a opção escolhida pelo usuário
    const opcoes = document.getElementsByName('opcao');
    let votoSelecionado = '';
    
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            votoSelecionado = opcoes[i].value;
            break;
        }
    }

    if (votoSelecionado === '') {
        alert("Por favor, selecione uma opção para votar!");
        return;
    }

    // Incrementar o voto para a opção escolhida
    votos[votoSelecionado]++;

    // Calcular a porcentagem de cada opção
    const totalVotos = votos["Time A"] + votos["Time B"] + votos["Time C"];
    const porcentagemA = ((votos["Time A"] / totalVotos) * 100).toFixed(2);
    const porcentagemB = ((votos["Time B"] / totalVotos) * 100).toFixed(2);
    const porcentagemC = ((votos["Time C"] / totalVotos) * 100).toFixed(2);

    // Exibir os resultados
    const resultado = `
        Time A: ${votos["Time A"]} votos (${porcentagemA}%)
        Time B: ${votos["Time B"]} votos (${porcentagemB}%)
        Time C: ${votos["Time C"]} votos (${porcentagemC}%)
    `;

    document.getElementById('resultado').textContent = resultado;
}
