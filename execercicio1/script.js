// Exercício 1: Cor da caixa conforme o texto

// Missão
// Ler o texto dentro de um elemento e mudar a cor de acordo com o que está escrito.Pega o elemento da caixa

const caixa = document.getElementById("caixa-status");

// Lê o texto que está dentro da caixa
let texto = caixa.textContent.toLowerCase(); // deixar tudo minúsculo facilita

// Verifica o texto e muda a cor
if (texto === "sucesso") {
  caixa.style.backgroundColor = "green";
  caixa.style.color = "white";
} else if (texto === "alerta") {
  caixa.style.backgroundColor = "yellow";
  caixa.style.color = "black";
} else if (texto === "erro") {
  caixa.style.backgroundColor = "red";
  caixa.style.color = "white";
} else {
  caixa.style.backgroundColor = "gray";
  caixa.style.color = "white";
}
