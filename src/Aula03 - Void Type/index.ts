// É uma tipagem que podemos usar quando queremos explicitar que uma função não retorna nada
// Muito parecido quando em outras linguagens com tipagem estática como C#, Java, criamos métodos
// Que não possuem retorno
// Pode ser inferido pelo typescript, assim como criado de forma explícita
// É recomendável que se seja específico com o retorno das funções, assim como o resto do código para evitar
// Side effects e todo tipo de transtorno que pode ocorrer se o TS não inferir da forma correta
function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('Erick', 'Malta', 'Qualquer', 'Coisa');

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + this.sobrenome);
  },
};

pessoa.exibirNome();

// O motivo do export, é porque no TS, se não exportarmos nada, ele considera o código como script-mode, ou seja
// Todos os arquivos que o nosso compilador está observando, ele considera como um escopo global, e as variáveis
// Podem ser utilizadas de diferentes arquivos, por isso, exportamos essa variável sem motivo algum
// Para que o script atual seja colocado no module mode, ou seja, ele é um módulo isolado
export { pessoa };
