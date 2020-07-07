// O intersection type pode ser lido como AND algumas vezes, assim como o Union pode ser lido como OR
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
// Dessa forma abaixo, o tipo pessoa precisa possuir algum dos 3 tipos, mas não necessariamente todos
// Implementando só 1 ou 2 já funciona
// type Pessoa = TemNome | TemSobrenome | TemIdade;
// Para unir tipos dessa forma, sem ter esse tipo de problema podemos usar o intersection type
// Dessa forma, se ele sempre precisa ter todos os tipos citados
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 30,
  sobrenome: 'Malta',
  nome: 'Luiz',
};

console.log(pessoa);

// Outra maneira de usar as intersections:
type AB = 'A' | 'B'; // Pode ter A ou B
type AC = 'A' | 'C'; // Pode ter A ou C
type AD = 'A' | 'D'; // Pode ter A ou D
type Intersection = AB & AC & AD; // Recebe a interseção entre esses tipos, no caso a interseção recebida
// é o valor A, ou seja, Intersection só pode receber A

export { pessoa };
