import {bhaskara} from '../js/calculadora.js'

function calcularBhaskara(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value
    let resposta  = bhaskara(a,b,c)
    if (typeof(resposta.x1) == "undefined"){
        document.getElementById('respostadabhaskara').innerHTML =  resposta
    }else{
        document.getElementById('respostadabhaskara').innerHTML =  "{x1 = "+resposta.x1 + " &   x2 = "+  resposta.x2 + "}"
        
    }

}

document.getElementById('btnCalc').addEventListener("click",calcularBhaskara)