let formEmail = document.getElementById("emailRecuperarContraseña")
let btnsendCode = document.getElementById("sendCode")
let insertEmailPanel = document.getElementById("insertEmailPanel")
let insertCodePanel = document.getElementById("insertCodePanel")



formEmail.addEventListener("keyup",validateCurrentMail)
function validateCurrentMail() {
    let arrayUsers= JSON.parse(localStorage.getItem("users"));
    let emailFound = arrayUsers.find(i => i.email== formEmail.value)
   
    if (emailFound !== undefined) {
        formEmail.className = "form-control is-valid";
        btnsendCode.removeAttribute("disabled")
        btnsendCode.className = " btn btn-primary ms-auto"
      return true;
    } else {
        formEmail.className = "form-control is-invalid ";
        btnsendCode.setAttribute("disabled","")
        btnsendCode.className = "btn btn-secondary ms-auto"
      return false;
    }
  }


let CodeRecoverPassword = ''
function idResetPassword(){
    let id = (Math.trunc(Math.random() * (1000 - 10000) + 10000));
    id = id.toString()
    CodeRecoverPassword = id
}
  btnsendCode.addEventListener("click",sendCode)
  function sendCode(e){
    e.preventDefault()
    let arrayUsers= JSON.parse(localStorage.getItem("users"));
    let emailFound = arrayUsers.find(i => i.email== formEmail.value)

    localStorage.setItem("changePasswordUser", JSON.stringify(emailFound))
    idResetPassword()
    insertEmailPanel.className = "d-flex container-fluid justify-content-center pt-5 d-none"
    insertCodePanel.className = "d-flex container-fluid justify-content-center pt-5"    

    let params = {
      email:formEmail.value ,
      code: CodeRecoverPassword
    };

    emailjs.send('service_964jokz', 'template_j3s5rkk', params, 'jRgR-C0QuNEtrWXm_')
    .then(function(response) {
   }, function(error) {
  
   });
  }

let formCodeRecoverPassword = document.getElementById("codigoRecuperarContraseña")
formCodeRecoverPassword.addEventListener("keyup",validateCode)
let resetPasswordPanel = document.getElementById("resetPasswordPanel")


function validateCode(){
    if (formCodeRecoverPassword.value == CodeRecoverPassword) {
        insertCodePanel.className = "d-flex container-fluid justify-content-center pt-5 d-none"   
        resetPasswordPanel.className = "d-flex container-fluid justify-content-center pt-5"        
    } 
}








let newPassword1Form = document.getElementById('passworCambiarContraseña1')
let newPassword2Form = document.getElementById('passworCambiarContraseña2')

newPassword1Form.addEventListener("keyup", validateNewPassword);

function validateNewPassword() {
  let validate = true;

  let password = newPassword1Form.value;

  let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

  if (!passwordRegExp.test(password)) {
    newPassword1Form.className = "form-control is-invalid";

    validate = false;
  }  else {
    newPassword1Form.className = "form-control is-valid";
  }

  return validate;
}

newPassword2Form.addEventListener("keyup", validateNewPasswordMatch);

function validateNewPasswordMatch() {
  let validate = true;

  let password = newPassword1Form.value;

  let password2 = newPassword2Form.value;

  if (validateNewPassword(password)) {
    newPassword2Form.className = "form-control is-valid";

    if (password !== password2) {
      validate = false;

      newPassword2Form.className = "form-control is-invalid";
    }

    return validate;
  }
  return validate;
}


let  modalChangeSuccess = new bootstrap.Modal(document.getElementById('modalChangeSuccess'))
let btnSavePassword = document.getElementById("guardarContraseña");
btnSavePassword.addEventListener("click", validateGeneralNewPassword);

function validateGeneralNewPassword(e) {
  e.preventDefault()
  if (
    validateNewPassword() &
    validateNewPasswordMatch()
  ) {
    let changePasswordUser = JSON.parse(localStorage.getItem("changePasswordUser"));
    let arrayUsers = JSON.parse(localStorage.getItem("users"));

    arrayUsers.forEach((i) => {
      if (changePasswordUser.id == i.id) {
        i.password = newPassword1Form.value;
        localStorage.setItem("userLogged", JSON.stringify(i));
      }
    });

  
    localStorage.setItem("users", JSON.stringify(arrayUsers));
    localStorage.removeItem("changePasswordUser")



    modalChangeSuccess.show()
    setTimeout(function(){
        window.location.href="/index.html"
 },2500);
 
  }
  
}

let IcnNewPassword1 = document.getElementById("iconNewPassword1");
let IcnNewPassword2 = document.getElementById("iconNewPassword2");
document.addEventListener("click", (e) => {
    const { target } = e  
    if (
      
      target.matches("#hidePasswordCambiarContraseña1") ||
      target.matches("#hidePasswordCambiarContraseña2") 
    ) {
  
      if (target.matches("#hidePasswordCambiarContraseña1")) {
        newPassword1Form.type = "password";
        IcnNewPassword1.innerHTML =
          '<i class="fa-regular fa-eye" id="showPasswordCambiarContraseña1">';
      } else if (target.matches("#hidePasswordCambiarContraseña2")) {
        newPassword2Form.type = "password";
        IcnNewPassword2.innerHTML =
          '<i class="fa-regular fa-eye" id="showPasswordCambiarContraseña2">';
      } 
    } else if (
      
      target.matches("#showPasswordCambiarContraseña1") ||
      target.matches("#showPasswordCambiarContraseña2") 
    ) {
       if (target.matches("#showPasswordCambiarContraseña1")) {
        newPassword1Form.type = "text";
        IcnNewPassword1.innerHTML =
          '<i class="fa-regular fa-eye-slash" id="hidePasswordCambiarContraseña1">';
      } else if (target.matches("#showPasswordCambiarContraseña2")) {
        newPassword2Form.type = "text";
        IcnNewPassword2.innerHTML =
          '<i class="fa-regular fa-eye-slash" id="hidePasswordCambiarContraseña2">';
      } 
    }
  });

