// O tipo de relação mais forte entre objetos, quando um objeto precisa de outro para funcionar
// Quando o objeto dentro de outro é parte integral deste
// Exemplo: Carro e motor, quando você liga o motor, você liga o carro, quando você acelera, você acelera o motor
// Quando desliga o motor, você desliga o carro
// Na relação de composição, uma classe não consegue existir sem a outra
// A classe que é dependência é instanciada de dentro da outra classe

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado');
  }

  acelerar(): void {
    console.log('Motor está acelerando');
  }

  parar(): void {
    console.log('Motor está parado');
  }

  desligar(): void {
    console.log('Motor está desligado');
  }
}
// Na relação de composição, quando um objeto não existe, o outro objeto deixa de existir também
const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
