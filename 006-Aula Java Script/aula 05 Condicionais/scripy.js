let idade = prompt('Qual a sua idade?');

if (idade >= 16) {
    alert('Você esta na idade de votar');
}

else {
    alert('Voce não tem idade suficiente para votar');
}

// METODO 2

let idade2 = prompt('teste 2 : Qual a sua idade?')

const resultado = idade >= 16 ? 'Você esta na idade de votar' : 'Voce não tem idade suficiente para votar'

alert(resultado)