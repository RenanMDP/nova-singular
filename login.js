import { togglePassword } from './togglePassword.js';
document.querySelector("#password").addEventListener("click", () => {
  togglePassword();
});

// Lembrador de usuário e senha
document.querySelector("#accReminder").addEventListener("click", () => {
  document.querySelector("#userName").value = localStorage.getItem("userName");
  document.querySelector("#password").value = localStorage.getItem("password");
});

// Removerdor de usuário e senha
document.querySelector("#accRemover").addEventListener("click", () => {
  if(confirm("Deseja realmente remover o usuário?")) {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    alert("Usuário removido com successo!");
  } else {
    alert("Operação cancelada!");
  }
});

// Validação de login
document.querySelector("#validateLogin").addEventListener("click", event => {
  event.preventDefault();

  if (document.querySelector("#userName").value === localStorage.getItem("userName") && document.querySelector("#password").value === localStorage.getItem("password")) {
    location.href="sistema.html";
  } else if (document.querySelector("#userName").value !== localStorage.getItem("userName")) {
    alert("Nome de usuário incorreto!");
  } else if (document.querySelector("#password").value !== localStorage.getItem("password")) {
    alert("Senha incorreta!");
  }
});