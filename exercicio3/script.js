// Pega o texto que está no span
const spanIdade = document.getElementById("idade");
const resultadoIdade = document.getElementById("resultado-idade");

// Converte o texto para número
const idade = parseInt(spanIdade.textContent);

if (idade >= 18) {
  resultadoIdade.textContent = "Maior de idade";
} else {
  resultadoIdade.textContent = "Menor de idade";
}
