import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, valor) => total * valor, 1);
};

// Atrelando uma string ao global do node
// Após extender o tipo de global do NodeJS na declaration file
// Agora o TS reconhece e faz o autocomplete dessa nova variável
global.MINHAGLOBAL = 'Valor da minha global';

export default _;
