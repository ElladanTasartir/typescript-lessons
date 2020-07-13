/* eslint-disable */

function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);

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

// Mesma coisa que inverteNomeECor(Animal)
// Quando colocamos o decorador com o @ em cima da classe ele é executado no momento da criação
// Da classe, e receberemos ele no target do nosso decorator
@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Erick', 'Roxo');
console.log(animal);
