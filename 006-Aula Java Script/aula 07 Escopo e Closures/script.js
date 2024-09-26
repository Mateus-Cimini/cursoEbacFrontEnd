function apresentandoPessoa() {
    let nome = 'Mateus'
    function saudacao() {
        console.log(`Ola, ${nome}`);
    }
    function despedida() {
        console.log(`Tchau, ${nome}`);
    }
    return{
        saudacao: saudacao,
        despedida: despedida
    }
}

const pessoa = apresentandoPessoa()

pessoa.saudacao()
pessoa.despedida()