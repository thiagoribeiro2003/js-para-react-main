class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';
    idade;


    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }

    mostraIdade(){
        console.log( this.idade );
    }

    verificaIdade(){
        if(this.idade>=18){
            return "Maior de idade";
        } else {
            return "Menor de idade";
        }

        // if/else ternário
        //return this.idade >= 18 ? 'é maior' : 'é menor';
    }


}

class Aluno extends Pessoa {
    // Propriedades
    matricula;
    curso;

    // Métodos
    mostraDados(){
        console.log(this.matricula);
        console.log(this.curso);

        // métodos da super classe
        this.mostraNome();
        this.mostraGenero();
        this.mostraIdade();
    }
}









/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Tiago';
umaPessoa.genero = 'masculino';

console.log(umaPessoa);

let outraPessoa = new Pessoa;
outraPessoa.nome = 'Mônica';

console.log(outraPessoa);


// Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Thiago';
aluno.genero = 'masculino';
aluno.matricula = '123abc';
aluno.curso = 'JS para React';
aluno.idade = 18;

//console.log(aluno);
aluno.mostraDados();
console.log(aluno.verificaIdade());
 







