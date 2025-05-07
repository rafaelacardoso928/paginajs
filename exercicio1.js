// script.js dentro da pasta "01_par_ou_impar"
document.getElementById('verificar').addEventListener('click', function() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');
  
  if (isNaN(numero)) {
      resultado.textContent = 'Por favor, insira um número válido.';
      return;
  }

  if (numero % 2 === 0) {
      resultado.textContent = 'O número é PAR.';
  } else {
      resultado.textContent = 'O número é ÍMPAR.';
  }
});
