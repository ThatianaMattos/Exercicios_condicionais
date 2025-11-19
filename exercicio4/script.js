// Tente trocar entre "claro" e "escuro"
let tema = "escuro";

const body = document.body;

if (tema === "escuro") {
  body.style.backgroundColor = "#111111";
  body.style.color = "#ffffff";
} else if (tema === "claro") {
  body.style.backgroundColor = "#ffffff";
  body.style.color = "#111111";
}
