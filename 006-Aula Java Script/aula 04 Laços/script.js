let champions = ['Ezreal', 'Kaisar', 'Jinx', 'Zeri']; // Declara um array com nomes de campeões

for(let i = 0; i < champions.length; i++) { // Loop 'for' percorre o array de campeões
    console.log('O meu campeão é: ' + champions[i]); // Exibe o nome de cada campeão, um por um
}

let phrase = 0; // Inicializa a variável 'phrase' com o valor 0

while(phrase < champions.length) { // Loop 'while' continua enquanto 'phrase' for menor que o comprimento do array
    console.log('O meu campeão preferido é: ' + champions[phrase]); // Exibe o nome do campeão preferido, com base no valor de 'phrase'
    phrase++; // Incrementa 'phrase' para passar ao próximo campeão
}
