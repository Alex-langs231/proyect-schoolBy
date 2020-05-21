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