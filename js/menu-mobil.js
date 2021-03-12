
const menu_mobil = document.querySelector("#menu-mobil");
// const menu = document.querySelector(".menu");
// const lista_menu = document.querySelector(".menu ul");

menu_mobil.addEventListener("click", e =>{
   
    if(menu_mobil.classList.contains("open")){
        menu_mobil.classList.toggle("open");
        menu_mobil.classList.toggle("close")
    }
    else if(menu_mobil.classList.contains("close")){
        menu_mobil.classList.toggle("close")
        menu_mobil.classList.toggle("open");
    }
    else{
        menu_mobil.classList.toggle("open");
    }
    
})