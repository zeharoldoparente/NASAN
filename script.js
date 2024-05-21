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

// Função para filtrar os produtos por código ou nome
function searchProdutos() {
   const searchTerm = document
      .getElementById("search")
      .value.trim()
      .toLowerCase();
   const produtos = document.querySelectorAll("tbody tr");
   produtos.forEach(function (produto) {
      const codigo = produto.cells[0].textContent.trim().toLowerCase();
      const nome = produto.cells[1].textContent.trim().toLowerCase();
      if (codigo.includes(searchTerm) || nome.includes(searchTerm)) {
         produto.style.display = "table-row"; // Mostra o produto
      } else {
         produto.style.display = "none"; // Oculta o produto
      }
   });
}

// Função para gerar o PDF
function gerarPDF() {
   // Calcular valores totais antes de gerar o PDF
   calcularValorTotal();
   atualizarTotalPedido();
   visualizarPedido();

   // Coletar dados do formulário
   const clienteForm = document.getElementById("clienteForm");
   const vendedorForm = document.getElementById("vendedorForm");

   // Verificar se os formulários existem antes de acessar seus elementos
   if (!clienteForm || !vendedorForm) {
      console.error("Formulários não encontrados.");
      return;
   }

   const clienteData = Array.from(clienteForm.elements).reduce((acc, input) => {
      if (input.name) acc[input.name] = input.value;
      return acc;
   }, {});

   const vendedorData = Array.from(vendedorForm.elements).reduce(
      (acc, input) => {
         if (input.name) acc[input.name] = input.value;
         return acc;
      },
      {}
   );

   // Coletar dados da tabela de produtos
   const produtos = [];
   document.querySelectorAll("tbody tr").forEach((tr) => {
      const codigo = tr.cells[0].textContent;
      const nome = tr.cells[1].textContent;
      const valorUnitario = tr.cells[2].textContent;
      const qtd = tr.querySelector(".qtd-pedido").value;
      const valorTotal = tr.cells[4].textContent;

      if (qtd > 0) {
         // Incluir apenas produtos com quantidade maior que zero
         produtos.push([codigo, nome, valorUnitario, qtd, valorTotal]);
      }
   });

   const docDefinition = {
      content: [
         { text: "Detalhes do Pedido", style: "header" },
         { text: "Dados do Cliente", style: "subheader" },
         ...Object.entries(clienteData).map(
            ([key, value]) => `${key}: ${value}`
         ),
         { text: "Dados do Vendedor", style: "subheader" },
         ...Object.entries(vendedorData).map(
            ([key, value]) => `${key}: ${value}`
         ),
         { text: "Produtos", style: "subheader" },
         {
            table: {
               headerRows: 1,
               widths: ["auto", "*", "auto", "auto", "auto"],
               body: [
                  [
                     "Código",
                     "Nome",
                     "Valor Unitário",
                     "Quantidade",
                     "Valor Total",
                  ],
                  ...produtos,
               ],
            },
         },
      ],
      styles: {
         header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
         },
         subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 10, 0, 5],
         },
      },
   };

   pdfMake.createPdf(docDefinition).download("pedido.pdf");
}

// Adicionar evento de escuta para o botão de gerar PDF
const btnGerarPedido = document.getElementById("btnGerarPedido");
btnGerarPedido.addEventListener("click", gerarPDF);
