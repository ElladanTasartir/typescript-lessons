export class Pilha<T> {
  private contador = 0;
  // Essa assinatura diz que denrto desse objeto, a chave vai ser um number
  // E o valor vai ser do tipo T
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}
// Criando dessa forma, o TS não reclama, mas a pilha fica com o tipo unknown, o que pode gerar problemas
const pilha = new Pilha<number | string>();
pilha.push(1);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.push(6);
pilha.push(7);
pilha.push(8);
pilha.push('a');
while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}
