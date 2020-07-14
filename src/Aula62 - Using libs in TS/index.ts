// Em casos onde a dependência instalada não vem com a tipagem, é necessário
// instalar a tipagem dela para conseguirmos utilizar os benefícios do TS
// Junto com ela, para isso, é só instalar a dependência no formato @types/nome-da-lib
import validator from 'validator';
import _ from 'lodash';
// yarn add @types/lodash -D
// Sem os tipos, perdemos o autocomplete, a validação de tipos, que são benefícios do TS

console.log(validator.isEmail('erick@gmail.com'));
console.log(_.clone([1, 2, 3, 4]));
