console.log("JavaScript conectado com sucesso!");

const btn = document.getElementById("btnMensagem");
const msg = document.getElementById("mensagem");

btn.addEventListener("click", () => {
  msg.textContent = "Funcionou! JS está interagindo com o HTML ✅";
});
