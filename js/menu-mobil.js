
const menu_mobil = document.querySelector(".menu-mobil");
const menu = document.querySelector(".menu");
const lista_menu = document.querySelector(".menu ul");

menu_mobil.addEventListener("click", e =>{
    // menu.style.width = "100vw";
    // menu.style.height = "100vh";
    menu.style.zIndex = "10011";
    lista_menu.style.display = "block";
    lista_menu.classList.toggle("mostrar-menu");
    lista_menu.classList.toggle("oculta-menu");
})