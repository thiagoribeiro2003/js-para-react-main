// 09-metodos-de-array.js

/* map (mapeia, transformar em outra coisa)
Passa pelos elementos de um array e realiza operações neles
através de uma função (callback) gerando um novo array. */

const numeros = [10, 20, 30, 40, 50];

/*const numerosDobrados = numeros.map( function( numero ){
    return numero * 2; 
} );*/

// const numerosDobrados = numeros.map( dobra );

// function dobra(valor){
//     return valor * 2;
// }

// Usando arrow function
const numerosDobrados = numeros.map( numero => numero * 2);

console.log( numeros ); // original
console.log( numerosDobrados ); // transformado/mapeado

console.log('==========================');

const nomes = ['Thiago', 'Natália', 'Laura', 'Edinaldo', 'Elaine'];

const nomesGrandes = nomes.map(nome => nome.toUpperCase());
console.log(nomes);
console.log(nomesGrandes);

console.log('============ FILTER ==============');

/* filter (filtra/remove)
Retorna um array de valores de acordo com o resultado do filtro aplicado */

const vendas = [1500, 2000, 10_000, 1000, 500];
const meta = 1000;

const vendasAcimaDaMeta = vendas.filter( venda => venda > meta);
console.log(vendas);
console.log(vendasAcimaDaMeta);


const alunos = [
    'Thiago', 'Matheus', 'Adriel', 'Palloma', 
    'Marcelo', 'Antônio', 'Rafael', ' Rodrigo'
];

const resultado = alunos.filter(alunos => {
    //if(alunos.charAt(0) == 'M'){
    if(alunos.startsWith('M')){
        return alunos;
    }
})

const result = alunos.filter( aluno => aluno.startsWith('M') ?? aluno);



console.log(alunos);
console.log(resultado);
console.log(result);

const cursos = [
    {id: 1, titulo: 'HTML5 e CSS3', categoria: 'Front-End', preco: 500},
    {id: 2, titulo: 'JS e React', categoria: 'Front-End', preco: 800},
    {id: 3, titulo: 'React Native', categoria: 'Mobile', preco: 1000},
    {id: 4, titulo: 'Photoshop', categoria: 'Design', preco: 400},
    {id: 5, titulo: 'Flutter', categoria: 'Mobile', preco: 900}
];

const cursosFront = cursos.filter( curso => curso.categoria == 'Front-End');

console.log(cursos);
console.log(cursosFront);

console.log('================');
const titulos = cursos.filter( curso => curso.titulo );
console.log(titulos);

console.log('================');

const titulosDosCursosFront = cursos
                        .filter( curso => curso.categoria == 'Front-End')
                        .map(curso => curso.titulo);

console.log(titulosDosCursosFront);

/* reduce (reduzir a um único valor/resultado) */
console.log('============= REDUCE =============');

const valores = [10, 50, 2000, 5, 25];

const soma = valores.reduce( (acumulador, valor) => {
    return acumulador + valor
}, 0);
// ponto de partida pro reduce (ponto inicial da soma)

console.log(valores);
console.log(soma);

const somaCursosMobile = cursos
    .filter( curso => curso.categoria == 'Mobile')
    // Quando são dois ou mais parâmetros, usar o parenteses ()
    .reduce((acumulador, curso) => {   
        return acumulador + curso.preco;
    }, 0)

console.log(somaCursosMobile);








