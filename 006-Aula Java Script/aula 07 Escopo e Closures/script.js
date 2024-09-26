function apresentandoPessoa() {
    // Define a variável 'nome' com o valor 'Mateus'
    let nome = 'Mateus'

    // Função interna 'saudacao' que usa o valor de 'nome' para imprimir uma saudação
    function saudacao() {
        console.log(`Ola, ${nome}`); // Exibe "Ola, Mateus" no console
    }

    // Função interna 'despedida' que usa o valor de 'nome' para imprimir uma despedida
    function despedida() {
        console.log(`Tchau, ${nome}`); // Exibe "Tchau, Mateus" no console
    }

    // Retorna um objeto com as funções 'saudacao' e 'despedida' como métodos
    return {
        saudacao: saudacao,
        despedida: despedida
    }
}

// Cria o objeto 'pessoa' invocando a função 'apresentandoPessoa'
const pessoa = apresentandoPessoa()

// Chama o método 'saudacao' do objeto 'pessoa'
pessoa.saudacao() // Saída: "Ola, Mateus"

// Chama o método 'despedida' do objeto 'pessoa'
pessoa.despedida() // Saída: "Tchau, Mateus"
