function divisao(a , b){
    return a / b
}
function soma(a , b){
    return a + b
}
function subtracao(a , b){
    return a - b
}
function multiplicacao(a , b){
    return a * b
}
function bhaskara(a,b,c){

    var resposta = {};

    let delta = (b*b) -(4 * a * c);

    if (delta < 0 ){
        return alert("Não tem Raiz Real");
    }else if (delta > 0){
        resposta.x1 = (-b + Math.sqrt(delta)) / (2*a);
        resposta.x2 = (-b - Math.sqrt(delta)) / (2*a);
        console.log(resposta);
        console.log(delta);
        return resposta;

    }else{
        let x0 = -b / 2* a
        return x0
    }
}


export {soma ,subtracao , multiplicacao , divisao , bhaskara}