import { togglePassword } from "./togglePassword.js";
document.querySelector("#password").addEventListener("click", () => {
  togglePassword();
});

// Criação de usuário
const handleFormSubmit = event => {
  event.preventDefault();

  const userName = document.querySelector("#userName");
  const password = document.querySelector("#password");

  if (confirm(`Confirma a criação do usuário?`)) {
     localStorage.setItem("userName", userName.value);
     localStorage.setItem("password", password.value);
    alert(`Usuário ${localStorage.getItem("userName")} criado! Senha ${localStorage.getItem("password")}`);
  } else {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    alert(`Operação cancelada!`);
  }
};

const form = document.querySelector("#signup-form");
form.addEventListener("submit", handleFormSubmit);