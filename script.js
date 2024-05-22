// Máscara para o campo CNPJ
const cnpjInput = document.getElementById("cnpj");
cnpjInput.addEventListener("input", function () {
   let value = this.value.replace(/\D/g, "");
   if (value.length > 14) {
      value = value.slice(0, 14);
   }
   if (value.length === 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
   } else if (value.length === 14) {
      value = value.replace(
         /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
         "$1.$2.$3/$4-$5"
      );
   }
   this.value = value;
});

// Máscara para o campo IE
const ieInput = document.getElementById("ie");
ieInput.addEventListener("input", function () {
   this.value = this.value.replace(/\D/g, "");
});

// Máscara para o campo CEP
const cepInput = document.getElementById("cep");
cepInput.addEventListener("input", function () {
   let value = this.value.replace(/\D/g, "");
   if (value.length > 8) {
      value = value.slice(0, 8);
   }
   if (value.length === 8) {
      value = value.replace(/(\d{5})(\d{3})/, "$1-$2");
   }
   this.value = value;
});

document.addEventListener("DOMContentLoaded", function () {
   // Função para mostrar ou ocultar o botão de rolagem suave com base na posição da página
   window.onscroll = function () {
      scrollFunction();
   };

   // Esta função controla a visibilidade do botão de rolagem suave
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
            produto
               .querySelector(".valor-unitario")
               .textContent.replace(",", ".")
         );
         const valorTotal = qtd * valorUnitario;
         produto.querySelector(".valor-total").textContent = `R$ ${valorTotal
            .toFixed(2)
            .replace(".", ",")}`;
      });
   }

   // Adicionar evento de escuta para detectar mudanças nos campos de quantidade
   const qtdPedidoInputs = document.querySelectorAll(".qtd-pedido");
   qtdPedidoInputs.forEach(function (qtdPedidoInput) {
      qtdPedidoInput.addEventListener("input", function () {
         const produto = qtdPedidoInput.parentElement.parentElement; // Obter a linha do produto
         const qtd = parseInt(qtdPedidoInput.value);
         const valorUnitario = parseFloat(
            produto
               .querySelector(".valor-unitario")
               .textContent.replace(",", ".")
         );
         const valorTotal = qtd * valorUnitario;

         // Verificar se o valor total é um número válido
         if (!isNaN(valorTotal)) {
            produto.querySelector(".valor-total").textContent = `R$ ${valorTotal
               .toFixed(2)
               .replace(".", ",")}`;
         } else {
            produto.querySelector(".valor-total").textContent = "R$ -";
         }

         atualizarTotalPedido();
      });
   });

   // Função para calcular e atualizar o campo de total do pedido
   function atualizarTotalPedido() {
      const produtos = document.querySelectorAll(".valor-total");
      let totalPedido = 0;
      produtos.forEach(function (produto) {
         const valorTotal = parseFloat(
            produto.textContent.replace("R$ ", "").replace(",", ".")
         );
         if (!isNaN(valorTotal)) {
            totalPedido += valorTotal;
         }
      });
      document.querySelector(".total-pedido").textContent = `R$ ${totalPedido
         .toFixed(2)
         .replace(".", ",")}`;
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
   const btnVisualizacaoPedido = document.getElementById("btnVisuPed");
   btnVisualizacaoPedido.addEventListener("click", function () {
      visualizarPedido();
   });

   // Adicionar evento de escuta para o botão "Criar Novo"
   const btnNovoPedido = document.getElementById("btnNovoPed");
   btnNovoPedido.addEventListener("click", function () {
      // Exibir um alerta de confirmação
      const confirmacao = confirm(
         "Tem certeza que deseja criar um novo pedido?"
      );
      if (confirmacao) {
         resetarPedido();
      }
   });

   // Função para resetar o pedido
   function resetarPedido() {
      // Limpar os campos de quantidade de todos os produtos
      const qtdPedidoInputs = document.querySelectorAll(".qtd-pedido");
      qtdPedidoInputs.forEach(function (qtdPedidoInput) {
         qtdPedidoInput.value = ""; // Limpar o valor do campo de quantidade
      });

      // Resetar valores totais dos produtos para "-"
      const valorTotalProdutos = document.querySelectorAll(".valor-total");
      valorTotalProdutos.forEach(function (valorTotal) {
         valorTotal.textContent = "R$ 0,00";
      });

      // Mostrar todos os produtos novamente
      const produtos = document.querySelectorAll("tbody tr");
      produtos.forEach(function (produto) {
         produto.style.display = "table-row";
      });

      // Atualizar total do pedido
      atualizarTotalPedido();
   }

   // Adicionar evento de escuta para o campo de pesquisa
   document.getElementById("search").addEventListener("input", searchProdutos);

   // Função para gerar o PDF
   function gerarPDF() {
      // Verificar se há produtos filtrados
      const produtosFiltrados = document.querySelectorAll(
         "tbody tr[style='display: table-row;']"
      );
      if (produtosFiltrados.length === 0) {
         alert("Você precisa filtrar produtos antes de gerar o pedido.");
         return;
      }

      // Coletar dados do formulário de cliente
      const clienteForm = document.getElementById("clienteForm");
      const clienteData = Array.from(clienteForm.elements).reduce(
         (acc, input) => {
            if (input.name) acc[input.name] = input.value;
            return acc;
         },
         {}
      );

      // Coletar dados do formulário de vendedor
      const vendedorForm = document.getElementById("vendedorForm");
      const vendedorData = Array.from(vendedorForm.elements).reduce(
         (acc, input) => {
            if (input.name) acc[input.name] = input.value;
            return acc;
         },
         {}
      );

      // Coletar dados dos produtos
      const produtos = [];
      let totalPedido = 0;
      document.querySelectorAll("tbody tr").forEach((tr) => {
         const qtd = parseInt(tr.querySelector(".qtd-pedido").value);
         if (qtd > 0) {
            const codigo = tr.cells[0].textContent;
            const nome = tr.cells[1].textContent;
            const valorUnitario = tr.cells[2].textContent;
            const valorTotal = tr.cells[4].textContent;
            produtos.push([codigo, nome, valorUnitario, qtd, valorTotal]);
            totalPedido += parseFloat(
               valorTotal.replace("R$ ", "").replace(",", ".")
            );
         }
      });

      // Coletar observações
      const observacoes = document.getElementById("observacoes").value;

      // Definir a estrutura do PDF
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
                     [
                        { text: "", colSpan: 3 },
                        "",
                        "",
                        "Total Pedido:",
                        {
                           text: `R$ ${totalPedido
                              .toFixed(2)
                              .replace(".", ",")}`,
                           bold: true,
                           fillColor: "#FFFF00",
                        },
                     ],
                  ],
               },
            },
            { text: "Observações", style: "subheader" },
            observacoes,
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

      // Gerar o PDF
      pdfMake.createPdf(docDefinition).download("pedido.pdf");
   }

   // Adicionar evento de escuta para o botão de geração de pedido
   const btnGerarPedido = document.getElementById("btnGerarPedido");
   btnGerarPedido.addEventListener("click", gerarPDF);

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
});
