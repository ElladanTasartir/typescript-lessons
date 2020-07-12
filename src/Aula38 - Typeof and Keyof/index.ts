// Ao utilizarmos o typeof de algum objeto, variável, etc
// O typescript sabe que a assinatura do objeto deve ser igual à assinatura do
// Objeto recebido como parâmetro nesse caso, ou seja, o objeto enviado precisa ter
// As chaves do objeto coresObj
type CoresObj = typeof coresObj;
// Com o keyof, podemos pegar todas chaves do tipo, no caso CoresObj
// O que significa que, se alguma cor for enviada que não existe no tipo CoresObj
// O typescript irá avisar
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('azul', coresObj));
console.log(traduzirCor('roxo', coresObj));
