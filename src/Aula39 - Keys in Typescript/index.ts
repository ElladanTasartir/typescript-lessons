type Veiculo = {
  marca: string;
  ano: number;
};
// Esses tipos se espelham
type Car = {
  // Dessa forma pegamos a tipagem vinda do Veiculo, na chave designada
  // Então, se mudarmos o tipo da chave marca, em Veiculo, por exemplo
  // A chave também mudará para a nossa brand em Car
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2020,
  name: 'Nome',
};

console.log(carro);
