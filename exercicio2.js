document.getElementById('contar').addEventListener('click', function() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const passo = parseInt(document.getElementById('passo').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        resultado.textContent = 'Por favor, insira valores válidos.';
        return;
    }
    
    let contagem = '';
    for (let i = inicio; i <= fim; i += passo) {
        contagem += i + ' ';
    }

    resultado.textContent = 'Contagem: ' + contagem;
});
