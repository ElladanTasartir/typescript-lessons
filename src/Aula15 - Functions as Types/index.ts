// CallableFunction é uma maneira de falar que essa função recebe um callback
// Apesar de que, este jeito permite que qualquer callback seja enviado
// Isso é basicamente um map de strings feito na mão

type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

// O problema com usar CallableFunction é que por não receber uma tipagem específica
// Podemos utilizar esse callback da forma que quisermos sem restrição alguma
// O que pode gerar alguns erros
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);
