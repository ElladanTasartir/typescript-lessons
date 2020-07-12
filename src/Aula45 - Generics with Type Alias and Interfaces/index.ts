// Podemos colocar valores padrões para os argumentos do generic
// Então, se não informarmos, ele recebe o argumento padrão
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

// Dessa maneira, é obrigatório passar os argumentos para o nosso generic
export const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Erick',
  sobrenome: 'Malta',
  idade: 20,
};
// Dessa forma podemos passar argumentos dinâmicos para a nossa tipagem
export const aluno2: PessoaProtocolo2<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 20,
};

export const aluno3: PessoaProtocolo = {
  nome: 'Aluno',
  sobrenome: '456',
  idade: 20,
};

console.log(aluno1, aluno2, aluno3);
