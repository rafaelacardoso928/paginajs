document.getElementById('adicionar').addEventListener('click', function() {
    const item = document.getElementById('item').value;
    const lista = document.getElementById('lista');

    if (item.trim() === '') {
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `${item} <button class="remover">Remover</button>`;
    lista.appendChild(li);

    document.getElementById('item').value = '';

    li.querySelector('.remover').addEventListener('click', function() {
        lista.removeChild(li);
    });
});
