// Em momentos em que o TS não consegue inferir tipos aos nossos dados, ele vai colocar o tipo any
// O que pode ser útil em alguns momentos, mas não é desejável, já que isso traz falta de segurança
// Para dentro do código
// O problema com o any, é que perdemos a capacidade do typescript de avisar sobre possíveis atribuições
// Indesejadas a variáveis any, ou características de dentro dessas variáveis, já que elas podem representar
// Qualquer tipo de dado
// O problema real é quando o type any vem de forma implicita, se você explicitar e mostrar que é intencional,
// O TS nem aponta erro, mas caso o contrário, ele
// Um exemplo de algo representado com any é:
/* function showMessage(msg) {
  return msg;
} */
// Explicitando o any, ficamos com:
/* function showMessage(msg: any) {
  return msg;
} */
// Dessa forma, é recomendado utilizar o any, apenas em último caso
function showMessage(msg: string) {
  return msg;
}

console.log(showMessage('Mensagem'));
