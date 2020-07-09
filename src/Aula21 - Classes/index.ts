// Classes em TS são bem similares às classes de outras linguagens como Java, C#
export class Empresa {
  //  FORMA LONGA
  // Campo público, readonly, ou seja, não pode ter o seu valor alterado fora da classe do tipo string
  // Podemos colocar um valor padrão aqui, porém nesse caso, ele nãao pode ser alterado
  // Os atributos já são public por padrão, então se omitir o escopo, ele se torna público
  public readonly nome: string;
  // Classes no TS, além de serem classes, também são tipos, então podemos criar uma classe
  // Colaborador para poder definir como o tipo do nosso array
  private readonly colaboradores: /* readonly */ Colaborador[] = [];
  // Se colocássemos o readonly no array, no tipo, ele poderia apenas poderia ser lido
  // Não podendo dar push ou pop nele
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  // Para os métodos também, o public pode ser omitido
  adicionaColaborador(...colaboradores: Colaborador[]): void {
    colaboradores.map((colaborador) => this.colaboradores.push(colaborador));
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  // FORMA PEQUENA
  // Se vamos declarar os atributos dentro do construtor, precisamos declarar também o escopo delas
  // Entre outras informações
  // Só de definirmos o atributo no construtor, ele já declara o atributo, recebe o valor enviado e coloca
  // Nesse atributo
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
  // Por causa do Structural type system, se mandarmos um objeto que possui a mesma estrutura do tipo
  // de Colaborador, ele aceita normalment
  {
    nome: 'Feliz',
    sobrenome: 'Algo',
  },
);
empresa1.mostrarColaboradores();
// console.log(empresa1.nome); // por ser público, podemos acessar o dado nome
