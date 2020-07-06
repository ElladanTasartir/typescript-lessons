/* eslint-disable */
// O tipo undefined é comumente usado como o tipo de valores que não foram definidos, mas não como o any
// No exemplo abaixo, podemos ver que o parâmetro opcional recebe ou uma string, ou não é definido (undefined)
// Porque ele não necessariamente será enviado e retornado como vemos na tipagem dos parâmetros e retorno
export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// Normalmente, o null é mais usado conscientemente porque é quando queremos que algo possua valor nulo mesmo
// Nesse caso, queremos retornar valor nulo intencionalmente, é um exemplo didático, mas funciona de qualquer forma
// Então, o nosso retorno será number OU null
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  // Aqui por causa da condição baseada no tipo enviado
  // O TS entende que nesse momento o squareOfTwoNumber só pode ser number e não nulo
  console.log(squareOfTwoNumber * 100);
  // Então ele permite essa operação tranquilamente
}
