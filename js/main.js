var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");

function translate(){
    // Creamos variables para traer la info desde el document
    var title = document.getElementById('form-signin-heading');

    // var remember traducira el texto junto al checkbox
    var remember = document.getElementsByTagName('span')[0];
    // button traduce el texto del boton
    var button = document.getElementsByClassName('btn')[0];

    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electronico";
    password.placeholder = "Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesion";


}
function muestraDatos(){

  titulo = "Datos formulario ";
  document.getElementById('info').innerHTML = titulo;
  document.getElementById("correo").innerHTML = "El correo electronico ingresado es: "+email.value;
  document.getElementById("pass").innerHTML = "La contraseña super secreta es: "+password.value;
//s  El Correo Electronico ingresado es:

}
//translate();
