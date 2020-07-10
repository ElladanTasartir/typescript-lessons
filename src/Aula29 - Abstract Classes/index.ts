// Quando uma classe é somente criada com a intenção de estender ela
// Portanto, ela é só um contrato para que outras classes herdem dela
// Classes abstratas não podem ser instanciadas diretamente
// Só pode ser instanciada por subclasses concretas (classes não abstratas)
export abstract class Personagem {
  // Necessário que todas as classes definam um emoji
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    // Podemos chamar as implementações dos atributos/métodos estáticos dentro da superclasse
    // Pegando os dados da subclasse, já que não foram sobrescritos dentro da subclasse
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
  }

  // Toda classe que herdar de Personagem vai precisar possuir esse método bordao, pois ele é
  // Um contrato, ou seja, é obrigatório ser implementada em todas as subclasses
  // Este método não pode ter corpo, pois o mesmo é só um contrato
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  // Caracter unicode
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'Morra, criatura suja e sem cultura');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(
      this.emoji +
        'Seus tempos de expansão de reinos acabaram, este é o território da minha tribo',
    );
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
