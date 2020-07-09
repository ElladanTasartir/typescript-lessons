// Para tipar o This dentro de uma função, precisamos tipar o argumento, nesse caso,
// O this não é um argumento da função, mas apenas uma forma de tiparmos ele
export function funcao(this: Date, argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1, age);
}

// Para chamar a função é necessário utilizar apply ou call para definir o this
// No call, o primeiro argumento é o this e o segundo argumento para frente são os argumentos da função
funcao.call(new Date(), 'Erick', 20);
// A diferença do call pro apply, é que a gente passa os argumentos da função dentro de um array
funcao.apply(new Date(), ['Erick', 20]);
