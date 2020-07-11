// Essa classe no final de contas virou uma assinatura de tipos para uma subclasse usar
// Dessa forma, para seguir o contrato precisamos extender essa classe abstrata nas subclasses
/* export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
} */

// Convertendo para Type Alias
// Ele se torna uma interface, praticamente e para aderir tipagem
// Em uma classe, precisamos usar a palavra chave implements
// Pode-se implementar também vários outros tipos
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};

// Então, dependendo do tipo de encapsulamento, é melhor utilizar classes abstratas
// Já que os tipos em si não permitem isolar atributos privados/protected
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  // Podemos modificar o nível de acesso de atributos herdados de classes abstratas
  // Sem problema algum, porém, não se pode definir um atributo como privado quando herdado
  // Usando tipos, é impossível de usar outro nível de acesso que não public,
  // Porque os tipos em typescript são entendidos como atributos públicos e ao tentar
  // Mudar o nível de acesso para private/protected, você não está seguindo o contrato
  constructor(public nome: string, public sobrenome: string) {
    // Nesse caso é preciso chamar a super classe porque ela poderia ter
    // Um construtor
    // Agora que estamos usando um tipo como herança, não podemos chamar super porque não há
    // Construtor no pai
    // super();
  }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Erick', 'Malta');
console.log(pessoa.nomeCompleto());
