import { User } from "./userClass.js";
import { generateIdUsers } from "./id.js";





let formPasswordRegistro = document.getElementById("passwordRegistro");

let formPasswordRegistro2 = document.getElementById("passwordRegistro2");

let formUser = document.getElementById("usernameRegistro");

let formEmail = document.getElementById("emailRegistro");

let userAlreadyTakenAlert = document.getElementById("userAlreadyTakenAlert");

let emailAlreadyTakenAlert = document.getElementById("emailAlreadyTakenAlert");

let  modalRegisterSuccess = new bootstrap.Modal(document.getElementById('modalRegisterSuccess'))
let  modalRegisterFailed = new bootstrap.Modal(document.getElementById('modalRegisterFailed'))

export function validateUserName() {

  

  let validate = true;

  let userName = formUser.value;

  let usernameRegExp = /^[a-zA-Z0-9][a-zA-Z0-9]{2,8}[a-zA-Z0-9]$/;

  if (!usernameRegExp.test(userName)) {
 
    validate = false;
  } 

  let array = JSON.parse(localStorage.getItem("users")) || [];

  if (array != []) {
  

    let userFound = array.find(user => user.userName.toLowerCase() === userName.toLowerCase());
    if(userFound === undefined){
        userAlreadyTakenAlert.className = "d-none ";
        
    }else{
     
        userAlreadyTakenAlert.className = "alert alert-danger mt-2 p-2";
        validate = false;
    }

  }

  if (validate){
    
    formUser.className = "form-control is-valid";
  }else{
    formUser.className = "form-control is-invalid";
   

  }
  return validate;
}

export function validateEmail() {
  let validate = true;

  let email = formEmail.value;

  let emailRegExp = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;

  if (!emailRegExp.test(email)) {
    validate = false;
  } 

  let array = JSON.parse(localStorage.getItem("users")) || [];

  if (array != []) {
    let emailFound = array.find(user => user.email == email);
    if(emailFound === undefined){
        emailAlreadyTakenAlert.className = "d-none ";
    }else{
        emailAlreadyTakenAlert.className = "alert alert-danger mt-2 p-2";
        validate = false;
    }
  }

 if (validate){
    formEmail.className = "form-control is-valid";
  }else{
    formEmail.className = "form-control is-invalid";
  }
  return validate;
}

export function validatePassword() {
  let validate = true;

  let password = formPasswordRegistro.value;

  let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

  if (!passwordRegExp.test(password)) {
    formPasswordRegistro.className = "form-control is-invalid";

    validate = false;
  } else {
    formPasswordRegistro.className = "form-control is-valid";
  }

  return validate;
}

export function validateSecondPassword() {
  let validate = true;

  let password = formPasswordRegistro.value;

  let password2 = formPasswordRegistro2.value;

  if (validatePassword(password)) {
    formPasswordRegistro2.className = "form-control is-valid";

    if (password !== password2) {
      validate = false;

      formPasswordRegistro2.className = "form-control is-invalid";
    }

    return validate;
  } 
  return validate;
}
 

export function validateGeneral(e) {
  e.preventDefault();
  if (
    validateUserName() &
    validateEmail() &
    validatePassword() &
    validateSecondPassword()
  ) {
  
    let arrayUsers = JSON.parse(localStorage.getItem("users")) || [];

    let id = generateIdUsers();
  
      let userFound = arrayUsers.find( i => i.code === id);
  
      while(userFound !== undefined){
  
          id = generateIdUsers();
  
          userFound = arrayUsers.find( i => i.code === id);
      }
  

    let user = new User(
      formUser.value,
      formEmail.value,
      formPasswordRegistro.value,
      "User",
      id
    );

    

    arrayUsers.push(user);
    localStorage.setItem("users", JSON.stringify(arrayUsers));
    localStorage.setItem("userLogged", JSON.stringify( user))
    let userLogged = JSON.parse(localStorage.getItem("userLogged"));

    

    let params = {
      username: formUser.value,
      email: formEmail.value, 
      id:userLogged.id
    };
    
    emailjs.send('service_lhhp93f', 'template_z03qj7o', params, 'OaYg6XmB036zfDoyB')
      .then(function(response) {
        modalRegisterSuccess.show()
        setTimeout(function(){
          window.location.href="/index.html"
      },3500);
        
      }, function(error) {
        modalRegisterFailed.show()
      });
    

  
  }
}



