// Estrutura de dados não ordenada
// Dessa forma friamos uma tipagem enum
enum Cores {
  // Possuem chaves numéricas que apontam para esse valores descritos
  // Se não passarmos valores, ele ordena-os a partir do 0
  // Mas se passarmos, ordenam a partir do valor passado. Se passarmos mais do que um valor, eles seguem com os valores
  // Passados sem ordem
  // Índices dentro do Enum à direita
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}
// Se criarmos outro Enum com o mesmo nome, ele vai dar merge nos enums e criar um enum só
enum Cores {
  ROXO = 'ROXO', // 'ROXO'
  VERDE = 201, // Após declarar uma string é necessário adicionar um valor porque o enum não sabe como seguir uma ordenação
  // Após receber uma string, só números, que ele pega o próximo número
  ROSA, // 202
}
// No caso, por ser um enum numérico, ele retorna números
// Pode-se criar, por exemplo, um enum de strings também sem problemas
console.log(Cores);
// O output desse tipo é estranho
// {
//   '0': 'VERMELHO',
//   '1': 'AZUL',
//   '2': 'AMARELO',
//   VERMELHO: 0,
//   AZUL: 1,
//   AMARELO: 2
// }
// Com esse tipo de estrutura, podemos acessar tanto o valor da "chave" quando o do próprio valor
console.log(Cores.AMARELO); // output: 200
// O enum deixa tentar pegar dados de um índice onde não possua nada
console.log(Cores[0]); // output: undefined
console.log(Cores[100]); // output: AZUL
console.log(Cores['ROXO']); // output: ROXO
console.log(Cores.ROXO); // output: ROXO

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
escolhaACor(123456);
// Porém, dessa forma, eu posso enviar qualquer valor dentro do argumento da função, oque pode quebrar a função
// O typescript não reclama disso, então não é recomendável usar dessa forma
