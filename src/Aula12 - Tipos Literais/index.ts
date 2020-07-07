// Tipos literais são como as constantes em JS são definidas, ou seja, aquele número só pode ter um valor e apenas aquele
// Qualquer alteração naquele valor aponta erro
// Com typescript, é possível fazer isso também, só que até mesmo entregando valores constantes para variáveis
// Criadas com let
let a: 100 = 100; // eslint-disable-line
// a = 120; aponta erro, porque a variável a é do tipo literal 100, ou seja, é um number que só pode ser 100
// que é um subtipo de number
// Mesmo assim, não é aconselhável fazer dessa forma, porque podemos manter variáveis criadas com o const
// Para ter o mesmo efeito
// Para fazer uma asserção literal, é possível fazer também:
let b = 100 as const; // eslint-disable-line
// Ambas as variáveis tem a mesma tipagem

// O melhor uso para isso seria para objetos e arrays:
//
const pessoa = {
  nome: 'Erick' as const,
  sobrenome: 'Malta',
};
console.log(pessoa);
// Dessa forma, nome pode apenas ser Erick, se não, ele aponta erro
// pessoa.nome = 'Ronaldo'; gera um erro no typescript

// Dessa forma, apenas pode-se passar Vermelho, Amarelo ou Azul para essa função
// Se não, o TS dá erro
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

// Module mode
export default 1;
