import { parseUrl } from "../Classes/parseYtUrls.js"

export const reproductor = (movie) =>{

    let id = movie.code
    let titleMovie = document.getElementById("titleMovie")
    let name = movie.name;
    titleMovie.innerHTML = movie.name
    let video = parseUrl( movie.videoURL );
    let user = JSON.parse( localStorage.getItem("userLogged")) ;
    let favorite ;
    if ( user !== null){
      favorite = user.favoritesMovies.find( i => i == id) ;
    }

 let reproductor = `
 <div class="ratio ratio-16x9 iframeReproductor">
 <iframe  src="${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="d-flex container-fluid text-light p-3">
<h1 class="ms-5">${name}</h1>`

if(favorite===undefined){
    reproductor += `<i id="iconFavorite" onclick="favoriteOnOff('${id}')" class="bi bi-star text-warning ms-auto fs-3 mx-5"></i> `
  }else{
    reproductor += `<i id="iconFavorite" onclick="favoriteOnOff('${id}')" class="bi bi-star-fill ms-auto text-warning fs-3 mx-5"></i> `
  }


  reproductor +=`
<i class="bi bi-share fs-3 text-primary  me-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lo sentimos, esta opción aun no esta disponible."></i>
</div>
 
 `

 return reproductor;
}

function favoriteOnOff (id) {
    let user =  (JSON.parse( localStorage.getItem("userLogged")));
    if ( user !== null){
      let  icnFavorite = document.getElementById("iconFavorite");

      if ( icnFavorite.matches(".bi-star-fill") ) {
        icnFavorite.className = "bi bi-star text-warning fs-3 mx-5 ms-auto ";
        user.favoritesMovies = user.favoritesMovies.filter( i => i !== id);
      } else {
        user.favoritesMovies.push(id);
        icnFavorite.className = "bi bi-star-fill text-warning fs-3 mx-5 ms-auto ";
      }
      localStorage.setItem("userLogged",JSON.stringify(user))
    } 
  }



  window.favoriteOnOff = favoriteOnOff;