let panelOptions = document.getElementById("panelOpciones");
let panelFavorites = document.getElementById("panelFavoritos");

let url = window.location.search;

if (url.match("favorites")) {
  panelOptions.className =
    "col-md-12 col-lg-9 bgPanelUserOptions rounded rounded-5 d-none";
  panelFavorites.className =
    "col-md-12 col-lg-9 bgPanelUserOptions rounded rounded-5";
} else {
  panelOptions.className =
    "col-md-12 col-lg-9 bgPanelUserOptions rounded rounded-5";
  panelFavorites.className =
    "col-md-12 col-lg-9 bgPanelUserOptions rounded rounded-5 d-none";
}

function validateUserLogged() {
  let forms = document.getElementsByTagName("input");
  let userLogged = JSON.parse(localStorage.getItem("userLogged"));

  if (userLogged != null) {
    if (userLogged.role == "Admin") {
      for (const i of forms) {
        i.setAttribute("disabled", "");
        i.setAttribute("placeholder", "No puedes modificar este campo");
      }
    }
  } else {
    window.location.href = "/index.html";
  }
}

validateUserLogged();

let IcnCurrentPassword = document.getElementById("iconCurrentPassword");
let IcnNewPassowrd1 = document.getElementById("iconNewPassword1");
let IcnNewPassowrd2 = document.getElementById("iconNewPassword2");
let formChangeUsername = document.getElementById("formCambiarUsername");
let formChangeEmail = document.getElementById("formCambiarEmail");
let formChangePassword = document.getElementById("formCambiarContraseña");
let currentPasswordForm = document.getElementById(
  "passworCambiarContraseña-Actual"
);
let newPassword1Form = document.getElementById("passworCambiarContraseña1");
let newPassword2Form = document.getElementById("passworCambiarContraseña2");

let modalChangeSuccess = new bootstrap.Modal(
  document.getElementById("modalChangeSuccess")
);

currentPasswordForm.addEventListener("keyup", validateCurrentPassword);

function validateCurrentPassword() {
  let userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged.password === currentPasswordForm.value) {
    currentPasswordForm.className = "form-control is-valid ";
    return true;
  } else {
    currentPasswordForm.className = "form-control is-invalid ";
    return false;
  }
}

newPassword1Form.addEventListener("keyup", validateNewPassword);

function validateNewPassword() {
  let validate = true;
  let password = newPassword1Form.value;
  let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;

  if (!passwordRegExp.test(password)) {
    newPassword1Form.className = "form-control is-invalid";
    validate = false;
  } else if (currentPasswordForm.value === newPassword1Form.value) {
    newPassword1Form.className = "form-control is-invalid";
    validate = false;
  } else {
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

let btnSavePassword = document.getElementById("guardarContraseña");
btnSavePassword.addEventListener("click", validateGeneralNewPassword);

function validateGeneralNewPassword(e) {
  e.preventDefault();
  if (
    validateCurrentPassword() &
    validateNewPassword() &
    validateNewPasswordMatch()
  ) {
    let userLogged = JSON.parse(localStorage.getItem("userLogged"));
    let arrayUsers = JSON.parse(localStorage.getItem("users"));

    arrayUsers.forEach((i) => {
      if (userLogged.id == i.id) {
        userLogged.password = newPassword1Form.value;
        i.password = newPassword1Form.value;
      }
    });

    localStorage.setItem("userLogged", JSON.stringify(userLogged));
    localStorage.setItem("users", JSON.stringify(arrayUsers));
    formChangeUsername.reset();
    modalChangeSuccess.show();
    setTimeout(function () {
      modalChangeSuccess.hide();
    }, 2000);
  }
}

let IcnChangeEmail = document.getElementById("iconPasswordCambiarEmail");
let currentEmailForm = document.getElementById("emailActual");
let newEmailForm = document.getElementById("nuevoEmail");
let passwordChangeEmailForm = document.getElementById("passwordCambiarEmail");

passwordChangeEmailForm.addEventListener("keyup", validatePasswordChangeEmail);
currentEmailForm.addEventListener("keyup", validateCurrentMail);

function validateCurrentMail() {
  let userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged.email === currentEmailForm.value) {
    currentEmailForm.className = "form-control is-valid ";
    return true;
  } else {
    currentEmailForm.className = "form-control is-invalid ";
    return false;
  }
}

newEmailForm.addEventListener("keyup", validateNewEmail);

function validateNewEmail() {
  let validate = true;
  let email = newEmailForm.value;
  let emailRegExp = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;

  if (!emailRegExp.test(email)) {
    validate = false;
  }

  let array = JSON.parse(localStorage.getItem("users")) || [];

  if (array != []) {
    let emailFound = array.find((user) => user.email == email);
    if (emailFound === undefined) {
      emailAlreadyTakenAlert.className = "d-none ";
    } else {
      emailAlreadyTakenAlert.className = "alert alert-danger mt-2 p-2";
      validate = false;
    }
  }

  if (validate) {
    newEmailForm.className = "form-control is-valid";
  } else {
    newEmailForm.className = "form-control is-invalid";
  }
  return validate;
}

function validatePasswordChangeEmail() {
  let userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged.password === passwordChangeEmailForm.value) {
    passwordChangeEmailForm.className = "form-control is-valid ";
    return true;
  } else {
    passwordChangeEmailForm.className = "form-control is-invalid ";
    return false;
  }
}

