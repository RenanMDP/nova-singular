const togglePassword = () => {
  const togglePassword = document.querySelector(".far");
  const password = document.querySelector("#password");
  if (password.type === "password") {
    togglePassword.setAttribute("class", "far fa-eye-slash");
    password.type = "text";
  } else {
    togglePassword.setAttribute("class", "far fa-eye");
    password.type = "password";
  }
};

export { togglePassword };