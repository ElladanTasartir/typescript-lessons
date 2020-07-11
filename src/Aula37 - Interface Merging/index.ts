// Não se pode declarar um type e uma interface com o mesmo nome, pois usam o mesmo identificador
// type Pessoa = {
//   nome: string;
// };
// Porém se declararmos uma outra interface com nome igual, ocorre um declaration merge
// As duas interfaces se unem, e todas as suas definições de tipos são necessárias para quem
// implementar essa interface

interface Pessoa {
  nome: string;
}

interface Pessoa {
  // Não pode-se alterar depois de declarado
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  // Pode não existir, mas se existir, será inalterável
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Erick',
  sobrenome: 'Malta',
  enderecos: ['Avenida Brasil'],
  idade: 30,
};

console.log(pessoa);
export default pessoa;
