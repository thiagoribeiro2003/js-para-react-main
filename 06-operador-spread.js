/* Usando o ... como operador spread (espalhar)
Na prática, copiamos o conteúdo de um array (bandas) para dentro
de outro (maisBandas) 

IMUTABILIDADE (não muda) */
const bandas = ['Rush', 'Dream Theater', 'Slayer', 'Black Sabbath'];
const maisBandas = [...bandas, 'Deja Vu', 'Calipso'];
//const teste = [...maisBandas, 'salve'];

console.log(maisBandas);

console.log('===============');

const dados = {
    nome: 'Palloma',
    idade: 21
};

const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
    idade: 25 // sobrescrevendo o valor somente da propriedade idade
};

console.log(novosDados); // novo objeto contendo os dados do anterior também
console.log('Idade atualizada: ' + novosDados.idade);
console.log(dados);