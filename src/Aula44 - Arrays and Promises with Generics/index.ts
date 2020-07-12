// Arrays utilizam Generics, apesar de poder declará-los sem
const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumeros);

type MeuTipo = number;

async function promiseAsync() {
  return 1;
}

// Apesar desse retorno ser uma promise, por Promises receberem generics, ela infere que
// O resultado será um number e conseguimos utilizar esse número resultante em uma conta
// Pois o TS sabe que só pode retornar um number daquela função, porém, isso só ocorre
// Porque o TS conseguiu inferir o tipo, e existem situações onde isso não vai acontecer
promiseAsync().then((result) => console.log(result + 1));

// Nesse caso por exemplo, o TS não consegue saber o que vai retornar porque ele não irá executar
// O setTimeout para ver qual a possibilidade desse resolve/reject ser, então devemos informar
// O tipo manualmente
function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

// Pelo MeuTipo ser um number, o TS consegue inferir que o resultado será um number, já
// Que colocamos o tipo da função nós mesmos
minhaPromise().then((result) => console.log(result + 1));
