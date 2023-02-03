let hover1 = document.getElementById ("cardHover1")
let hover2 = document.getElementById ("cardHover2")
let imgContainer1 = document.getElementById ("imgContainer1")
let imgContainer2 = document.getElementById ("imgContainer2")


hover1.addEventListener("mouseover",mouseOver1)

function mouseOver1 (){
    imgContainer1.innerHTML = `<img src="/img/avatar 1 2.png" class="card-img-top img-fluid " alt="...">`
}

hover1.addEventListener("mouseleave",mouseLeave1)

function mouseLeave1 (){
    imgContainer1.innerHTML = `<img src="/img/avatar 1 1.png" class="card-img-top img-fluid "  alt="...">`
}


hover2.addEventListener("mouseover",mouseOver2)

function mouseOver2 (){
    imgContainer2.innerHTML = `<img src="/img/avatar 2 2.png" class="card-img-top img-fluid " alt="...">`
}

hover2.addEventListener("mouseleave",mouseLeave2)

function mouseLeave2 (){
    imgContainer2.innerHTML = `<img src="/img/avatar 2 1.png" class="card-img-top img-fluid " alt="...">`
}