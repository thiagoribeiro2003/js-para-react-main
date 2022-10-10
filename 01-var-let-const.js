/* Jeito antigo de usar variáveis */
// var meuNome = 'Tiago';

/* Jeito moderno de usar variáveis e constantes */
// let meuNome = 'Tiago';
const meuNome = 'Tiago'; // const obriga a inicialização

console.log(meuNome);

console.log('======================');

let idade = 20;
let mensagem; // ESCOPO GLOBAL
if( idade >= 18 ){
    mensagem = 'É maior de idade!';
} else {
    mensagem = 'É menor de idade!';
}

console.log(mensagem);

/* let e const: possuem escopo de BLOCO quando declarados
dentro de blocos (condicionais, loops), e escopo GLOBAL quando
declarados fora dos blocos. 

Uma variável/constante em escopo de BLOCO só existe e é acessível DENTRO
do bloco em que foi criada. */






