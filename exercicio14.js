function sortear() {
    // Obter os valores mínimo e máximo
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);

    // Verificar se os valores são válidos
    if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        alert("Por favor, insira valores válidos! O valor mínimo deve ser menor que o valor máximo.");
        return;
    }

    // Gerar um número aleatório entre o valor mínimo e máximo
    const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    // Exibir o resultado
    document.getElementById('resultado').textContent = `Número sorteado: ${numeroSorteado}`;
}
