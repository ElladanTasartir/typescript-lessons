// Para acessar a super class (Classe que herdamos, através da subclasse), precisamos usar
// O termo super, isso faz com que usemos um comportamento padrão da superclasse, e depois
// Possamos adicionar o nosso próprio comportamento dentro de um método, por exemplo
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

export class Aluno extends Pessoa {
  // Se a nossa classe tem um construtor próprio, precisamos chamar o construtor da
  // superclasse, se não o TS reclama
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    // Recebemos argumentos padrões, porque vamos utilizar esses parâmetros não como atributos,
    // Mas para suprir as necessidades da superclasse
    // Já a sala, por ser atributo do Aluno, precisamos declará-la
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }
  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    // Retorn o método da super classe
    const result = super.getNomeCompleto();
    return result + ' ' + this.sala;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Empresa: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Erick', 'Malta', 20, '000.000.000-00');
const aluno = new Aluno('Erick', 'Malta', 20, '000.000.000-00', 'Sala 1');
const cliente = new Cliente('Empresa', 'Algo', 20, '000.000.000-00');

function sayNomeCompleto(...pessoa: Pessoa[]): void {
  pessoa.forEach((p) => console.log(p.getNomeCompleto()));
}

sayNomeCompleto(pessoa, aluno, cliente);
