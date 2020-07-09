export class Empresa {
  // Um atributo/método public é acessível dentro da classe,fora da classe, em subclasses em qualquer instância
  // dessa classe, no TS, o termo public é redundante, pois se não declararmos nada, o atributo já é public
  // por padrão
  readonly nome: string;
  // Um atributo/método que for private ele só é acessível dentro da classe em que foi criado, perfeito para
  // encapsulamento. Não é acessível nem para subclasses
  // Para disponibilizar esses dados para fora das classes, é necessário a utilização de métodos
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

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
  // Redundante, pois o atributo já é público, então estamos criando um getter para mostrar
  // um atributo que já é possível capturar pela instância
  getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001');
const colaborador1 = new Colaborador('Erick', 'Malta');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('João', 'Souza');
const colaborador4 = new Colaborador('Luiz', 'Otávio');
empresa1.adicionaColaborador(
  colaborador1,
  colaborador2,
  colaborador3,
  colaborador4,
  {
    nome: 'Feliz',
    sobrenome: 'Algo',
  },
);
empresa1.mostrarColaboradores();
