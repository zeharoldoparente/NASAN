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
