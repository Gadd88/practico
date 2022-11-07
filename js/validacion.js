const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const mensaje = document.getElementById('mensaje');
const error = document.getElementById('form_error');


formulario.addEventListener('submit', e => {
    e.preventDefault()
  
    let warnings = ""
  
    let entrar = false
  
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
    let regexTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
  
    error.innerHTML = ""
  
    if(nombre.value.length < 6){
      warnings += `El nombre no es válido <br>`
      entrar = true
    }
    if(!regexEmail.test(email.value)){
      warnings += `El email no es válido <br>`
      entrar = true
    }
    if(!regexTel.test(tel.value)){
      warnings += `El teléfono no es válido <br>`
      entrar = true
    }
    if(mensaje.value == null || mensaje.value == ''){
      warnings += `El campo de mensaje no puede estar vacío`
      entrar = true
    }
  
    document.getElementById('form_error').innerHTML = `
    ${warnings}`
    document.getElementById('form_error').style.color = 'red'
  
    if(entrar){
      error.innerHTML = warnings
    } else {
      error.innerHTML = "Enviado"
      window.location.reload()
    }
  
  })
  