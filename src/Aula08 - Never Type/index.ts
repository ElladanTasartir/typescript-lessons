// Never significa que algo nunca irá retornar nenhum tipo de valor
// Exemplos: funções que lançam erros nunca retornam valor e loops infinitos, nunca retornam valor
// Se colocarmos o tipo void o typescript também entende tranquilo
// O uso real do tipo never é que, quando, por exemplo, usamos para lançar um erro, significa que toda vez que a função
// For chamada, ela precisa ser tratada, visto que ela NUNCA retorna nada, provavelmente é por lançar um erro
export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
