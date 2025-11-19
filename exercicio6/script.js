const spanPreco = document.getElementById("preco");
const statusPreco = document.getElementById("status-preco");

// Converte para número
const preco = parseFloat(spanPreco.textContent);

// Preço base de comparação
const precoBase = 100;

// Se o preço for menor que o base, é promoção
if (preco < precoBase) {
  statusPreco.textContent = "Promoção";
  statusPreco.style.color = "green";
} else {
  statusPreco.textContent = "Caro";
  statusPreco.style.color = "red";
}
