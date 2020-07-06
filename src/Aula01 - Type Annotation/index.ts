/* eslint-disable */
// Maioria dos casos em que se tentar colocar o tipo de uma variável em atribuição
// O Próprio typescript já realiza a inferência do tipo, baseado no que está enviando para a variável
// Por isso, o Eslint mesmo corrige e tira a anotação do tipo, porque isso vai ser automaticamente
// Feito pelo Typescript
// Tipos básicos do Typescript
// Maioria dos tipos começam com letras minúsculas
let nome: string = 'Luiz'; // Qualquer tipo de string
let idade: number = 30; // Qualquer tipo de número: 10, 1.5, -5.55, 0xf00d, 0b1010, 0o7744, entre outros
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbols
// let big: bigint = 10n; // bigint - ES2020

// Tipos passados por referência, normalmente podem ter uma tipagem um pouco diferente
// Arrays
// É preciso falar o tipo de dados que entra no array dentro do Generic (isso aqui <T> (T de tipo))
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3]; // Mesma coisa do exemplo de cima, tem o mesmo resultado
// Isso funciona com qualquer tipo, essa anotação de Array, inclusive os criados por nós mesmos
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
// Quando queremos deixar um atributo opcional, pode-se utilizar a interrogação
// Que esse atributo não é necessário dentro do objeto, enquanto os outros são
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 20,
  nome: 'Erick',
};
// Podemos declarar como a forma acima, que é um tanto verbosa, ou, com Type Alias, mas isso depois

// Funções
// Colocando o tipo depois dos parâmetros, definimos o tipo de retorno para a função
// Nesse caso, por causa da inferência de tipos, podemos ocultar o tipo do retorno
// Porque o TS já sabe que só é possível retornar um number daquela operação com dois numbers
// Mas por didática, ficará ali
function soma(x: number, y: number): number {
  return x + y;
}
// Os dois exemplos tem o mesmo resultado, nota que ao invés de usarmos um ':' para o retorno
// Usamos uma espécie de arrow function, porque o typescript encontraria problema com o código
// Se houvesse aqueles pontos ali, por isso, seguimos com a flecha, e declaramos o tipo do retorno e aí sim
// Atribuímos a função
const soma2: (x: number, y: number) => number = (x, y) => x + y;
