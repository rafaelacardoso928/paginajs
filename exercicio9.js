function mudarEstado(cor) {
    // Listar todas as cores do semáforo
    const cores = ['vermelho', 'amarelo', 'verde'];

    // Resetar todas as luzes para cinza
    cores.forEach(c => {
        document.getElementById(c).style.backgroundColor = 'gray';
    });

    // Acender a luz correspondente
    if (cor === 'vermelho') {
        document.getElementById('vermelho').style.backgroundColor = 'red';
    } else if (cor === 'amarelo') {
        document.getElementById('amarelo').style.backgroundColor = 'yellow';
    } else if (cor === 'verde') {
        document.getElementById('verde').style.backgroundColor = 'green';
    }
}
