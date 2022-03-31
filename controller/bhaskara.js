import {bhaskara} from '../js/calculadora.js'

function calcularBhaskara(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value
    let calcular = bhaskara(a,b,c)
    document.getElementById('respostadabhaskara').innerHTML =  "x1 = "+calcular.x1 + "   x2 = "+  calcular.x2
}

document.getElementById('btnCalc').addEventListener("click",calcularBhaskara)