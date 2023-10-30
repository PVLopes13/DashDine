// NAVBAR

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

// Reserva de mesa
function makeReservation() {
    const restaurantLocation = document.getElementById("restaurantLocation").value;
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const numberOfGuests = document.getElementById("numberOfGuests").value;

    alert(`Olá, ${name}! Sua reserva para ${numberOfGuests} pessoas no restaurante localizado em ${restaurantLocation}, para o dia ${date} às ${time}, foi feita com sucesso. Aguarde nossa confirmação.`);
}

// Exemplo simples de mapa usando a API do Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -23.5505, lng: -46.6333 },
        zoom: 15
    });
}



// CARRINHO


document.addEventListener("DOMContentLoaded", function () {
    // Inicializa o carrinho vazio
    const carrinho = [];

    // Função para atualizar o total do carrinho
    function atualizarTotal() {
      let total = 0;
      carrinho.forEach(function (item) {
        total += item.preco;
      });
      document.getElementById("total").textContent = `R$ ${total.toFixed(2)}`;
    }

    // Função para adicionar um item ao carrinho
    function adicionarAoCarrinho(nome, preco) {
      carrinho.push({ nome, preco });
      atualizarTotal();
    }

    // Event listener para os botões "Pedir"
    const botoesPedir = document.querySelectorAll(".card .button");
    botoesPedir.forEach(function (botao, index) {
      botao.addEventListener("click", function () {
        const card = document.querySelectorAll(".card")[index];
        const nome = card.querySelector("h2").textContent;
        const precoTexto = card.querySelector("p").textContent;
        const preco = parseFloat(precoTexto.replace("R$ ", ""));
        adicionarAoCarrinho(nome, preco);
        alert(`"${nome}" foi adicionado ao carrinho.`);
      });
    });

    // Event listener para o botão "Limpar Carrinho"
    const botaoLimparCarrinho = document.getElementById("limpar-carrinho");
    botaoLimparCarrinho.addEventListener("click", function () {
      carrinho.length = 0;
      atualizarTotal();
      alert("Carrinho limpo.");
    });
  });

