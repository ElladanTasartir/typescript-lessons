// Assim como no método, através do Property Decorator podemos retornar
// Um property descriptor
/* eslint-disable */
function decorador(classPrototype: any, nomePropriedade: string | symbol): any {
  console.log(classPrototype);
  console.log(nomePropriedade);
  let valorPropriedade: any;
  // Dessa forma, com os atributos podemos definir até mesmo getters e setters
  return {
    get: () => valorPropriedade,
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  @decorador
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Erick', 'Malta', 20);
const metodo = pessoa.metodo('Olá mundo');
console.log(metodo);
