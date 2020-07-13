/* eslint-disable */
interface Constructor {
  new (...args: any[]): any;
}
function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) {
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
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro Decorador ' + param1);
    return target;
  }
}

@outroDecorador('O parâmetro do outro decorador') // Segundo
@inverteNomeECor('Valor 1', 'Valor 2') // Primeiro a ser chamado
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Erick', 'Roxo');
console.log(animal);
