document.getElementById('gerar').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    const tabuada = document.getElementById('tabuada');
    
    if (isNaN(numero)) {
        tabuada.innerHTML = 'Por favor, insira um número válido.';
        return;
    }
    
    let listaTabuada = '';
    for (let i = 1; i <= 10; i++) {
        listaTabuada += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
    
    tabuada.innerHTML = listaTabuada;
});
