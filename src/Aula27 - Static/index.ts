// Atributos/Métodos estáticos são possíveis de acessar sem instanciar a classe
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    // Não se pode acessar os atributos estáticos através da palavra this
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Erick', 'Malta', 20, '123.456.789-00');
// Para chamar esse método estático
// Isto é um factory method, é um design method bem útil quando queremos criar um bojeto
// Sem enviar todos os atributos necessários do construtor
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
// Não é possível acessar o método estático pela instância
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
