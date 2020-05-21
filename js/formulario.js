(function(){
    var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');
function validarNombre(e){
    if(nombre.value == '' || nombre == null){
        console.log('Completa el nombre');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Nombre</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}

function validarCorreo(e){
     if(correo.value == '' || correo == null){
        console.log('Completa el correo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Email</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}
function validarSexo(e){
    if(sexo.value == '' || sexo.value == null){
        console.log('Selecciona Un Sexo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Selecciona Un Sexo</li>';
        e.preventDefault();
    }else{
    error.style.display='none';
}
}
function validarTerminos(e){
    if(terminos.checked == false){
        console.log('Acepta Los Terminos');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Acepta Los Terminos</li>';
        e.preventDefault();
    }else if(nombre.value == '' || nombre == null || correo.value == '' || correo == null || sexo.value == '' || sexo.value == null){
    error.style.display='block';
}
}

function validarForm(e){
   error.innerHTML = '';
   error.style.display = 'block';
   validarNombre(e);
   validarCorreo(e);
   validarSexo(e);
   validarTerminos(e);
}


formulario.addEventListener('submit', validarForm);

})

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
   let desplazamientoActual = window.pageYOffset;
   if(ubicacionPrincipal>=desplazamientoActual){
       document.getElementsByTagName("nav")[0].style.top = "0px"
   }else{
       document.getElementsByTagName("nav")[0].style.top = "-100px"
   }
   ubicacionPrincipal=desplazamientoActual;
})

// Menu

let menuHeader = document.querySelectorAll(".menu-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
 if(semaforo){
     document.querySelectorAll(".hamburguer")[0].style.color = "#ffff";
     semaforo=false;
 }else{
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    semaforo=true;
 }
 
 
    menuHeader.classList.toggle("menudos")
})