// As constraints de genéricos são as restrições que o TS nos avisa quando
// Criamos um generic muito abrangente, o que pode ser uma dor de cabeça na hora de realizar
// A inferência de tipos, ou até mesmo a tipagem por si só
// Para realizar uma restrição, utilizamos a palavra extends
// Nesse caso, o K precisa ser uma chave de O, caso o contrário,
// O tipo não será aceito, tendo em vista que o K poderia ser qualquer valor se isso acontecesse
type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina1', 'Vacina2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
console.log(vacinas, cor, obterChave(animal, 'idade'));
