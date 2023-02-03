import { parseUrl } from "../Classes/parseUrLs.js";
import { movieModal } from "./moviesModal.js";

export const movieCard = (movie) =>{

    let name = movie.name;

    let id = movie.code;

    let URLimg = parseUrl (movie.img);

   
    return `

    <div class="hovereffect rounded rounded-2 px-2 " >
    <img
      class="img-fluid rounded rounded-2 h-100" id="imgMoviesModal"
      src="${URLimg}"
      alt=""
    />
    <div class="overlay rounded rounded-2">

      <h2>${name}</h2>
      <div class="container text-center h-75">
        <div class="row align-items-end containerButtons">
          
          <div class="col">
            <button onclick="modalVerMas('${id}')"  class="btn btn-secondary rounded rounded-5 px-2 ms-4 mb-5" id="verMas" data-bs-toggle="modal" data-bs-target="#modalVerMas"> Ver mas </button>
          </div>
        </div>
      </div>
      
    </div>
  </div>

    `
}

function modalVerMas(id) {
  console.log(id);
  let arrayMovies = JSON.parse( localStorage.getItem("Movies"));

  let movie = arrayMovies.find( i => i.code == id);

  let modal = document.getElementById("modalBodyMovie");

  modal.innerHTML = movieModal(movie);
  
}

window.modalVerMas = modalVerMas;

