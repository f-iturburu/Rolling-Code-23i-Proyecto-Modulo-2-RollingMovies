
import {validatePassword, validateSecondPassword, validateEmail, validateUserName, validateGeneral } from "./Classes/validacionesRegistro.js";


let formPasswordRegistro = document.getElementById("passwordRegistro");
let icnPasswordRegistro = document.getElementById("iconPasswordRegistro");

let formPasswordRegistro2 = document.getElementById("passwordRegistro2");
let icnPasswordRegistro2 = document.getElementById("iconPasswordRegistro2");

let btnRegistro = document.getElementById("registro");


let formUser = document.getElementById("usernameRegistro");

let formEmail = document.getElementById("emailRegistro");



formPasswordRegistro.addEventListener('keyup', validatePassword)

formUser.addEventListener('keyup', validateUserName)
formEmail.addEventListener('keyup', validateEmail)
formPasswordRegistro2.addEventListener('keyup',validateSecondPassword)
formPasswordRegistro2.addEventListener('paste', e => e.preventDefault());


btnRegistro.addEventListener('click', validateGeneral)

document.addEventListener("click", (e) => {
  const { target } = e;

  if (
    target.matches("#hidePasswordRegistro") ||
    target.matches("#hidePasswordRegistro2")
  ) {
    if (target.matches("#hidePasswordRegistro")) {
      formPasswordRegistro.type = "password";
      icnPasswordRegistro.innerHTML =
        '<i class="fa-regular fa-eye" id="showPasswordRegistro">';
    } else {
      formPasswordRegistro2.type = "password";
      icnPasswordRegistro2.innerHTML =
        '<i class="fa-regular fa-eye" id="showPasswordRegistro2">';
    }
  } else if (
    target.matches("#showPasswordRegistro") ||
    target.matches("#showPasswordRegistro2")
  ) {
    if (target.matches("#showPasswordRegistro")) {
      formPasswordRegistro.type = "text";
      icnPasswordRegistro.innerHTML =
        '<i class="fa-regular fa-eye-slash" id="hidePasswordRegistro"></i> ';
    } else {
      formPasswordRegistro2.type = "text";
      icnPasswordRegistro2.innerHTML =
        '<i class="fa-regular fa-eye-slash" id="hidePasswordRegistro2"></i> ';
    }
  }
});





