import { Movie } from "./peliculaClass.js";
import { renderTableMovies } from "../adminInit.js";


let  addMovieModal = new bootstrap.Modal(document.getElementById('addMovieModal'))

  let idInput = document.getElementById("idMovieAdd");
  let tituloInput = document.getElementById("formTitleAdd");
  let categoryInput = document.getElementById("formCategoryAdd");
  let descInput = document.getElementById("formDescriptionAdd");
  let formAddMovie= document.getElementById("formAddMovie")
  let characterCount = document.getElementById ("characterCount")
let messageShort = document.getElementById("messageTooShort")
let messageLong = document.getElementById("messageTooLong")

 
  let imgFeaturedInput = document.getElementById("URLfeaturedAdd");
  let imgInput = document.getElementById("URLimgAdd");
  let URLVideo = document.getElementById("URLvideoAdd")


 function validateTitleAdd(){

    let arrayMovies = JSON.parse(localStorage.getItem("Movies")) || [];


    if (arrayMovies != []) {

      let movieFound = arrayMovies.find(movie => movie.name.toLowerCase() == tituloInput.value.toLowerCase());
     
      if(movieFound !== undefined){
       
        tituloInput.className = "form-control is-invalid"
        return true
          
      }else if(tituloInput.value.length > 0 ){
        tituloInput.className = "form-control is-valid"
        return true
    } else{
        tituloInput.className = "form-control is-invalid"
        return false
    }
  
    }
    

  
}


descInput.addEventListener("keyup",validateDescriptionAdd)
function validateDescriptionAdd(){

 let validate = true
    messageLong.className = "invalid-feedback d-none"
    messageShort.className = "invalid-feedback d-none"
   
       let characterCountShown = (550 - descInput.value.length  )
       characterCount.className = "form-text mb-2 ms-auto col-4 text-end" 
       characterCount.innerHTML = characterCountShown
      
      if(descInput.value.length <= 20 ){
        validate =  false
        descInput.className = "form-control is-invalid"
        messageShort.className= "invalid-feedback d-block"

      } else if (descInput.value.length >= 550) {
        validate =  false
        descInput.className = "form-control is-invalid"
        messageLong.className = "invalid-feedback d-block"
        characterCount.className = "form-text mb-2 ms-auto col-4 text-end text-danger" 


      } else{
        descInput.className = "form-control is-valid"
        messageLong.className = "invalid-feedback d-none"
        messageShort.className = "invalid-feedback d-none"
      }
      
      return validate
      

}

function validateUrlImageAdd(){

    let driveUrl = "https://drive.google.com/file/d/"
 
   
    if(imgInput.value.match(driveUrl)){
        imgInput.className = "form-control is-valid"
        return true

    } else{
        imgInput.className = "form-control is-invalid"
        return false
    }

}

function validateUrlFeaturedAdd(){

    let driveUrl = "https://drive.google.com/file/d/"
    if(imgFeaturedInput.value.match(driveUrl)){
        imgFeaturedInput.className = "form-control is-valid"
        return true

    } else{
        imgFeaturedInput.className = "form-control is-invalid"
        return false
    }

}

function validateUrlVideoAdd (){
    let ytUrl1 = "https://www.youtube.com/"
    let ytUrl2 = "https://youtu.be/"

    if(URLVideo.value.match(ytUrl1) || URLVideo.value.match(ytUrl2)){

        URLVideo.className = "form-control is-valid"

        return true

    } else{
        
        URLVideo.className = "form-control is-invalid"

        return false
    }

}

 export function validateGeneralAdd(e){

    e.preventDefault()

    let arrayMovies = JSON.parse( localStorage.getItem("Movies") ) || [];

 if (validateTitleAdd()&validateDescriptionAdd()&validateUrlImageAdd()&validateUrlFeaturedAdd()&validateUrlVideoAdd()){

     let newMovie = new Movie(idInput.value,tituloInput.value,categoryInput.value,descInput.value,imgInput.value,imgFeaturedInput.value,URLVideo.value);
    
     arrayMovies.push(newMovie);
    
     localStorage.setItem("Movies", JSON.stringify(arrayMovies));
    
     

     formAddMovie.reset()

     addMovieModal.hide()

     tituloInput.className = "form-control"
     descInput.className = "form-control"
     imgInput.className = "form-control"
     imgFeaturedInput.className = "form-control"
     URLVideo.className = "form-control"

     renderTableMovies();
 } 


}




let characterCountEdit = document.getElementById ("characterCountEdit")
let messageShortEdit = document.getElementById("messageTooShortEdit")
let messageLongEdit = document.getElementById("messageTooLongEdit")

