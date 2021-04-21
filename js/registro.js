const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const direccion = document.getElementById("direccion");
const telf = document.getElementById("telefono");
const contrasenia = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

	/*let usuario /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	let nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    let apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	let contrasenia: /^.{4,12}$/, // 4 a 12 digitos.
	let correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	let telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    */



form.addEventListener("submit", e=>{
    e.preventDefault();
    parrafo.innerHTML = "";
    let entrar = false;
    let warnings = "";
    let email =  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if(usuario.value.length <10){
        warnings += `El usuario no es válido <br>`;
        entrar = true;
    }

    if(nombre.value.length <10){
        warnings += `El nombre no es válido <br>`;
        entrar = true;
    }

    if(apellido.value.length <10){
        warnings += `El apellido no es válido <br>`;
        entrar = true;
    }
   

    if(!email.test(email.value)){
        warnings += `El email no es válido <br>`;
        entrar = true;
    }


    if(direccion.value.length <10){
        warnings += `La dirrección no es válido <br>`;
        entrar = true;
    }

    if(telf.value.length <10){
        warnings += `El teléfono no es válido <br>`;
        entrar = true;
    }

    if(contrasenia.value.length < 8){
        warnings += `La contraseña no es válido <br>`;
        entrar = true;
    }


    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }


    
})