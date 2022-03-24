const multiplicacao = require('./multiplicacao')
const soma = require('./soma')
const subtracao = require('./subtracao')
const divisao = require('./divisao')

it('soma de 2 numeros positivos', ()=>{
    expect(soma(2,4)).toBe(6)
})

it('soma de 1 ou 2 numeros negativos', ()=>{
    expect(soma(-2,4)).toBe(2)
})

it('Subtração de 2 numeros positivos', ()=>{
    expect(subtracao(4,2)).toBe(2)
})

it('Subtração de 1 ou 2 numeros negativos', ()=>{
    expect(subtracao(-4,2)).toBe(-6)
})

it('Multiplicação de 2 numeros positivos', ()=>{
    expect(multiplicacao(4,2)).toBe(8)
})

it('Multiplicação de 1 ou 2 numeros negativos', ()=>{
    expect(multiplicacao(4,-2)).toBe(-8)
})

it('Divisão de 2 numeros positivos', ()=>{
    expect(divisao(8,2)).toBe(4)
})

it('divisão de 1 ou 2 numeros negativos', ()=>{
    expect(divisao(8,-2)).toBe(-4)
})