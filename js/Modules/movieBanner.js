import { parseUrl } from "../Classes/parseUrLs.js";
import { Movie } from "../Classes/peliculaClass.js";
import { movieModal } from "./moviesModal.js";


export const movieBanner = (movie) =>{

    let name = movie.name;

    let id = movie.code;

    let URLimg = parseUrl(movie.imgURLFeatured);

    let description = movie.description;

    return `



    <img loading="lazy" src="${URLimg}" class="card-img img-fluid banner" alt="...">

    <div class="card-img-overlay ">
      <div class="bannerTextContainer  rounded rounded-5 ">
        <h1 class="card-title  p-3">${name}</h1>
        <div class="textContainer scrollContainer overflow-auto">
        <p class="card-text sinopsis p-3 ">${description}</p>
    
        </div>
        <div class="card-text px-3 d-flex " >
          <button onclick="modalVerMas('${id}')" class="btn btn-secondary rounded-5 px-2 ms-auto mb-3" id="verMas" data-bs-toggle="modal" data-bs-target="#modalVerMas" > Ver mas </button>
        </div>
      </div>
    </div>

    `
}

function modalVerMas(id) {

  let arrayMovies = JSON.parse( localStorage.getItem("Movies") );

  let movie = arrayMovies.find( i => i.code == id);

  let modal = document.getElementById("modalBodyMovie");

  modal.innerHTML = movieModal(movie);
  
}

window.modalVerMas = modalVerMas;
