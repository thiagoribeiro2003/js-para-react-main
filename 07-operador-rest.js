/* 07-operador-rest.js 

Usando o ... como operador rest() 
Na prática usamos para mesclar uma lista de argumentos/parâmetros
para uma função */

                         // esta retornando(mesmo não tendo um return)
const ordenar = (...parametros) => parametros.sort();


console.log(ordenar('Lucas', 'Antonio', 'Adriel'));
console.log(ordenar('Rush', 'Pink Floyd', 'Dream Theater', 'Slayer', 'Nightwish'));

console.log('==========================');

const cursos = ['React', 'Angular', 'Vue', 'Node.js', 'PHP', 'SQL'];
console.log(cursos);
console.log(ordenar(...cursos)); // spread

console.log('==========================');

const soma = (...valores) => {
    let total = 0;

    for(let valor of valores){
        total += valor;
    }

    return total;

}

console.log(soma(10, 20));
console.log(soma(5, 1, 70, 45, 5));