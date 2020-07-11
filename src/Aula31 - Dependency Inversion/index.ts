// Inversão de dependências é quando fazemos uma classe depender de um contrato, uma abstração
// Ao invés de depender diretamente das classes que vamos receber como dependências
// Isso torna as nossas implementaçãoes mais seguras, pois contratos normalmente não se altetam
// Com o passar do desenvolvimento, enquanto classes mudam constantemente, o que torna
// O desenvolvimento de aplicações muito mais seguro
// Então, é necessário abstrair o necessário depender de uma abstração de uma classe
// Ao invés de depender diretamente de classes concretas, o que resultariam na necessidade
// De se mudar o código da classe que depende, pois uma mudança nas dependências
// Causaria uma alteração na maneira que a classe dependente trabalha
export class Escritor {
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
escritor.ferramenta = caneta;
maquinaEscrever.escrever();
