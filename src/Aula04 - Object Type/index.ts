// Só declarando dessa forma, já conseguimos inferência básica
const ObjetoA: {
  /* readonly */ chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
// Isso pode-se fazer normal, estamos apenas alterando o valor dessa chaveA
// Porém, a partir do momento em que se define essa chave como readonly, fica impossível de jogar um valor
// Dentro dela, já que apenas podemos ler esse valor mas não sobrescrever
ObjetoA.chaveA = 'Outro valor';
// Isso não se pode fazer, porque estamos criando uma outra chave em um objeto com a tipagem já definiada
// No caso, esse objeto só pode ter chaveA e chaveB e nada mais
// Para poder adicionar qualquer chave dentro desse objeto, dando a ele um tipo indefinido, podemos
// Ao invés disso, definir o tipo Record<string, unknown>, dessa forma podemos jogar qualquer
// valor dentro desse objeto, mas não é interessante porque você perde todos os benefícios do Typescript
// Quando decide não utilizar uma tipagem definida
// Uma outra forma de fazer isso é colocando essa Index Signature para falar que a chave vai ser do tipo string
// E o valor, do tipo unknown
ObjetoA.chaveC = 'Nova chave';
ObjetoA.chaveD = 'Nova chave';

console.log(ObjetoA);