let userLogged = JSON.parse(localStorage.getItem("userLogged"));
let arrayUsers = JSON.parse(localStorage.getItem("users"));
let user = arrayUsers.find((i) => i.id === userLogged.id);

let btnSaveEmail = document.getElementById("guardarEmail");
btnSaveEmail.addEventListener("click", validateGeneralNewEmail);

function validateGeneralNewEmail(e) {
  e.preventDefault();

  if (
    validateCurrentMail() &
    validateNewEmail() &
    validatePasswordChangeEmail()
  ) {
    let userLogged = JSON.parse(localStorage.getItem("userLogged"));
    let arrayUsers = JSON.parse(localStorage.getItem("users"));

    arrayUsers.forEach((i) => {
      if (userLogged.id == i.id) {
        userLogged.email = newEmailForm.value;
        i.email = newEmailForm.value;
      }
    });

    localStorage.setItem("userLogged", JSON.stringify(userLogged));
    localStorage.setItem("users", JSON.stringify(arrayUsers));

    formChangeEmail.reset();
    modalChangeSuccess.show();
    setTimeout(function () {
      modalChangeSuccess.hide();
    }, 2000);
  }
}

let passwordChangeUsernameForm = document.getElementById(
  "passwordCambiarUsername"
);
let currentUsernameForm = document.getElementById("usernameActual");
let newUsernameForm = document.getElementById("usernameNuevo");
let IcnChangeUsername = document.getElementById("iconPasswordCambiarUsername");

currentUsernameForm.addEventListener("keyup", validateCurrentUsername);
function validateCurrentUsername() {
  let userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged.userName === currentUsernameForm.value) {
    currentUsernameForm.className = "form-control is-valid ";
    return true;
  } else {
    currentUsernameForm.className = "form-control is-invalid ";
    return false;
  }
}

newUsernameForm.addEventListener("keyup", validateNewUsername);

function validateNewUsername() {
  let validate = true;
  let userName = newUsernameForm.value;
  let usernameRegExp = /^[a-zA-Z0-9][a-zA-Z0-9]{2,8}[a-zA-Z0-9]$/;
  if (!usernameRegExp.test(userName)) {
    validate = false;
  }
  let array = JSON.parse(localStorage.getItem("users")) || [];
  if (array != []) {
    let userFound = array.find(
      (user) => user.userName.toLowerCase() === userName.toLowerCase()
    );
    if (userFound === undefined) {
      userAlreadyTakenAlert.className = "d-none ";
    } else {
      userAlreadyTakenAlert.className = "alert alert-danger mt-2 p-2";
      validate = false;
    }
  }
  if (validate) {
    newUsernameForm.className = "form-control is-valid";
  } else {
    newUsernameForm.className = "form-control is-invalid";
  }
  return validate;
}
passwordChangeUsernameForm.addEventListener(
  "keyup",
  validatePasswordChangeUsername
);
function validatePasswordChangeUsername() {
  let userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged.password === passwordChangeUsernameForm.value) {
    passwordChangeUsernameForm.className = "form-control is-valid ";
    return true;
  } else {
    passwordChangeUsernameForm.className = "form-control is-invalid ";
    return false;
  }
}

let btnUsername = document.getElementById("guardarNombreDeUsuario");
btnUsername.addEventListener("click", validateGeneralNewUsername);
function validateGeneralNewUsername(e) {
  e.preventDefault;
  if (
    validateCurrentUsername() &
    validateNewUsername() &
    validatePasswordChangeUsername()
  ) {
    let userLogged = JSON.parse(localStorage.getItem("userLogged"));
    let arrayUsers = JSON.parse(localStorage.getItem("users"));

    arrayUsers.forEach((i) => {
      if (userLogged.id == i.id) {
        userLogged.userName = newUsernameForm.value;
        i.userName = newUsernameForm.value;
      }
    });

    localStorage.setItem("userLogged", JSON.stringify(userLogged));
    localStorage.setItem("users", JSON.stringify(arrayUsers));

    formChangePassword.reset();
    modalChangeSuccess.show();
    setTimeout(function () {
      modalChangeSuccess.hide();
    }, 2000);
  }
}

