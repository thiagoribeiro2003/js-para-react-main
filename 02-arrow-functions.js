/* Formas de trabalhar com funções */

// Sintaxe tradicional
function nomeDaFuncao() {
    console.log('Função de sintaxe tradicional...');
}

// Sintaxe de função anônima
var outraFuncao = function(){
    console.log('Outra forma de declarar função...');
};

// Chamadas de função
nomeDaFuncao();
outraFuncao();


console.log("====================");

/* EXERCÍCIOS
1) Crie uma função que receba dois valores numéricos,
calcule a diferença entre eles e retorne o resultado para
uma variável externa.

2) Mostre no console o resultado. */


function exercicio( valor1, valor2 ){
    // Opção 1
    /* let resultado = valor1 - valor2;
    return resultado; */

    // Opção 1 [refatorada]
    return valor1 - valor2;

    // Opção 2
    // resultado = valor1 - valor2;
}

let resultado = exercicio(70, 50);
console.log(resultado);


console.log("================================");

/* Arrow Function (função "seta/flecha") 
Possibilita diversas sintaxes, e até simplificação */
const exemplo1 = () => { 
    console.log('Uma arrow function qualquer...');
};

exemplo1();

// Arrow Function com parâmetro
//const ola = (nome) => {
    
// podemos omitir os parênteses no caso de 1 parâmetro
/* const ola = nome => { 
    console.log('Olá '+nome);
}; */

// Podemos omitir as {} no caso de uma única instrução
const ola = nome => console.log('Olá '+nome);

ola('Tiago');


/* const metade = (valor) => {
    return valor / 2;
} */

// Arrow Function com retorno IMPLÍCITO
const metade = valor => valor / 2;

console.log( metade(100) );

console.log("=========");

// Parâmetro com valor padrão (fator = 2)
const multiplicaValores = (valor, fator = 2) => valor * fator;

console.log( multiplicaValores(10, 3) );
console.log( multiplicaValores(50) );



/* Exercício
- Monte uma arrow function que receba um nome de pessoa e a converta
para letras maiúsculas.

- Chame a função 3x (passando nomes diferentes) e exibindo no console
os resultados */

const converteMaiscula = nome => nome.toUpperCase();

console.log( converteMaiscula('Tiago') );
console.log( converteMaiscula('Neil') );
console.log( converteMaiscula('alex') );

