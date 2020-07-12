export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  multi(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  // O this da subcalculadora é ela própria
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
// O único jeito de podermos encadear chamadas para funções do nosso objeto é se ele
// Nos retornar ele mesmo, pois assim conseguimos pegar como retorno o próprio objeto e realizar uma nova chamada
calculadora.add(5).multi(2).div(2).sub(5).pow(2);
console.log(calculadora);

// Padrão de projeto Builder da Gang of Four (GoF)
// Nele, settamos as partes dos objetos aos poucos, ao invés de tudo de uma vez
export class RequestBuilder {
  private method: 'GET' | 'POST' | null = null;
  private url: string | null = null;

  setMethod(method: 'GET' | 'POST'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
// Tudo feito numa linha só porque retornamos o this, então dessa forma, não precisamos ir chamando uma função
// Por vez em diferentes partes do código para fazer determinada função, mas sim já ir fazendo tudo de uma vez
request.setUrl('http://www.google.com').setMethod('POST').send();
