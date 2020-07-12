// Se acontecer da validação retornar true, o valor do parâmetro, é um number
// Isso é conhecido como Type Predicate
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number | null {
  const retorno = args.reduce((sum, value) => {
    // No momento em que saímos do escopo da função, o TS não vai entender como typeguard
    // Então ele não vai conseguir fazer a inferência de tipos na nossa validação, por isso
    // Não podemos simplesmente responder com um booleano quando isso acontece, precisamos falar que
    // Quando um booleano é verdade, o valor é um número, como na função isNumber
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

// Dessa forma, o Typescript tem problema em inferir o tipo porque ao digitar um valor
// Ele automaticamente infere aquele valor para o generic, para consertar esse comportamento
// Podemos pasasr um spread de um array com os valores, que o typescript entenderá
// Porque dentro do array existe o tipo string | number, por exemplo
// console.log(soma(1, 2, 'a'));
console.log(soma(...[1, 2, 3, 4, 5, 6, 'b', 1]));
console.log(soma('a', 'b', 'c'));
