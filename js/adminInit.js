import { generateIdMovies } from "./Classes/id.js";
import { Movie } from "./Classes/peliculaClass.js";
import { movieRow } from "./Modules/tableMovies.js";
import { hardCodedMovies } from "./Classes/movies.js";
import { validateGeneralAdd, validateGeneralEdit,validateDescriptionEdit } from "./Classes/validacionesMovies.js";

let  modalDeniedAccess = new bootstrap.Modal(document.getElementById('modalDeniedAccess'))

function userAdminCheck (){
    let userLogged = JSON.parse(localStorage.getItem("userLogged"));

  if(userLogged == null || userLogged.role !== 'Admin'  ){
    modalDeniedAccess.show()
    setTimeout(function(){
        window.location.href="/index.html"
    },2000);
} 
}

userAdminCheck ()
hardCodedMovies ()
  
export function  renderTableMovies () {
    let arrayMovies = JSON.parse(localStorage.getItem("Movies"));
    let tableBodyMovie = document.getElementById("tableBodyMovie");
    tableBodyMovie.innerHTML = "";
    arrayMovies.forEach(movie => {
    tableBodyMovie.innerHTML += movieRow(movie);
    });
}

renderTableMovies ()

let btnDelete = document.getElementById("btnDelete")

btnDelete.addEventListener("click", deleteMovie)

function deleteMovie (e){
    let {target} = e
    let arrayMovies = JSON.parse( localStorage.getItem("Movies") );
    arrayMovies = arrayMovies.filter((movie) => movie.code !== target.title);
    localStorage.setItem("Movies", JSON.stringify(arrayMovies));
    renderTableMovies();
}


let tableBodyMovie = document.getElementById("tableBodyMovie");

tableBodyMovie.addEventListener('click', function(e){
    let arrayMovies = JSON.parse( localStorage.getItem("Movies") );
    const {target} = e;
    if(target.matches("#publicado")){
        let id = e.target.attributes.alt.value
        arrayMovies.forEach(i => {
            if(i.code == id && !i.featured){
                if(i.published){
                    i.published = false;
                }
                else{
                    i.published = true;
                }  
            }
        });
    }

    if(target.matches("#destacada")){
        let id = e.target.attributes.alt.value

        if(target.checked){
            arrayMovies.forEach(Movie => {
                if(Movie.featured){
                    Movie.featured = false;
                }

                if(Movie.code == id){
                    Movie.featured = true;

                   if(!Movie.published){
                        Movie.published = true;
                   }
                }
            });
            
        }else{
            for (let i = 0; i < arrayMovies.length; i++) {

                if(arrayMovies[i].code ==id){
                    arrayMovies[i].featured = false;
                }

                if(i==0){
                    arrayMovies[i].featured = true;
                }
            }
        }
    }

    if(target.matches("#delete")){
        let id = e.target.attributes.alt.value
        btnDelete.title = id
    }


    if(target.matches("#edit")){
        let id = e.target.attributes.alt.value
        arrayMovies.forEach(Movie => {
            
            if(Movie.code == id){
                let titulo = Movie.name;
                let category = Movie.category;
                let description = Movie.description;
                let imgFeatured = Movie.imgURLFeatured;
                let img = Movie.img;
                let url = Movie.videoURL

                let editModal = document.getElementById("editMovieModal")
                editModal.title = id

                let idInput = document.getElementById("idMovieEdit");
                idInput.value = id;

                let tituloInput = document.getElementById("formTitleEdit");
                tituloInput.value = titulo;

                let categoryInput = document.getElementById("formCategoryEdit");
                categoryInput.value = category;

                let descInput = document.getElementById("formDescriptionEdit");
                descInput.value = description;

                let imgFeaturedInput = document.getElementById("URLfeaturedEdit");
                imgFeaturedInput.value = imgFeatured;

                let imgInput = document.getElementById("URLimgEdit");
                imgInput.value = img;

                let urlInput = document.getElementById("URLvideoEdit");
                urlInput.value = url

                validateDescriptionEdit()
            }

        });
    }

    localStorage.setItem("Movies", JSON.stringify(arrayMovies));
    renderTableMovies();
});




let btnSaveEditMovie = document.getElementById("saveEditMovie");
btnSaveEditMovie.addEventListener('click', validateGeneralEdit);
let btnAddMovie = document.getElementById("addMovieBtn");
btnAddMovie.addEventListener("click", function(e){

    let arrayMovies = JSON.parse( localStorage.getItem("Movies") ) || [];
    let id = generateIdMovies();
    let movieFound = arrayMovies.find( movie => movie.code == id);

    while(movieFound !== undefined){
        id = generateIdMovies();
        movieFound = arrayMovies.find( movie => movie.code === id);
    }

    let idInput = document.getElementById("idMovieAdd");
    idInput.value = id;
} );


let btnSaveMovie = document.getElementById("saveNewMovie");

btnSaveMovie.addEventListener('click', validateGeneralAdd);






    
