// ===== MODO ESCURO =====
const btnTheme = document.getElementById("toggleTheme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnTheme.textContent = "☀️ Modo claro";
  } else {
    btnTheme.textContent = "🌙 Modo escuro";
  }
});
