import { projetos } from "./projects.js";

// ===== MODO ESCURO =====
const btnTheme = document.getElementById("toggleTheme");

// Carregar tema salvo
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "dark") {
  document.body.classList.add("dark");
  btnTheme.textContent = "☀️ Modo claro";
}

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");

  if (document.body.classList.contains("dark")) {
    btnTheme.textContent = "☀️ Modo claro";
  } else {
    btnTheme.textContent = "🌙 Modo escuro";
  }
});

const grid = document.getElementById("projetosGrid");

function renderProjetos(lista) {
  grid.innerHTML = "";

  lista.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-card", "");

    card.innerHTML = `
      <h3>${p.titulo}</h3>
      <p>${p.descricao}</p>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
    `;

    // Animação de clique (funciona em cards criados via JS)
    card.addEventListener("click", () => {
      card.classList.add("card-click");
      setTimeout(() => card.classList.remove("card-click"), 180);
    });

    grid.appendChild(card);
  });
}

renderProjetos(projetos);
