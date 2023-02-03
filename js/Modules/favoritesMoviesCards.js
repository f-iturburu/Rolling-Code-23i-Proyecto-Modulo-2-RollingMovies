import { parseUrl } from "../Classes/parseUrLs.js";


export  const favoriteCard = (movie) =>{
    let URLfeatured = parseUrl(movie.imgURLFeatured);
    let name = movie.name;
    let id = movie.code;
    let description = movie.description;

    return `
    <div id="${id}favoriteCard" class="card mb-3 w-100 bg-transparent p-2 text-light rounded-0 border-bottom-1  border-end-0 border-start-0 border-top-0 border-light px-5 mt-3 moviecard" >
          <div class="row g-0 ">
            <div class="col-xl-4 ">
              <img src="${URLfeatured}" class="img-fluid rounded-3" alt="...">
            </div>
            <div class="col-xl-8">
              <div class="card-body ">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <div class="d-flex justify-content-center justify-content-md-start mt-1">
                  <i onclick="abrirReproductor('${id}')" class="bi bi-play-btn  text-danger fs-3 pe-5"></i>
                  <i onclick="removeMovieFavorite('${id}')" class="bi bi-star-fill text-warning fs-3 px-5"></i>
                  <i class="bi bi-share fs-3 text-primary ps-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lo sentimos, esta opción aun no esta disponible."></i>
                </div>

              </div>


            </div>
          </div>
        

    `
} 

function removeMovieFavorite(id) {
    let user =  (JSON.parse( localStorage.getItem("userLogged"))); 
    user.favoritesMovies = user.favoritesMovies.filter( i => i !== id);
    localStorage.setItem("userLogged",JSON.stringify(user))
    let cardNone = document.getElementById( id + "favoriteCard");
    cardNone.className = "d-none";
}

function abrirReproductor(id) {
  let user =  (JSON.parse( localStorage.getItem("userLogged")));

  if ( user !== null){
    window.location = "/pages/reproductor.html?id=" + id;
  } 
}



window.removeMovieFavorite = removeMovieFavorite;
window.abrirReproductor = abrirReproductor;