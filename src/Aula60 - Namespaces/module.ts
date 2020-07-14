// Namespaces são como um escopo a mais
// Não é uma funcionalidade tão interessante em JS/TS, porque já existe o sistema de módulos
// Que faz o serviço de uma forma ótima e inclusive o próprio ESLINT reclama quando utilizamos
// Namespaces, porque além de não ser uma função existente no JS, substitui de forma desnecessária
// Algo que já funciona perfeitamente
/* eslint-disable */
namespace MeuNamespace {
  // Pode-se criar qualquer coisa dentro de um namespace, inclusive outros namespaces
  export const nomeDoNamespace = 'Erick';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Erick');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}
// É impossível de se acessar o que está dentro do namespace de fora, sem exportar os dados
// E para pegar essas informações vindas do namespace, podemos chamá-lo e capturar as informações
// Que exportamos de lá
const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Erick');
