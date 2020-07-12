function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  // Existem duas formas de fazer isso, com spread operator
  // ou com Object.assign()
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { chave1: 'valor1' };
const obj2 = { chave2: 'valor2' };

const uniao = unirObjetos(obj1, obj2);
console.log(uniao);
