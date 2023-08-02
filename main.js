/*js para esconder y mostrar el menu*/
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

/*Efecto parallalax en img*/
window.onscroll=function(){

     var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_corazon");
    var elemento2= document.getElementById("icon_fuego");

    elemento1.style.bottom = posicion * 0.1 +"px";
    elemento2.style.top = posicion * 0.1 +"px";
}