import _ from './modulo';

// Para criar declaration files dos nossos tipos, o tsconfig tem uma opção de declaration: true

// Quando criamos uma funcionalidade nova para uma lib, por exemplo
// O TS vai reclamar que essa funcionalidade, não existe nos tipos definidos da lib
const array = [100, 200, 300, 400];

// A maneira mais fácil de extender essas tipagens é através de uma declaration file
// Que possui a extensão .d.ts

console.log(global.MINHAGLOBAL);

console.log(_.sum(array)); // Soma do array
console.log(_.min(array)); // Valor mínimo do array
console.log(_.max(array)); // Valor máximo do array
console.log(_.mean(array)); // Média dos valores do array
console.log(_.mul(array)); // Método criado localmente
