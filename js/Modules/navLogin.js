

export const navLogged = () =>{

  
   return ` <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top nav">
   <div class="container-fluid">
     <a class="navbar-brand" href="/index.html"><img class="img-fluid logo" src="/img/logo1.png" alt=""></a>
     <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarNavDropdown">
       <ul class="navbar-nav ms-auto me-5">
         <li class="nav-item  mt-2">
           <a class="nav-link fs-5 text-hover text-hover-fill-goes-down" href="/index.html">Inicio</a>
         </li>
         <li class="nav-item ">
           <a class="nav-link fs-5 text-hover-fill-goes-down" href="/pages/contacto.html">Contacto</a>
         </li>
         <li class="nav-item ">
           <a class="nav-link fs-5 text-hover-fill-goes-down " href="/pages/sobreNosotros.html">Sobre Nosotros</a>
         </li>
         <li class="nav-item dropdown ">
           <a class="nav-link dropdown-toggle fs-5 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="bi bi-person"></i>
           </a>
           <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
             <li ><a class="dropdown-item w-100 d-flex" href="/pages/panelDeUsuario.html?options">Opciones <i class="bi bi-gear ms-auto"></i></a></li>
             <li><a class="dropdown-item w-100 d-flex" href="/pages/panelDeUsuario.html?favorites">Favoritos <i class="bi bi-star ms-auto"></i></a></li>
             <li><a  onclick="cerrarSesion()" class="dropdown-item w-100 d-flex" id="logOut">Cerrar sesion <i class="bi bi-box-arrow-in-left ms-auto"></i></a></li>
           </ul>
         </li>
       </ul>
     </div>
   </div>
 </nav>`
}

export const navLoginAdmin = () => {

    return `
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg  fixed-top  nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html"><img class="img-fluid logo"  src="/img/logo1.png" alt=""></a>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto me-5">
          <li class="nav-item mt-2 ">
            <a class="nav-link fs-5 text-hover text-hover-fill-goes-down " href="/index.html">Inicio</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link fs-5 text-hover-fill-goes-down" href="/pages/contacto.html">Contacto</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link fs-5 text-hover-fill-goes-down" href="/pages/sobreNosotros.html">Sobre Nosotros</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link fs-5 text-hover-fill-goes-down" href="/pages/admin.html">Admin <i class="bi bi-card-checklist"></i></a>
          </li>
          <li class="nav-item dropdown  ">
            <a class="nav-link dropdown-toggle fs-5"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person "></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
              <li ><a class="dropdown-item w-100 d-flex" href="/pages/panelDeUsuario.html?options">Opciones <i class="bi bi-gear ms-auto"></i></a></li>
              <li><a class="dropdown-item w-100 d-flex" href="/pages/panelDeUsuario.html?favorites">Favoritos <i class="bi bi-star ms-auto"></i></a></li>
              <li><a onclick="cerrarSesion()" class="dropdown-item w-100 d-flex" id="logOut">Cerrar sesion <i class="bi bi-box-arrow-in-left ms-auto"></i></a></li>
            </ul>
          </li>
      
        </ul>
      </div>
    </div>
  </nav>
    `
}

export const navUnlogged = () => {

  return`
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg  fixed-top nav ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html"><img class="img-fluid logo" src="/img/logo1.png" alt=""></a>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto me-5">
        <li class="nav-item mt-2">
          <a class="nav-link fs-5 text-hover text-hover-fill-goes-down" href="/index.html">Inicio</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link fs-5 text-hover-fill-goes-down" href="/pages/contacto.html">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 text-hover-fill-goes-down" href="/pages/sobreNosotros.html">Sobre Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5 text-hover-fill-goes-down" data-bs-toggle="modal" data-bs-target="#loginModal" id ="login">Login<i class="bi bi-box-arrow-in-right ms-2"></i></a>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    

<!-- Modal -->
<div class="modal fade" id="loginModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Login</h1>
  <button type="button" class="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
  <form>
    <div class="mb-3">
      <label for="text" class="form-label">Usuario o Correo Electronico</label>
      <input type="text" class="form-control" id="userLogin" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">Nunca compartiremos tu dirección de correo electronico con alguien mas.</div>
    </div>
    <label for="passwordLogin" class="form-label">Contraseña</label>
    <div class="mb-3 input-group">
      <input type="password" class="form-control" id="passwordLogin">
      <span class="input-group-text" id="iconPassword"> <i onclick="passwordOnOff()" class="fa-regular fa-eye" id="showPassword"></i></span>
      
    </div>
    <div class="d-flex justify-content-between">
      <div class="text-center d-flex"> <p class="text-secondary"><a href="/pages/recuperarContraseña.html"> Recuperar contraseña</a>  </p> </div>
      <div class="text-center d-flex"> <p class="text-secondary">¿Aun no tienes una cuenta? <a href="/pages/registro.html"> Registrate</a>  </p> </div>

    </div>
    <div class="alert alert-danger  d-none mt-2 " role="alert" id="loginIncorrect">
    El nombre de usuario o contraseña son incorrectos
    </div>
  </form>
  
</div>
<div class="modal-footer d">

  <button type="button" class="btn btn-secondary  rounded-5 px-2 ms-auto " data-bs-dismiss="modal">Cerrar</button>
  <button onclick="iniciarSesion()" type="submit" class="btn btn-primary  rounded-5 px-2" id="btnLogin">Ingresar</button>
</div>
</div>
</div>
</div>`
}

function cerrarSesion(){

  localStorage.removeItem("userLogged")

  location.reload()

}

function iniciarSesion(){

  let incorrectLoginAlert = document.getElementById ("loginIncorrect")
  let userName = document.getElementById("userLogin").value;
  let password = document.getElementById("passwordLogin").value;
  let arrayUsers = JSON.parse( localStorage.getItem("users"));
  let userFound = arrayUsers.find(i => ( userName.toLowerCase() === i.userName.toLowerCase() || userName.toLowerCase() === i.email.toLowerCase() ) && (password === i.password));
    
  if(userFound === undefined){
      incorrectLoginAlert.className= "alert alert-danger mt-2 p-2"
    }else{

      incorrectLoginAlert.className= "alert alert-danger d-none mt-2"

      localStorage.setItem("userLogged", JSON.stringify(userFound));

      let userLogged = JSON.parse (localStorage.getItem("userLogged"));
      if (userLogged.role === 'Admin') {

        window.location.href="/pages/admin.html"

      } else{

        location.reload()
      }
  }



}

function passwordOnOff(){

  let formPassword = document.getElementById("passwordLogin");

  let  icnPassword= document.getElementById("iconPassword");

  let eye = icnPassword.children[0];

  if (eye.id === "hidePassword" ) {

    formPassword.type = "password";

    icnPassword.innerHTML = '<i  onclick="passwordOnOff()" class="fa-regular fa-eye" id="showPassword">';
  } 

  else if (eye.id === "showPassword") {

    formPassword.type = "text";

    icnPassword.innerHTML = '<i   onclick="passwordOnOff()" class="fa-regular fa-eye-slash" id="hidePassword"></i> ';
}
}

window.cerrarSesion = cerrarSesion;
window.iniciarSesion = iniciarSesion;
window.passwordOnOff = passwordOnOff;