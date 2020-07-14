// Tudo o que é criado dentro de um declaration file, precisa ser criado de forma global
// Para o TS poder utilizar no ambiente todo, é claro, pode-se criar um escopo e depois
// Jogá-lo como global, mas o jeito mais simples é já deixando global
// Para extendermos uma biblioteca, podemos pegar o namespace que utilizam na definição de tipos da mesma
// E criar um namespace com o mesmo nome para que ocorra um merge, mas é claro que para isso
// É necessário conhecer um pouco da lib antes de extendê-la
// Necessário utilizar a palavra declare
// Nome do namespace do Lodash para realizar merge
declare namespace _ {
  // Nome da interface do Lodash para merge
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MINHAGLOBAL: string;
  }
}
