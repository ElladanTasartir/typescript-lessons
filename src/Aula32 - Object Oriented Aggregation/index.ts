// Agregação, o módulo de nível mais alto, no caso a classe que possui dependências
// Ele não funciona direito sem a existência de suas dependências, pois é uma ligação muito forte
// E parte do que torna esse módulo possível de existir são as suas dependências
// Exemplo: Carrinho de compras: ele pode existir sem produtos, mas ele somente funciona adequadamente
// Quando possui produtos, possuindo métodos e atributos que dependem da existência dos produtos, como quantidade
// inserirProduto, etc
// Outro exemplo: Carro e rodas, ambos existem por si só, mas o carro não consegue fazer sua função principal
// (andar), sem possuir uma agregação de rodas
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public _nome: string, public preco: number) {}
}

const produto1 = new Produto('Camisa', 39.9);
const produto2 = new Produto('Caneca', 15.9);
const produto3 = new Produto('Caneta', 0.9);
const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
