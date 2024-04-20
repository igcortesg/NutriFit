var userId = document.getElementById('userId')
var password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const rut = document.getElementById('rut')
const email = document.getElementById('email')
const region = document.getElementById('region')
const comuna = document.getElementById('comuna')
const acepterminos = document.getElementById('acepterminos')



form.addEventListener('submit', (e)=>{

    let messages = [ ]
    
    if(password.ariaValueMax.length<6){
        messages.push('La contraseña debe ser mas larga') 

    }

    if(rut.ariaValueMax.length < 13){

        messages.push('Rut Invalido')
    }

    if(acepterminos != true){

        messages.push('Aceptar Terminos y Condiciones')
    }



    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join(',  ')  
    }

})