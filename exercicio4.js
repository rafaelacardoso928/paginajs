document.getElementById('calcular').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    let res;
    switch(operacao) {
        case 'somar':
            res = num1 + num2;
            break;
        case 'subtrair':
            res = num1 - num2;
            break;
        case 'multiplicar':
            res = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                resultado.textContent = 'Não é possível dividir por zero.';
                return;
            }
            res = num1 / num2;
            break;
    }

    resultado.textContent = `Resultado: ${res}`;
});
