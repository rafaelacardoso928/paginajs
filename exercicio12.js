let tempo = 0; // Tempo em segundos
let cronometroAtivo = false; // Controle se o cronômetro está ativo ou não
let intervalo;

function iniciarCronometro() {
    if (!cronometroAtivo) {
        cronometroAtivo = true;
        intervalo = setInterval(function() {
            tempo++; // Incrementa o tempo em 1 segundo
            atualizarRelogio();
        }, 1000); // Atualiza a cada 1000 milissegundos (1 segundo)
    }
}

function pausarCronometro() {
    clearInterval(intervalo); // Para o intervalo de atualização
    cronometroAtivo = false;
}

function zerarCronometro() {
    clearInterval(intervalo); // Para o intervalo de atualização
    cronometroAtivo = false;
    tempo = 0; // Zera o tempo
    atualizarRelogio();
}

function atualizarRelogio() {
    // Converte o tempo para o formato MM:SS
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    // Adiciona zero à esquerda caso o valor seja menor que 10
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    // Atualiza o texto no elemento do relógio
    document.getElementById("tempo").textContent = minutos + ":" + segundos;
}
