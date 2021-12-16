"use strict";
let actual  = document.querySelector(".gov").innerHTML;
const clickButton1 = document.querySelector(".cal1").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal1").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton2 = document.querySelector(".cal2").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal2").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton3 = document.querySelector(".cal3").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal3").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton4 = document.querySelector(".cal4").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal4").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton5 = document.querySelector(".cal5").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal5").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton6 = document.querySelector(".cal6").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal6").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton7 = document.querySelector(".cal7").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal7").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton8 = document.querySelector(".cal8").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal8").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton9 = document.querySelector(".cal9").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal9").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const clickButton0 = document.querySelector(".cal0").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".cal0").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const buttonResta = document.querySelector(".resta").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".resta").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const buttonSuma= document.querySelector(".sum").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".sum").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const buttonMult = document.querySelector(".multiplicar").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".multiplicar").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const buttonDividir = document.querySelector(".dividir").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".dividir").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const valorAbsoluto = document.querySelector(".absolute").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
        let res = Math.abs(actual)
        document.querySelector(".gov").innerHTML=res
    }
)
const exponenciacion = document.querySelector(".exp").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
    let sumado = document.querySelector(".exp").innerHTML
    let res = document.querySelector(".gov").innerHTML=actual + sumado
})
const raizCuadrada = document.querySelector(".raiz-cuadrada").addEventListener("click",()=>{
    let actual  = document.querySelector(".gov").innerHTML;
        let res = Math.sqrt(actual)
        document.querySelector(".gov").innerHTML=res
})
const ac = document.querySelector(".ac").addEventListener("click",()=>{
    let actual = document.querySelector(".gov").innerHTML = ""
})
const muestraResultado = document.querySelector(".resu").addEventListener("click",()=>{
    let actual = document.querySelector(".gov").innerHTML
    let suma = actual.indexOf("+")
    let resta = actual.indexOf("-")
    let multiplicar = actual.indexOf("X")
    let dividir = actual.indexOf("/")
    let exp = actual.indexOf("^")
    if (suma !== -1){
        let arr = actual.split("+",2)
        let res = parseInt(arr[0]) + parseInt(arr[1])
        document.querySelector(".gov").innerHTML=res
    } else if (resta !== -1) {
        let arr = actual.split("-",2)
        let res = arr[0] - arr[1]
        document.querySelector(".gov").innerHTML=res
    } else if (multiplicar !== -1){
        let arr = actual.split("X",2)
        let res = arr[0] * arr[1]
        document.querySelector(".gov").innerHTML=res
    } else if (dividir !== -1){
        let arr = actual.split("/",2)
        let res = arr[0] / arr[1]
        document.querySelector(".gov").innerHTML=res
    } else if (exp !== -1) {
        let arr = actual.split("^",2)
        let res = arr[0]  ** arr[1]
        document.querySelector(".gov").innerHTML=res
    } 
})

///////////////////// ADVERTENCIA LOCAL STORAGE
const modal = document.querySelector(".modal-background")
const closeModal = document.querySelector(".closemodal")
const advertencia = ()=>{
    closeModal.addEventListener("click",()=>{
        localStorage.setItem("adv","en")
    })
}
const bobito = localStorage.getItem("adv")
if (bobito === null) {
    advertencia()
} else {
    console.log("exito")
    modal.style.display="none"
}