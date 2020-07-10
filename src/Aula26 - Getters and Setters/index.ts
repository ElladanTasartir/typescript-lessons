export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    // Setter é chamado aqui já
    this.cpf = _cpf;
  }

  // Jeito de criar métodos getter and setter do jeito que JS/TS aceita
  // Esses métodos se comportam como atributos da classe também, por isso
  // Declarando getters e setters com o atributo declarado, gera problemas com identificadores
  // Já que cpf já existe no atributo da classe, para consertar isso, por convenção
  // Colocamos _ no atributo que vamos realizar o getter e setter
  // Então ele se torna, no caso _cpf
  set cpf(cpf: string) {
    // Typescript não aceita declaração de retorno em setter
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Erick', 'Malta', 20, '123.456.789-00');
// Por estes getters e setters se comportarem como atributos de classe, é necessário chamá-los
// Como atributos de classe, então realizando a atribuição chamamos o set
pessoa.cpf = '123.456.789-99';
// E realizando a obtenção de dados, chamamos o get
console.log(pessoa.cpf);
