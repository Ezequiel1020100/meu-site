const menu = document.getElementById("menu")
const btn1 = document.getElementById("btn-open")
const btn2 = document.getElementById("btn-close")
const links = document.getElementById("links")
btn1.addEventListener("click", () =>
iniciar())
function iniciar(){
    
menu.style.width = "150px"
btn2.style.display = "flex"
btn2.classList.add('ml-auto');
links.style.display = "flex"
}
btn2.addEventListener("click", () =>
    fechar())
    function fechar(){
    menu.style.width="36px"
    btn2.style.display = "none"
    links.style.display = "none"
    }