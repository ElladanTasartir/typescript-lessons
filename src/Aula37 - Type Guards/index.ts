export function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Pessoa = { tipo: 'pessoa'; nome: string };

type Animal = { tipo: 'animal'; cor: string };

type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // Tipo de Type Guard, para garantir que só seja mostrado o obj.nome
  // Se ele de fato existir
  // if ('nome' in obj) console.log(obj.nome);
  // É um type guard que garante que o objeto enviado é do tipo Aluno, ou seja
  // Vai ter o atributo nome dentro dele
  // Quando fazemos type guard o TS tenta inferir o tipo resultante da nossa checagem
  // if (obj instanceof Aluno) console.log(obj.nome); // Aqui o tipo é aluno
  // Outro método para se fazer type guard é adicionando uma chave tipo no objeto
  // Onde colocamos uma string com o nome do tipo, dessa forma
  // Podemos garantir qual será o tipo inferido e até fazer um switch
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log('Isso é um animal', obj.cor);
      break;
  }
}

mostraNome(new Aluno('Erick'));
mostraNome({ cor: 'Branco', tipo: 'animal' });
