// Um decorator é um objeto impostor, por assim dizer, ele permite que você faça algo antes de entregar a classe/objeto
// O exemplo nesse arquivo é um decorator de classe, não exatamente um do TS
// Ao colocar o @ com a função decorator criada
// Vai garantir que a nossa classe passe pela função decoradora
/* eslint-disable */
@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

// Decorator
// Dessa forma, falamos que a nossa classe pode ser de qualquer tipo T
// e fazemos a tipagem do construtor, falando que pode receber quaisquer argumentos
// E retornar qualquer coisa
// Dessa forma, através de um decorator, podemos realizar algo dentro do construtor
// Tendo em vista que teremos uma classe anônima que herda da nossa classe target
// Dessa forma, podemos modificar dados de várias classes, sem precisar mexer na classe
function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.cor = this.inverte(args[0]);
      this.nome = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

// Através desse decorator, conseguimos modificar o objeto que será retornado
// Apesar de ser enviado 'Roxo', modificamos o objeto antes dele ser entregue ao usuário
const animal = new Animal('Erick', 'Roxo');
console.log(animal);
