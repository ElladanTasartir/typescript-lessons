// Tuple não existe no Javascript padrão, é exclusivo do Typescript, porém o JS vai entender essa tupla como Array
// A Tupla é um array com tipos bem específicos e tamanho também definido
// Esse tipo de dado é uma tupla, um array de tamanho fixo, ao contrário do Python, tupla não é um tipo imutável
// Por padrão, mas pode-se definir a imutabilidade dela também, mas da forma padrão pode-se mudar o valor normalmente,
// Contanto que continue tendo o mesmo tipo definido
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Sobrenome'];
// Tipo com interrogação sempre é opcional
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
// Nesse caso, estamos o mais próximo de um array possível, só que nesse array, o primeiro indice precisa ser um número
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Luiz',
  'Sobrenome',
  'Algo',
];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Erick';
// Se realizarmos o pop, o TS não percebe que estamos ultrapssando a tipagem da tupla, então isso é permitido,
// Para previnir isso, podemos deixar a tupla como readonly, e então, fica impossível de realizar esse tipo de ação
// dadosCliente1.pop();
// O TS não permite isso porque a tupla definiu seu tamanho e sua tipagem, então não podemos passar dos limites
// Que definimos na tipagem, porém, podemos adicionar ou remover valores com o pop e push, mas isso pode ser previnido também
/* dadosCliente1[2] = 'Valor'; */
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Voltando ao assunto de arrays, podemos fazer arrays readonly de duas formas:
const array1: readonly string[] = ['Erick', 'Malta'];
const array2: ReadonlyArray<string> = ['Erick', 'Malta'];

console.log(array1, array2);
