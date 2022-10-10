/* 08-desestruturacao.js
Desestruturação (Destructuring)
Extrair dados facilmente de um array ou objeto
e armazená-los em variáveis/constantes*/

// Usando desestruturação em arrays
const[a, b] = ['Lucas', 'Matheus'];
console.log(a);
console.log(b);

console.log('==========================');

const alunos = ['Adriel', 'Palloma', 'Antônio'];
const[adriel, palloma, antonio] = alunos;
console.log(adriel);
console.log(palloma);
console.log(antonio);

console.log('==========================');

const unidades = ['Penha', 'Tatuápe', 'Itaquera', 'São Miguel Paulista']; 
const [penha, tatuape, , smp] = unidades; // pulando Itaquera

console.log(penha);
console.log(tatuape);
console.log(smp);

console.log('==========================');


// Usando desestruturação em objetos
const { nome, cidade } = { nome: 'Fulano', idade: 18, cidade: 'São Paulo' };
console.log(nome);
console.log(cidade);

console.log('==========================');

const dados = {
    nome: 'Guilherme',
    curso: 'JavaScript',
    nascimento: '31/10/1998'
};

const{ nome: aluno, curso, nascimento } = dados;
console.log(aluno);
console.log(curso);
console.log(nascimento);
