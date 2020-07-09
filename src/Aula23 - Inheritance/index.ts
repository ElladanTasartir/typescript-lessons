export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }
}

// Assim como o JS padrão e outras linguagens, para declarar Herança, é necessário usaro a palavra extends
export class Aluno extends Pessoa {
  // Dessa forma sobrescrevemos a função getNomeCompleto escrito em pessoa
  getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Empresa: ${this.nome} ${this.sobrenome}`;
  }
}

// Atraves da herança, podemos falar que tanto Aluno quanto Cliente são do tipo Pessoa
// Mas também podemos falar que são do seu respectivo tipo, o que torna polimorfismo possível

// Então, devemos jogar os valores obrigatórios do construtor de Pessoa
const pessoa = new Pessoa('Erick', 'Malta', 20, '000.000.000-00');
const aluno = new Aluno('Erick', 'Malta', 20, '000.000.000-00');
const cliente = new Cliente('Empresa', 'Algo', 20, '000.000.000-00');

function sayNomeCompleto(...pessoa: Pessoa[]): void {
  pessoa.forEach((p) => console.log(p.getNomeCompleto()));
}

sayNomeCompleto(pessoa, aluno, cliente);
