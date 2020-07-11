// Associação de classes é a relação mais fraca entre objetos
// Acontece quando temos um objeto, por exemplo, de uma outra classe
// Dentro da nossa classe, o que significa que esses objetos se ligam e precisam um do outro
// Em algum momento, mas não 100% do tempo
export class Escritor {
  // Porque a ferramenta pode ou nao existir quando o objeto é instanciado
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina de Escrever');
console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);
escritor.escrever();
// Associar as classes da seguinte forma:
// Aqui pegamos a caneta e settamos ela como a ferramenta do escritor
escritor.ferramenta = caneta;
// Já aqui, pegamos e executamos o método escrever, que pega o método da caneta
// Para executar isto
escritor.escrever();
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
escritor.ferramenta = null;
escritor.escrever();
