const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("correo");
const direccion = document.getElementById("direccion");
const telf = document.getElementById("telefono");
const contrasenia = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  parrafo.innerHTML = "";
  let entrar = false;
  let warnings = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (usuario.value.length < 10) {
    warnings += `El usuario no es válido <br>`;
    entrar = true;
  }

  if (nombre.value.length < 10) {
    warnings += `El nombre no es válido <br>`;
    entrar = true;
  }

  if (apellido.value.length < 10) {
    warnings += `El apellido no es válido <br>`;
    entrar = true;
  }

  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }

  if (direccion.value.length < 10) {
    warnings += `La dirrección no es válido <br>`;
    entrar = true;
  }

  if (telf.value.length < 10) {
    warnings += `El teléfono no es válido <br>`;
    entrar = true;
  }

  if (contrasenia.value.length < 8) {
    warnings += `La contraseña no es válido <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
});





