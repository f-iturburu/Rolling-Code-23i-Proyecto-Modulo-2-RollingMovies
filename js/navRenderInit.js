import { navLogged,navLoginAdmin,navUnlogged } from "./Modules/navLogin.js";
import { User } from "./Classes/userClass.js";


let header = document.getElementById("header")

const createAdmin = () => {

  if(localStorage.getItem("users") === null ||  JSON.parse(localStorage.getItem("Movies")).length === 0  ){
    let userAdmin = new User("admin","RollingMovies23i@gmail.com","Rolling23i","Admin");
    let arrayAdmin = [];
    arrayAdmin.push(userAdmin);
    localStorage.setItem("users",JSON.stringify(arrayAdmin));
  }
}


window.onload = () => {
  createAdmin()
  let userLogged = JSON.parse(localStorage.getItem("userLogged"));

  if( userLogged != null ){
    if(userLogged.role === "Admin"){
      header.innerHTML  = navLoginAdmin()
    }else{
      header.innerHTML = navLogged()
    }
    
  }else{
     header.innerHTML = navUnlogged()
  }
  

}