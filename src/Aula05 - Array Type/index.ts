// Duas maneiras de se criar um array
// Array<T> ou T[]
// Podemos passar qualquer tipo no T, inclusive os criados por nós mesmos
export function multiplicaArgs(...args: Array<number>): number {
  // O Typescript é tão inteligente que ele detecta que tanto ac quanto valor, são numbers
  // porque a única possibilidade dentro desse array é a existência de apenas números
  return args.reduce((ac, valor) => ac * valor, 1);
}
// As duas maneiras de type annotation funcionam normal
export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

// O TS infere que result será do tipo number também
const result = multiplicaArgs(1, 2, 3, 4, 5);
const concatenacao = concatenaString('Concatenando', 'algumas', 'strings');
const upper = toUpperCase('a', 'b', 'c', 'd');
console.log(result, concatenacao, upper);
