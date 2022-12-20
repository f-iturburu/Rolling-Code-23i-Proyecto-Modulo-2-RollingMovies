import { reproductor } from "./Modules/reproductorRender.js";



let  modalNotLogged = new bootstrap.Modal(document.getElementById('modalNotLogged'))

let params = new URLSearchParams(window.location.search);
let id = params.get("id"); 

let user = JSON.parse( localStorage.getItem("userLogged") )

if(id != null && user != undefined ){

    let arrayMovies = JSON.parse( localStorage.getItem("Movies"))

    let movie = arrayMovies.find( i => i.code == id);

    if(movie != undefined){

        let divReproductor = document.getElementById("reproductor");

        divReproductor.innerHTML = "";
    
        divReproductor.innerHTML = reproductor(movie);

     

    }else{
        
        window.location.href = "/pages/404.html"

    }

}else{
    modalNotLogged.show()
    setTimeout(function(){
        window.location.href="/index.html"
    },3500);
}
