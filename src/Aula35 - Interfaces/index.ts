// Interfaces são praticamente idênticas à Type Alias na maioria dos casos
// Criar um ou o outro normalmente não importa, já que ambos funcionam da mesma maneira
// Já que ambos são capazes de criar tipos ou implementar tipos em classes
// A diferença entre os dois é que normalmente se utiliza interfaces para modelar objetos
// Mesmo type podendo ser usado também
// Interfaces não precisam de atribuição porque é como se estivessemos modelando uma classe mesmo
// Quando usamos interface é porque queremos modelar uma forma, quando usamos um tipo, normalmente é
// Pra modelar um tipo simples, uma forma, mais genérico
interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

// No type, podemos criar tipos simples, essa é a principal diferença
// type Numero = number | string;

// Porém, com interfaces não é possível fazer type intersection

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;
// Dessa forma, criamos um tipo que possui as características das outras interfaces
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// Funcionou da exata mesma maneira, só mudando a síntaxe
export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Erick', 'Malta');
const pessoaObj: TipoPessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  nomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome;
  },
};
// Ambos funcionam tranquilo
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
