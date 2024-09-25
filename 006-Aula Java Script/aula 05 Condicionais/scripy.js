let idade = prompt('Qual a sua idade?'); // Exibe um prompt pedindo a idade do usuário e armazena o valor na variável 'idade'

if (idade >= 16) {  // Verifica se a idade é maior ou igual a 16
    alert('Você está na idade de votar'); // Se a condição for verdadeira, exibe um alerta dizendo que o usuário está na idade de votar
} else {  // Caso contrário (se a idade for menor que 16)
    alert('Você não tem idade suficiente para votar'); // Exibe um alerta informando que o usuário não tem idade suficiente para votar
}

// METODO 2

let idade2 = prompt('teste 2 : Qual a sua idade?') // Exibe um segundo prompt pedindo a idade do usuário e armazena o valor na variável 'idade2'

const resultado = idade >= 16 ? 'Você está na idade de votar' : 'Você não tem idade suficiente para votar'; 
// Usa o operador ternário para verificar se a idade é maior ou igual a 16
// Se for, armazena a string 'Você está na idade de votar' na variável 'resultado'
// Caso contrário, armazena 'Você não tem idade suficiente para votar' na variável 'resultado'

alert(resultado); // Exibe um alerta com o valor armazenado em 'resultado', que contém a mensagem correta com base na idade do usuário
