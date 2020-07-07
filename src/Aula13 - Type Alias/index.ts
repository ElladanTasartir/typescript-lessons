// Com TS é possível criar tipagens nossas e apelidá-las como quisermos através de um type alias
// Por convenção, tipos criados por nós são começados com letras maiúsculas
// Para criar um tipo, é só utilizar a palavra chave type, o nome do tipo e atribuição do tipo
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade; // Note que aqui usamos um type alias já declarado antes
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Red' | 'Green' | 'Blue';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
// Agora sim o nome Union type faz mais sentido, podemos unir esses tipos
// Gerando um tipo que possui todos esses tipos definidos anteriormente
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 20,
  nome: 'Erick',
  salario: 200_000, // TS entende isso como 200.000 sem problemas
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Blue'));

export default 1;
