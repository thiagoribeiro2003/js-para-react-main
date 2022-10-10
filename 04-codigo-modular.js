//import pessoa from "./modulos/pessoa.js";

/* Ao importar diversos recursos, separamos com vírgula e dentro de {}.
Se necessário, você pode dar um 'apelido' usando as para o recurso */
import { pessoa, curso as treinamento } from "./modulos/pessoa.js";


console.log( pessoa.nome );
console.log( treinamento.titulo );