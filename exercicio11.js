function calcularNotas() {
    // Obter o valor inserido
    const valor = parseInt(document.getElementById('valor').value);

    // Verificar se o valor inserido é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido!");
        return;
    }

    let restante = valor;

    // Calcular quantas notas de R$100, R$50, R$10 e R$1 serão necessárias
    const notas100 = Math.floor(restante / 100);
    restante = restante % 100;

    const notas50 = Math.floor(restante / 50);
    restante = restante % 50;

    const notas10 = Math.floor(restante / 10);
    restante = restante % 10;

    const notas1 = restante;

    // Exibir os resultados
    document.getElementById('notas100').textContent = `Notas de R$100: ${notas100}`;
    document.getElementById('notas50').textContent = `Notas de R$50: ${notas50}`;
    document.getElementById('notas10').textContent = `Notas de R$10: ${notas10}`;
    document.getElementById('notas1').textContent = `Notas de R$1: ${notas1}`;
}
