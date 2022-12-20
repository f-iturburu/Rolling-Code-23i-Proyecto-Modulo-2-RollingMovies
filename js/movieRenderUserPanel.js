import { favoriteCard } from "./Modules/favoritesMoviesCards.js";


const RenderFavoritesMovies = () =>{

    let user =  (JSON.parse( localStorage.getItem("userLogged"))); 
    
    let array = user.favoritesMovies;

    let panelFavoritos = document.getElementById("panelFavoritos");

    panelFavoritos.innerHTML = "";

    let arrayMovie = JSON.parse (localStorage.getItem("Movies"));
    

    if (array.length!==0){

        for (let i = 0; i < array.length; i++) {
    
            let movie = arrayMovie.find( mo => mo.code == array[i]);
            
            panelFavoritos.innerHTML += favoriteCard(movie);
            
        }
    } else{

        panelFavoritos.innerHTML = `
        <div class="w-100 text-center">
        <img src="/img/popcorn happy1.png" class="img-fluid w-50" alt="">
      </div>
        <div class="text-center pt-1">
          <h5> Parece que aun no has agregado peliculas a tus favoritos</h5>
        </div>
        `;

    }

}

RenderFavoritesMovies();