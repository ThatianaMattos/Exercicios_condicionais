// Troque o valor para "offline" e teste também
let statusUsuario = "online";

const avatar = document.getElementById("avatar");

if (statusUsuario === "online") {
  avatar.setAttribute("src", "avatar-online.png");
} else {
  avatar.setAttribute("src", "avatar-offline.png");
}
