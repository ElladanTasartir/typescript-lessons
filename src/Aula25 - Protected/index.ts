export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(...colaboradores: Colaborador[]): void {
    colaboradores.map((colaborador) => this.colaboradores.push(colaborador));
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
  getNome(): string {
    return this.nome;
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001');
  }

  // Pelo array de colaboradores ter sido mudado para protect, agora temos acesso a ele
  // Dentro da subclasse, mas ele continua encapsulado sem ser possível de acessar de fora das classes
  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;

    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Erick', 'Malta');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('João', 'Souza');
const colaborador4 = new Colaborador('Luiz', 'Otávio');
empresa1.adicionaColaborador(
  colaborador1,
  colaborador2,
  colaborador3,
  {
    nome: 'Feliz',
    sobrenome: 'Algo',
  },
  colaborador4,
);
const colaboradorRemovido = empresa1.popColaborador();
console.log('Colaborador removido: ');
console.log(colaboradorRemovido);
empresa1.mostrarColaboradores();
