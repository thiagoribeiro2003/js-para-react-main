// Método de Concatenação de Strings (tradicional)
const nome = "Tiago";
const sobrenome = "B. dos Santos";
let idade = 38;
let cidade = "São Paulo";
let estado = "SP";

/* Meu nome é Tiago B. dos Santos, tenho 38 anos e moro atualmente
na cidade de São Paulo - SP. */

let mensagem = "Meu nome é <b class=\"teste\">"+nome+ " "+sobrenome+"</b>, tenho "+idade+" anos e moro atualmente na cidade de "+cidade+ " - "+estado+".";

console.log(mensagem);

console.log("=========");

// Método template literal/string
let mensagem2 = `Meu nome é <b class="teste"> ${nome.toUpperCase()} ${sobrenome} </b>, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}. 
Sou ${idade >= 18 ? 'maior ' : 'menor '} de idade.`;

console.log(mensagem2);

