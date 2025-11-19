const spanNota = document.getElementById("nota");
const resultadoNota = document.getElementById("resultado-nota");

// Converte o texto para número (pode ter casas decimais)
const nota = parseFloat(spanNota.textContent);

// Exemplo de regra
// 70 ou mais: Aprovado
// entre 50 e 69: Recuperação
// abaixo de 50: Reprovado
if (nota >= 70) {
  resultadoNota.textContent = "Aprovado";
} else if (nota >= 50) {
  resultadoNota.textContent = "Recuperação";
} else {
  resultadoNota.textContent = "Reprovado";
}
