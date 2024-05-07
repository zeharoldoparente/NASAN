// Função para mostrar ou ocultar o botão de rolagem suave com base na posição da página
window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
   ) {
      document.getElementById("scrollTopButton").style.display = "block";
   } else {
      document.getElementById("scrollTopButton").style.display = "none";
   }
}

// Função para rolar suavemente até o topo da página quando o botão é clicado
document
   .getElementById("scrollTopButton")
   .addEventListener("click", function () {
      scrollToTop();
   });

function scrollToTop() {
   const c = document.documentElement.scrollTop || document.body.scrollTop;
   if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
   }
}
// Função para calcular o valor total com base na quantidade inserida e no valor unitário do produto
function calcularValorTotal() {
   const produtos = document.querySelectorAll("tbody tr");
   produtos.forEach(function (produto) {
      const qtd = parseInt(produto.querySelector(".qtd-pedido").value);
      const valorUnitario = parseFloat(
         produto.querySelector(".valor-unitario").textContent.replace("R$ ", "")
      );
      const valorTotal = qtd * valorUnitario;
      produto.querySelector(
         ".valor-total"
      ).textContent = `R$ ${valorTotal.toFixed(2)}`;
   });
}

// Adicionar evento de escuta para detectar mudanças nos campos de quantidade
const qtdPedidoInputs = document.querySelectorAll(".qtd-pedido");
qtdPedidoInputs.forEach(function (qtdPedidoInput) {
   qtdPedidoInput.addEventListener("input", function () {
      calcularValorTotal();
      atualizarTotalPedido();
   });
});

// Função para calcular e atualizar o campo de total do pedido
function atualizarTotalPedido() {
   const produtos = document.querySelectorAll(".valor-total");
   let totalPedido = 0;
   produtos.forEach(function (produto) {
      totalPedido += parseFloat(produto.textContent.replace("R$ ", ""));
   });
   document.querySelector(
      ".total-pedido"
   ).textContent = `R$ ${totalPedido.toFixed(2)}`;
}

// Função para filtrar e mostrar apenas os produtos com quantidade maior que zero
function visualizarPedido() {
   const produtos = document.querySelectorAll("tbody tr");
   produtos.forEach(function (produto) {
      const qtd = parseInt(produto.querySelector(".qtd-pedido").value);
      if (qtd > 0) {
         produto.style.display = "table-row"; // Mostra o produto
      } else {
         produto.style.display = "none"; // Oculta o produto
      }
   });
}

// Adicionar evento de escuta para o botão de visualização de pedido
const btnVisualizacaoPedido = document.querySelector(".button--visualizacao");
btnVisualizacaoPedido.addEventListener("click", function () {
   visualizarPedido();
});
