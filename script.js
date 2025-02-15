document.getElementById('formulario').addEventListener('submit', function(event){
event.preventDefault();



const errores = {

errorNombre : '',
errorApellido: '',
errorEdad:'',
errorPassword:'',
errorEmail:''
}

const nombre = document.getElementById('nombre').value.trim();
const apellido = document.getElementById('apellido').value.trim();
const edad = document.getElementById('edad').value.trim();
const password = document.getElementById('password').value.trim();
const email = document.getElementById('email').value.trim();

const restriccionNombre = /^[a-z A-z\s]{1,20}$/;

if(!nombre){
    errores.errorNombre = 'El nombre es obligatorio.';
}else if(!restriccionNombre.test(nombre)){
    errores.errorNombre = 'El nombre no debe tener caracteres especiales y debe tener entre 1 y 20 caracteres.';
}

if(!apellido){
    errores.errorApellido = 'El apellido es obligatorio.';
}else if(!restriccionNombre.test(apellido)){
    errores.errorApellido = 'El apellido no debe tener caracteres especiales y debe tener entre 1 y 20 caracteres.';
}

const restriccionEdad = parseInt(edad,10);

if(isNaN(restriccionEdad) || restriccionEdad<18){
    errores.errorEdad = 'Debes ser mayor de edad';
}else if(isNaN(restriccionEdad) || restriccionEdad>120){
    errores.errorEdad = 'Si claro, te gustaria vivir tanto.';
}

const restriccionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Z a-z\d]{9,20}$/;

if(!password){
    errores.errorPassword = 'La constraseña es obligatoria.';
}else if(!restriccionPassword.test(password)){

    errores.errorPassword = 'La contraseña debe tener una mayuscula, una minuscula y al menos un numero, con una extension de entre 9 y 20 caracteres.';
}

const restriccionEmail = /^[^\s@]+@(google\.com|outlook\.com|icloud\.com)$/;

if(!email){
    errores.errorEmail = 'El email es obligatorio.';
}else if(!restriccionEmail.test(email)){
    errores.errorEmail = 'El email debe ser del dominio google.com , outlook.com o icloud.com.';
}

document.getElementById('errorNombre').textContent = errores.errorNombre;
document.getElementById('errorApellido').textContent = errores.errorApellido;
document.getElementById('errorEdad').textContent = errores.errorEdad;
document.getElementById('errorPassword').textContent = errores.errorPassword;
document.getElementById('errorEmail').textContent = errores.errorEmail;

if(!errores.errorNombre && !errores.errorApellido && !errores.errorEdad && !errores.errorPassword && !errores.errorEmail){
    alert('¡Formulario enviado con exito!');
    this.reset();
}

console.log('Datos Ingresados');
console.log('Nombre: ', nombre);
console.log('Apellido: ', apellido);
console.log('Edad: ', edad);
console.log('Password: ', password);
console.log('Email: ', email);




});