document.addEventListener("click", (e) => {
  const { target } = e;

  if (
    target.matches("#hidePasswordContraseñaActual") ||
    target.matches("#hidePasswordCambiarContraseña1") ||
    target.matches("#hidePasswordCambiarContraseña2") ||
    target.matches("#hidePasswordCambiarEmail") ||
    target.matches("#hidePasswordCambiarUsername")
  ) {
    if (target.matches("#hidePasswordContraseñaActual")) {
      currentPasswordForm.type = "password";
      IcnCurrentPassword.innerHTML =
        '<i class="fa-regular fa-eye" id="showPasswordContraseñaActual">';
    } else if (target.matches("#hidePasswordCambiarContraseña1")) {
      newPassword1Form.type = "password";
      IcnNewPassowrd1.innerHTML =
        '<i class="fa-regular fa-eye" id="showPasswordCambiarContraseña1">';
    } else if (target.matches("#hidePasswordCambiarContraseña2")) {
      newPassword2Form.type = "password";
      IcnNewPassowrd2.innerHTML =
        '<i class="fa-regular fa-eye" id="showPasswordCambiarContraseña2">';
    } else if (target.matches("#hidePasswordCambiarEmail")) {
      passwordChangeEmailForm.type = "password";
      IcnChangeEmail.innerHTML =
        '<i class="fa-regular fa-eye" id="showPasswordCambiarEmail">';
    } else {
      passwordChangeUsernameForm.type = "password";
      IcnChangeUsername.innerHTML =
        '<i class="fa-regular fa-eye" id="showPasswordCambiarUsername">';
    }
  } else if (
    target.matches("#showPasswordContraseñaActual") ||
    target.matches("#showPasswordCambiarContraseña1") ||
    target.matches("#showPasswordCambiarContraseña2") ||
    target.matches("#showPasswordCambiarEmail") ||
    target.matches("#showPasswordCambiarUsername")
  ) {
    if (target.matches("#showPasswordContraseñaActual")) {
      currentPasswordForm.type = "text";
      IcnCurrentPassword.innerHTML =
        '<i class="fa-regular fa-eye-slash" id="hidePasswordContraseñaActual">';
    } else if (target.matches("#showPasswordCambiarContraseña1")) {
      newPassword1Form.type = "text";
      IcnNewPassowrd1.innerHTML =
        '<i class="fa-regular fa-eye-slash" id="hidePasswordCambiarContraseña1">';
    } else if (target.matches("#showPasswordCambiarContraseña2")) {
      newPassword2Form.type = "text";
      IcnNewPassowrd2.innerHTML =
        '<i class="fa-regular fa-eye-slash" id="hidePasswordCambiarContraseña2">';
    } else if (target.matches("#showPasswordCambiarEmail")) {
      passwordChangeEmailForm.type = "text";
      IcnChangeEmail.innerHTML =
        '<i class="fa-regular fa-eye-slash" id="hidePasswordCambiarEmail">';
    } else {
      passwordChangeUsernameForm.type = "text";
      IcnChangeUsername.innerHTML =
        '<i class="fa-regular fa-eye-slash" id="hidePasswordCambiarUsername">';
    }
  }
});

let btnPanelChangeSettings = document.getElementById("changeToSettings");
let btnPanelChangeFavourites = document.getElementById("changeToFavourites");
let settingsPanel = document.getElementById("panelOpciones");

let favouritesPanel = document.getElementById("panelFavoritos");

btnPanelChangeFavourites.addEventListener("click", switchToFavouritesPanel);

function switchToFavouritesPanel() {
  settingsPanel.className =
    "col-md-12 col-lg-9  bgPanelUserOptions  rounded rounded-5 d-none";
  favouritesPanel.className =
    "col-md-12 col-lg-9 bgPanelUserOptions rounded rounded-5";
}

btnPanelChangeSettings.addEventListener("click", switchToSettingsPanel);
function switchToSettingsPanel() {
  settingsPanel.className =
    "col-md-12 col-lg-9 bgPanelUserOptions  rounded rounded-5  ";
  favouritesPanel.className =
    "col-md-12 col-lg-9  bgPanelUserOptions  rounded rounded-5  d-none";
}

let btnPanelChangePassword = document.getElementById("changeToPanelPassword");
let btnPanelChangeEmail = document.getElementById("changeToPanelEmail");
let btnPanelChangeUsername = document.getElementById("changeToPanelUsername");

let panelEmail = document.getElementById("panelCambiarEmail");
let panelPassword = document.getElementById("panelCambiarContraseña");
let panelUsername = document.getElementById("panelCambiarUsername");

btnPanelChangePassword.addEventListener("click", switchToPasswordChangePanel);

function switchToPasswordChangePanel() {
  panelEmail.className = "col-md-12 col-lg-8 mt-lg-3 d-none";
  panelPassword.className = "col-md-12 col-lg-8 mt-lg-3 ";
  panelUsername.className = "col-md-12 col-lg-8 mt-lg-3 d-none";
}

btnPanelChangeEmail.addEventListener("click", switchToEmailChangePanel);
function switchToEmailChangePanel() {
  panelEmail.className = "col-md-12 col-lg-8 mt-lg-3 ";
  panelPassword.className = "col-md-12 col-lg-8 mt-lg-3  d-none";
  panelUsername.className = "col-md-12 col-lg-8 mt-lg-3 d-none";
}

btnPanelChangeUsername.addEventListener("click", switchToUsernameChangePanel);
function switchToUsernameChangePanel() {
  panelEmail.className = "col-md-12 col-lg-8 mt-lg-3 d-none";
  panelPassword.className = "col-md-12 col-lg-8 mt-lg-3 d-none";
  panelUsername.className = "col-md-12 col-lg-8 mt-lg-3  ";
}
