// Também é possível assim:
// export const pessoa = {
const pessoa = {
    nome : 'Tiago',
    idade : 38,
    cidade : 'São Paulo'
}

const curso = {
    titulo : 'HTML e CSS',
    cargaHoraria : 40
}

// export default pessoa;
export { pessoa, curso }