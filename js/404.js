let btnGoBack = document.getElementById("goBack")
btnGoBack.addEventListener("click",goBack)
function goBack (e){
    e.preventDefault()
    window.history.back()
}