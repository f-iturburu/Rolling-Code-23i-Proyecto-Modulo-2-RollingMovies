let formPassword = document.getElementById("passwordLogin");
let icnPassword = document.getElementById("iconPassword");


document.addEventListener("click", (e) => {
  e.preventDefault();
  const { target } = e;
  console.log(target);

  if (target.matches("#hidePassword")) {
    console.log("hide passowrd");
    formPassword.type = "password";
    icnPassword.innerHTML = '<i class="fa-regular fa-eye" id="showPassword">';
  } else if (target.matches("#showPassword")) {
    console.log("show password");
    formPassword.type = "text";
    icnPassword.innerHTML =
      '<i class="fa-regular fa-eye-slash" id="hidePassword"></i> ';
  }
});



