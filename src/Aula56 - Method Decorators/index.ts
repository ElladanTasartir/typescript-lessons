// O descriptor é o tipo de objeto enviado no Object.defineProperty usado no JS
// O decorador de métodos retorna um property descriptor
function decorador(
  classPrototype: UmaPessoa, // Prototype da Classe, autoexplicativo
  nomeMetodo: string, // Nome do método que está sendo decorado
  descriptor: PropertyDescriptor, // Property descriptor do método decorado
): PropertyDescriptor {
  console.log(classPrototype, nomeMetodo, descriptor);
  // Se tentarmos criar algo no prototype da classe, o TS não irá mostrar as alterações que fizemos
  // Pois ele ainda não checa nesse nível para decoradores
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase(); // Agora a função decorada retorna a string enviada como parâmetro
      // Em caixa alta
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  // Assim que o método é criado, ele chama o decorador
  @decorador
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
