/*
//FUNÇAO COM APENAS 1 PARAMETRO
function descobrirIdade(anoNacimento) {
    return 2024 - anoNacimento
}

console.log(descobrirIdade(2020));
*/

/*
//FUNÇAO COM 3 PARAMETROS
function somarNumeros(n1, n2, n3) {
    return n1 + n2 + n3
}

console.log(somarNumeros(10, 20, 20));
*/

/*
//FAZENDO A FUNÇAO ACIMA FICCAR MAIS AGRADAVEL PARA O USUARIO
function somarNumeros2(n1, n2, n3) {
    let resultado = n1 + n2 + n3
    return console.log('O resultado da soma dos 3 valores e de: ' + resultado);
};

somarNumeros2(1, 5, 4)
*/


//USANDO FUNÇOES PARA USADO NO NAVEGADOR
let n1 = parseInt(prompt('Digite o valor 1'))
let n2 = parseInt(prompt('Digite o valor 2'))
let n3 = parseInt(prompt('Digite o valor 3' ))
function somarNumeros3(n1, n2, n3) {
    let resultado = n1 + n2 + n3
    return alert (`${n1} + ${n2} + ${n3} = ${resultado}`)
    
}
somarNumeros3(n1,n2,n3)
