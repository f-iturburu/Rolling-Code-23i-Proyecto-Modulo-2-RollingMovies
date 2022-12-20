let nameForm = document.getElementById('nameInput')
let lastNameForm = document.getElementById('lastNameInput')
let emailForm = document.getElementById ('emailInput')
let messageForm = document.getElementById('messageinput')
let btnContainer = document.getElementById('btnContainer')
let characterCount = document.getElementById ("characterCount")
let messageShort = document.getElementById("messageTooShort")
let messageLong = document.getElementById("messageTooLong")

btnContainer.innerHTML = '  <button type="submit" class="btn btn-secondary rounded-5 px-3 ms-auto" id="sendMessage" disabled >Enviar</button> '

messageLong.className = "invalid-feedback d-none"
messageShort.className = "invalid-feedback d-none"




function autocompleteEmail(){
    let userLogged = JSON.parse (localStorage.getItem("userLogged"));
   
    if(userLogged !== null){
        emailForm.value = userLogged.email
      }
}
autocompleteEmail()

emailForm.addEventListener('keyup',validateEmail)

function validateEmail() {
    let validate = true;
  
    let email = emailForm.value;
  
    let emailRegExp = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  
    if (!emailRegExp.test(email)) {
      validate = false;
    } else {
    
    }   
  
   if (validate){
    
    emailForm.className = "form-control is-valid";
    }else{
        emailForm.className = "form-control is-invalid";
    }

   
    return validate;
  }
  
  nameForm.addEventListener('keyup',validateName)
  function validateName() {
    let validate = true;
    if (nameForm.value.length < 1 ) {
        nameForm.className = 'form-control is-invalid'
        let validate = false;
    }else{
        nameForm.className = "form-control is-valid";
    }


    
    return validate
  }
  
  lastNameForm.addEventListener('keyup',validateLastName)
  function validateLastName(){
    let validate = true;

    if (lastNameForm.value.length < 1 ) {
        lastNameForm.className = 'form-control is-invalid'
        let validate = false;
    }else{
        lastNameForm.className = "form-control is-valid";
    }
  
    return validate
  }
  messageForm.addEventListener('keyup',validateMessage)

  function validateMessage() {
    messageLong.className = "invalid-feedback d-none"
    messageShort.className = "invalid-feedback d-none"
   
       let characterCountShown = (400 - messageForm.value.length  )
       characterCount.className = "form-text mb-2 text-light ms-auto col-4 text-end" 
       characterCount.innerHTML = characterCountShown
      
      let validate = true;

      if(messageForm.value.length < 10 ){
        validate = false
        messageForm.className = "form-control is-invalid"
        messageShort.className= "invalid-feedback d-block"

      } else if (messageForm.value.length > 400) {
        validate = false 
        messageForm.className = "form-control is-invalid"
        messageLong.className = "invalid-feedback d-block"
        characterCount.className = "form-text mb-2 ms-auto col-4 text-end text-danger" 


      } else{
        messageForm.className = "form-control is-valid"
        messageLong.className = "invalid-feedback d-none"
        messageShort.className = "invalid-feedback d-none"
      }
      
    return validate
    
  }

document.addEventListener('keyup',validateForm)
  function validateForm (){


    if ( validateMessage() && validateName() && validateLastName()&& validateEmail() ){
        btnContainer.innerHTML = '  <button type="submit" class="btn btn-primary rounded-5 px-3 ms-auto" id="sendMessage" >Enviar</button> '

    } else{
        btnContainer.innerHTML = '  <button type="submit" class="btn btn-secondary rounded-5 px-3 ms-auto" id="sendMessage" disabled >Enviar</button> '
    }
  }


  btnContainer.addEventListener("click",sendMessage)
  let  modalContactSuccess = new bootstrap.Modal(document.getElementById('modalContactSuccess'))
  let  modalContactFailed = new bootstrap.Modal(document.getElementById('modalContactFailed'))
  let contactForm = document.getElementById("contactForm")

  function sendMessage (e){
    e.preventDefault()

    let params = {
      name: nameForm.value,
      lastname: lastNameForm.value,
      email:emailForm.value ,
      message: messageForm.value 
  
    };
    
    emailjs.send('service_lhhp93f', 'template_aq1589l', params, 'OaYg6XmB036zfDoyB')
      .then(function(response) {
        modalContactSuccess.show()
        contactForm.reset()
        setTimeout(function(){
          modalContactSuccess.hide()
   },2500);
      }, function(error) {
        modalContactFailed.show()
        setTimeout(function(){
          modalContactFailed.hide()
   },2500);
      });

  }