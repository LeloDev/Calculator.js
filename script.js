"use strict";
const clickButton1 = document.querySelector(".calculator-bottom")
const cacContainer = document.querySelector(".calculator-contenedor")
let num1;
clickButton1.addEventListener("click",()=>{
    let num1 = clickButton1.textContent
    let pantalla = document.createElement("P")
    pantalla.innerHTML=`Tu numero selecionado es ${num1}`
    cacContainer.appendChild(pantalla)
    if (num1 !==null) {
        console.log("govir")
    }
})

