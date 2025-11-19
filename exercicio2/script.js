// Variável de controle
let mostrarMensagem = true; // troque para false e veja o que acontece

const mensagem = document.getElementById("mensagem");

// Se for true, mostra. Se não, esconde.
if (mostrarMensagem) {
  mensagem.style.display = "block"; // aparece
} else {
  mensagem.style.display = "none"; // esconde
}
