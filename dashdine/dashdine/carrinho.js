let carrinho = [];

function adicionarItemAoCarrinho(item) {
    carrinho.push(item);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}

function exibirCarrinho() {
    const carrinhoElement = document.getElementById('carrinho');

    // Limpar o conteúdo anterior do carrinho
    carrinhoElement.innerHTML = '';

    // Exibir cada item do carrinho
    for (const item of carrinho) {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoElement.appendChild(itemDiv);
    }
}

function limparCarrinho() {
    carrinho = [];
    localStorage.removeItem('carrinho');
    exibirCarrinho(); // Atualizar a exibição para mostrar o carrinho vazio
}

if (localStorage.getItem('carrinho')) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'));
    exibirCarrinho();
}
