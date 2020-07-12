// É uma tipo de assinatura em que a função pode ter diversas formas diferentes
// Os overloads são quando funções podem ter diferentes formatos e dependendo desses formatos, elas mudam
// O funcionamento próprio, em JS padrão não há overload de funções, por isso é necessário
// Fazer type guards para checar os parâmetros enviados e realizar as mudanças de funcionamento
type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

// O y recebe o ? porque pode ser que ele não seja enviado sempre, já que a nossa validação só cobre
// O args e o x
const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((soma, valor) => soma + valor, 0) + x + (y || 0);
  // Short circuit evaluation porque a validação de cima é só para se o args for enviado
  // E dessa forma, garantimos que o x E o y sempre apareçam, já que temos assinatura para o x
  // Sempre vir na funação
  return x + (y || 0);
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
