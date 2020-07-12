// Funciona como parâmetros dentro do tipo
// TS infere sem problemas o tipo para esse array, mas ele fez isso checando através de Generics
// Ele teve que olhar dentro do seu array para saber o que estava lá dentro, porque
// O Typescript não sabe com antecedência quais são os tipos que estarão dentro do array
// Fazer uma cópia do filter através de TS
// Mas como definimos por exemplo, que receberemos um array de QUALQUER tipo e faremos iterações nele?
// É necessário ser GENÉRICO

type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;
// Quando utilizamos generics, se queremos que o tipo seja inferido antes de chamar a função, é necessário
// Colocar o tipo antes dos parâmetros
// Generics assim como readonly, pode-se usar em vários locais diferentes
// As tags <> representam um Generic, dentro dela, podemos colocar qualquer coisa, até mesmo escrever
// QUALQUERCOISA, mas por convenção, colocamos T de Type
// Com isso, no momento que chamar a função, o TS verifica o que está chegando como tipo dentro do array
// E podemos pegar esse tipo definido como parâmetro e usarmos em outros lugares, dessa forma
// Dependendo do tipo enviado como parâmetro, ele irá inferir dinamicamente
// Agora, para passar essa tipagem dinâmica para o tipo concreto que criamos, no caso, FilterCallback
// Precisamos falar para o TS que vamos receber um tipo genérico dentro desse tipo concreto criado,
// Por isso, precisamos colocar ao lado do nome do tipo, que ele recebe esse generic
// E, assim como funções, precisamos passar dentro do nosso tipo quando usarmos o Generic que ele
// Irá receber
export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) novoArray.push(array[i]);
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayStrings = ['a', 'b', 'c', 'd'];
const arrayFiltradoOriginal = array.filter((value) => value < 5);
// Por não conseguirmos checar a tipagem diretamente dentro de um array com tipos concretos
// Temos que checar o tipo antes de trabalhar com ele porque o tipo atual é unknown
// Mesmo ela aceitando qualquer tipo dentro dela com o unknown, ela me força a checar os tipos
// Dentro do meu array e verificar antes de enviar, e perdemos as tipagens dessa forma, porque é unknown
// Agora que adaptamos o código para generics, os tipos são inferidos dinamicamente na função e não precisamos
// Fazer typecheck porque o próprio TS irá realizar isso para nós, dessa forma o Typescript nos dá intelissense
// Para o tipo do parâmetro que ele está recebendo, dinâmicamente
const arrayFiltrado = meuFilter(array, (value) => value < 5);
// Através dos generics, essa função se torna dinamicamente tipada
// Podemos também passar o generic para a nossa função, mas já que pode ocorrer a inferência de tipos, isto não é
// Sempre necessário
const arrayStringsFiltradas = meuFilter<string>(
  arrayStrings,
  (value) => value !== 'b',
);
console.log(arrayFiltradoOriginal);
console.log(arrayFiltrado);
console.log(arrayStringsFiltradas);