let  editMovieModal = new bootstrap.Modal(document.getElementById('editMovieModal'))
let idInputEdit = document.getElementById("idMovieEdit");
let tituloInputEdit = document.getElementById("formTitleEdit");
let categoryInputEdit = document.getElementById("formCategoryEdit");
let descInputEdit = document.getElementById("formDescriptionEdit");
let imgFeaturedInputEdit = document.getElementById("URLfeaturedEdit");
let imgInputEdit = document.getElementById("URLimgEdit");
let URLVideoEdit = document.getElementById("URLvideoEdit")
let formEditMovie= document.getElementById("formEditMovie")




 function validateTitleEdit(){
    
    let arrayMovies = JSON.parse(localStorage.getItem("Movies")) || [];


    if (arrayMovies != []) {
        

    let editModal = document.getElementById("editMovieModal")

      let movieFound = arrayMovies.find(movie => movie.name.toLowerCase() == tituloInputEdit.value.toLowerCase());

      let currentMovie = arrayMovies.find(movie => movie.code  == editModal.title);


      if( movieFound!== undefined && movieFound.name.toLowerCase() == currentMovie.name.toLowerCase()){
        tituloInputEdit.className = "form-control is-valid"
        return true
        
      }else if (movieFound!== undefined){
        tituloInputEdit.className = "form-control is-invalid"
        return false
        
    } else if(tituloInputEdit.value.length > 0 ){
        tituloInputEdit.className = "form-control is-valid"
        return true
    } else {
        tituloInputEdit.className = "form-control is-invalid"
        return false
    }
  
    }
}


descInputEdit.addEventListener("keyup",validateDescriptionEdit )
export function validateDescriptionEdit(){

    let validate = true
    messageLongEdit.className = "invalid-feedback d-none"
    messageShortEdit.className = "invalid-feedback d-none"
   
       let characterCountShown = (550 - descInputEdit.value.length  )
       characterCountEdit.className = "form-text mb-2 ms-auto col-4 text-end" 
       characterCountEdit.innerHTML = characterCountShown
      
      if(descInputEdit.value.length <= 20 ){
        validate =  false
        descInputEdit.className = "form-control is-invalid"
        messageShortEdit.className= "invalid-feedback d-block"

      } else if (descInputEdit.value.length >= 550) {
        validate =  false
        descInputEdit.className = "form-control is-invalid"
        messageLongEdit.className = "invalid-feedback d-block"
        characterCountEdit.className = "form-text mb-2 ms-auto col-4 text-end text-danger" 


      } else{
        descInputEdit.className = "form-control is-valid"
        messageLongEdit.className = "invalid-feedback d-none"
        messageShortEdit.className = "invalid-feedback d-none"
      }
      
      return validate
      

}





function validateUrlImageEdit(){

    let driveUrl = "https://drive.google.com/file/d/"
 
   
    if(imgInputEdit.value.match(driveUrl)){
        imgInputEdit.className = "form-control is-valid"
        return true

    } else{
        imgInputEdit.className = "form-control is-invalid"
        return false
    }

}

function validateUrlFeaturedEdit(){

    let driveUrl = "https://drive.google.com/file/d/"
    if(imgFeaturedInputEdit.value.match(driveUrl)){
        imgFeaturedInputEdit.className = "form-control is-valid"
        return true

    } else{
        imgFeaturedInputEdit.className = "form-control is-invalid"
        return false
    }

}

function validateUrlVideoEdit (){
    let ytUrl1 = "https://www.youtube.com/"
    let ytUrl2 = "https://youtu.be/"

    if(URLVideoEdit.value.match(ytUrl1) || URLVideoEdit.value.match(ytUrl2)){

        URLVideoEdit.className = "form-control is-valid"

        return true

    } else{
        
        URLVideoEdit.className = "form-control is-invalid"

        return false
    }

}

 export function validateGeneralEdit(e){

    e.preventDefault()

    let arrayMovies = JSON.parse( localStorage.getItem("Movies") ) || [];

 if (validateTitleEdit()&validateDescriptionEdit()&validateUrlImageEdit()&validateUrlFeaturedEdit()&validateUrlVideoEdit()){
    arrayMovies.forEach(i => {

        if(i.code == idInputEdit.value){

            i.name = tituloInputEdit.value;

            i.category = categoryInputEdit.value;

            i.description = descInputEdit.value;

            i.img = imgInputEdit.value;

            i.imgURLFeatured =imgFeaturedInputEdit.value; 

            i.videoURL = URLvideoEdit.value
            
        
        }

    });

    localStorage.setItem("Movies", JSON.stringify(arrayMovies));

    tituloInputEdit.className = "form-control"
    descInputEdit.className = "form-control"
    imgInputEdit.className = "form-control"
    imgFeaturedInputEdit.className = "form-control"
    URLVideoEdit.className = "form-control"

    formEditMovie.reset()
    editMovieModal.hide()
    renderTableMovies();
 } 


}