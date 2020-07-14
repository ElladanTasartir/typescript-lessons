// Por enquanto, parâmetros no decorator podem só ser assistidos
// Nem modificados e nem criados
// Assim como os outros decorators, é chamado no momento em que a função é criada
/* eslint-disable */
function decorador(
  classPrototype: any,
  nomeMetodo: string | symbol, // Symbol é um tipo primitivo que cria dados únicos
  index: number, // Indíce na função em que o parâmetro é enviado
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(@decorador nome: string, @decorador sobrenome: string, @decorador idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // Para decorar um parâmetro, podemos apenas colocar ele atraz do parâmetro desejado
  metodo(@decorador msg: string): string {
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
