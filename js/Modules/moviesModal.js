import { parseUrl } from "../Classes/parseUrLs.js";
import { User } from "../Classes/userClass.js";


let  modalNotLoggedPlay = new bootstrap.Modal(document.getElementById('modalNotLoggedPlay'))
let  modalNotLoggedFav = new bootstrap.Modal(document.getElementById('modalNotLoggedFav'))
let modalMovies = new bootstrap.Modal(document.getElementById('modalVerMas'))

let modalMovieLoginFav = document.getElementById("modalMovieLoginFav")
modalMovieLoginFav.addEventListener("click",openLoginModal)

let modalMovieLoginPlay = document.getElementById("modalMovieLoginPlay")
modalMovieLoginPlay.addEventListener("click",openLoginModal)

function openLoginModal(e){
  e.preventDefault()
  let modalLogin = new bootstrap.Modal(document.getElementById('loginModal'))

  modalMovies.hide()
  modalNotLoggedFav.hide()
  modalNotLoggedPlay.hide()
  modalLogin.show()
}



export const movieModal = (movie) =>{

  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  
  })  

    let name = movie.name;

    let id = movie.code;

    let URLimg = parseUrl(movie.img);

    let description = movie.description;


    let user = JSON.parse( localStorage.getItem("userLogged")) ;
    let favorite 

    if ( user !== null){
      favorite = user.favoritesMovies.find( i => i == id) ;
    }


    let modal = `
    <div class="card mb-3 bg-dark text-white border-0" >
    <div class="g-0 row flex-column-reverse flex-md-row ">
      <div class=" col-md-4 col-xl-2 text-center ">

        <img src="${URLimg}" class="img-fluid rounded-start " id="imgModalVerMas" >

        
      </div>
      <div class=" col-md-7 col-xl-10 ">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text sinopsis">${description}</p>
          <div class="d-flex justify-content-center justify-content-md-start mt-1">

       
            <i  onclick="abrirReproductor('${id}')" class="bi bi-play-btn text-danger fs-3 "></i>`
 

  
  if(favorite===undefined){
  
    modal += `<i id="iconFavorite" onclick="favoriteOnOff('${id}')" class="bi bi-star text-warning fs-3 ms-5"></i> `
  
  }else{
    modal += `<i id="iconFavorite" onclick="favoriteOnOff('${id}')" class="bi bi-star-fill text-warning fs-3 ms-5"></i> `
  }

    modal +=   `
            <i class="bi bi-share fs-3 text-primary ps-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lo sentimos, esta opción aun no esta disponible."></i>
          </div>
        </div>
      </div>
    </div>
  </div>
      `
  return modal;
}

function favoriteOnOff (id) {

  let user =  (JSON.parse( localStorage.getItem("userLogged")));

  if ( user !== null){

    let  icnFavorite = document.getElementById("iconFavorite");
  
    if ( icnFavorite.matches(".bi-star-fill") ) {
      
      icnFavorite.className = "bi bi-star text-warning fs-3 ms-5";
      
      user.favoritesMovies = user.favoritesMovies.filter( i => i !== id);
  
    } 
  
    else {
  
      user.favoritesMovies.push(id);
  
      icnFavorite.className = "bi bi-star-fill text-warning fs-3 ms-5";
    
    }
  
    localStorage.setItem("userLogged",JSON.stringify(user))
  } else{

   
    modalNotLoggedFav.show()
    modalMovies.hide()

  }
  
}

function abrirReproductor(id) {

  let user =  (JSON.parse(localStorage.getItem("userLogged")));

  if ( user !== null){

    window.location = "/pages/reproductor.html?id=" + id;
  
  } else{
    modalNotLoggedPlay.show()
    modalMovies.hide()
  }
}


window.favoriteOnOff = favoriteOnOff;
window.abrirReproductor = abrirReproductor;