// Quando se tem mais de um tipo de retorno, variável, parâmetro, tanto faz pode-se especificar
// Quais são esses tipos utilizando Union Types, utilizando o sinal de pipe "|"
function addOrConcat(a: number | string, b: number | string): number | string {
  // Se retornar os dados assim de forma pura, o TS vai reclamar, então é necessãrio validar os dados antes
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  // Dessa forma ele retorna, ou number ou string
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
