// Encadeamento opcional: Função do ECMA2020 responsável por parar um encadeamento de chamadas quando colocamos
// Alguma propriedade de um objeto, por exemplo com uma interrogação, exemplo:
// documento.data, pode ser undefined, por isso se fizermos documento.data?.toString();
// Ele irá parar o encadeamento na interrogação, porque o valor recebido de documento.data é falsy
// Dessa forma, torna-se muito difícil de chamar um método de dentro de um atributo em um objeto que pode ser
// indefinido
// Operador de coalescência nula: ECMA2020 também, é responsável por verificar se o valor que recebe do lado
// Esquerdo do operador (??) é um não-valor (null ou undefined), ou seja, ele só vai verificar se é undefined
// ou null e somente se for um desses dois valores, ele executará o que estiver ao lado direito
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? '1 -Ixi, não existe data');
console.log(undefined ?? '2 -Ixi, não existe dado');
console.log(null ?? '3 -Ixi, não existe dado');
// false é falsy em JS, mas o nullish coalescence operator só checa por valores de não-valor
console.log(false ?? '4 - Ixi, não existe dado');
// 0 também é falsy, mas não passa pelo coalescence operator
console.log(0 ?? '5 - Ixi, não existe dado');
// '' também é falsy
console.log('' ?? '6 - Ixi, não existe dado');
