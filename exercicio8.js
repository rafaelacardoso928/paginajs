document.getElementById('verificar').addEventListener('click', function() {
    const entrada = document.getElementById('entrada').value.toLowerCase().replace(/[\W_]+/g, '');
    const resultado = document.getElementById('resultado');

    if (!entrada) {
        resultado.textContent = 'Por favor, insira um texto válido.';
        return;
    }

    const reversed = entrada.split('').reverse().join('');
    
    if (entrada === reversed) {
        resultado.textContent = 'É um palíndromo!';
    } else {
        resultado.textContent = 'Não é um palíndromo.';
    }
});
