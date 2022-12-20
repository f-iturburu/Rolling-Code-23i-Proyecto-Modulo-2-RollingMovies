import { movieBanner } from "./Modules/movieBanner.js";
import { movieCard } from "./Modules/moviesCards.js";
import { renderGliders } from "./Gliders/glider.js";
import { hardCodedMovies } from "./Classes/movies.js";

hardCodedMovies();

const renderBanner = () =>{

    
    let arrayMovies = JSON.parse( localStorage.getItem("Movies") );

    let movieFeatured = arrayMovies.find( i =>  i.featured );


    if(movieFeatured === undefined){

        movieFeatured = arrayMovies.find( i => i.published);

        
    }

    let banner = document.getElementById("movieFeaturedBanner");

    banner.innerHTML = movieBanner(movieFeatured);
} 

renderBanner();

const renderMovieCards = () =>{

  //Busco el array y filtro por las que estan publicadas.

  let arrayMovies = JSON.parse( localStorage.getItem("Movies") );

  arrayMovies = arrayMovies.filter( i => i.published);

  //Busco las pelis de accion

  let gliderAccion = document.getElementById("gliderAccion");

  let arrayMoviesAccion = arrayMovies.filter( i => i.category === "Accion");

    gliderAccion.innerHTML = "";

    arrayMoviesAccion.forEach( i => {
        
        gliderAccion.innerHTML += movieCard(i);

    });

  //Busco las pelis de ciencia ficcion

  let gliderCienciaFiccion = document.getElementById("gliderCienciaFiccion");

  let arrayMoviesCienciaFiccion = arrayMovies.filter( i => i.category === "Ciencia Ficcion");

  gliderCienciaFiccion.innerHTML = "";

  arrayMoviesCienciaFiccion.forEach( i => {
      
    gliderCienciaFiccion.innerHTML += movieCard(i);

  });

  //Busco las pelis de superheroes

  let gliderSuperHeroes = document.getElementById("gliderSuperHeroes");

  let arrayMoviesSuperHeroes = arrayMovies.filter( i => i.category === "Superhéroes");

  gliderSuperHeroes.innerHTML = "";

  arrayMoviesSuperHeroes.forEach( i => {
      
    gliderSuperHeroes.innerHTML += movieCard(i);

  });

  //Busco los documentales

  let gliderDocumentales = document.getElementById("gliderDocumentales");

  let arrayMoviesDocumentales = arrayMovies.filter( i => i.category === "Documental");

  gliderDocumentales.innerHTML = "";

  arrayMoviesDocumentales.forEach( i => {
      
    gliderDocumentales.innerHTML += movieCard(i);

  });
}

renderMovieCards();

renderGliders();


