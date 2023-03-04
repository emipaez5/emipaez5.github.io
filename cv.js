const menu = document.getElementById("menu");
const hamburguesa = document.getElementById("menu-hamburguesa");
hamburguesa.addEventListener("click", () => {
    menu.classList.toggle("menu-visible")
});
const boton = document.getElementById("constancia2");
boton.addEventListener("click", abrir(url));

function abrir(url){
    window.open(url)
}
