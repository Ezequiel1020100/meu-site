const menu = document.getElementById("menu")
const btn1 = document.getElementById("btn-open")
const btn2 = document.getElementById("btn-close")
const section1 = document.getElementById("bnt-section-1")
const  section2 = document.getElementById("bnt-section-2")
const  section3  = document.getElementById("bnt-section-3")
const login = document.getElementById("login")
const home = document.getElementById("home")
const duvidas   = document.getElementById("duvidas")
const compras = document.getElementById("compras")
const mais = document.getElementById("mais")





section1.addEventListener("click", () =>
    informar())
    function informar(){
    alert("Em desenvolvimento")
        }
section2.addEventListener("click", () =>
 informar())
 function informar(){
 alert(" Em desenvolvimento")
  }
section3.addEventListener("click", () =>
 informar())
 function informar(){
 alert("Em desenvolvimento")
 }
                
 home.addEventListener("click", () =>
    informar())
    function informar(){
    alert("Em desenvolvimento")
    }
login.addEventListener("click", () =>
        informar())
        function informar(){
        alert(" Em desenvolvimento")
        }
duvidas.addEventListener("click", () =>
informar())
 function informar(){
alert("Em desenvolvimento")
            }
compras.addEventListener("click", () =>
informar())
 function informar(){
alert("Em desenvolvimento")
        }

mais.addEventListener("click", () =>
 informar())
 function informar(){
alert("Em desenvolvimento")
    }






btn1.addEventListener("click", () =>
iniciar())
function iniciar(){
    
menu.style.width = "100px"
btn2.style.display = "flex"
btn2.classList.add('ml-auto');
links.style.display = "flex"
}
btn2.addEventListener("click", () =>
    fechar())
    function fechar(){
    menu.style.width="40px"
    btn2.style.display = "none"
    links.style.display = "none"
    }

