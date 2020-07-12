// O Record recebe como genérico o tipo da chave e o tipo dos valores

import { Pessoa } from '../Aula23 - Inheritance';

// Porém, se formos contra o que definimos em qualquer uma das chaves, ele irá dar problema
const objeto1: Record<string, string | number> = {
  nome: 'Erick',
  sobrenome: 'Malta',
  idade: 30,
};
console.log(objeto1);

type PessoaProtocolo = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocolo>;
// O Required  pega tudo o que for opcional e transforma em chaves obrigatórias
// Do nosso objeto

// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Transforma todas as chaves obrigatórias do objeto em chaves opcionais
// Basicamente o contrário do Required

// Readonly
// Como o nome já diz, transforma todas as chaves em Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

// Pick
// Permite que escolha as coisas de dentro do objeto que você quer utilizar
// Nesse caso, Pick vai pegar de PessoaRequired, somente os atributos nome e sobrenome como tipos
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Erick',
  sobrenome: 'Malta',
  idade: 30,
};

console.log(objeto2);

// Extract e Exclude
// Exclude: Computa todos os tipos que estao em ABC que não estão em CDE
// Então, nesse caso, A e B são os tipos gerados pelo Exclude
// Extract: Computa todos os tipos que estão em ABC que podem ser atribuídos em CDE
// No caso, só o C pode ser atribuído para CDE, portanto o tipo será somente C
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

// Dessa forma definimos que o tipo de AccountApi é, todas as chaves de AccountMongo
// Menos, a chave '_id'
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdasfai09a0ea90d90asda',
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id }; // Exemplo de substituição de _id do mongo por id
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default 1;
