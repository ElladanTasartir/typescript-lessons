// É como se fosse um type casting, ou seja, convertendo um tipo
// Por exemplo, querySelector retorna ou HTMLBodyElement ou null
const body1 = document.querySelector('body');
// Ele já informa que o elemento pode ser nulo
// Para evitar isso, podemos fazer uma condicional, como normalmente
if (body1) body1.style.background = 'red';
// Dessa forma garantimos a valdiação, mas não temos certeza de que vai retornar apenas um tipo
// Por isso não é asserção
// Assertion é quando temos certeza que um elemento, por exemplo, existe
// E queremos que o Typescript acredite na gente
// Utilizando essa exclamação na declaração, falamos que esse valor não pode ser nulo
// Então o TS aceita que o body2 É um HTMLBodyelement
// Isso é chamado de uma non-null assertion (!)
// Essa é uma das maneiras
const body2 = document.querySelector('body')!; // eslint-disable-line
body2.style.background = 'red';
// Type assertion:
// Desas forma, definimos que ele É um HTMLBodyElement
// Essa é a forma recomendada de se fazer, mesmo assim
// Devemos apenas fazer dessa forma quando temos total certeza
// De que esse é o único tipo possível recebido
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement -> O próprio HTMl
// HTMLBodyElement -> O body
// HTMLButtonElement -> Um button
// E assim vai...
// Já que o Typescript não sabe que classes o seu HTML possui
// Escrevendo dessa forma, podemos pegar essa classe input e falar para o TS
// Que o que retornar desse query selector É um input
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Para fazer esse tipo de asserção, precisamos utilizar os subtipos de dado tipo
// Já que certas asserções são impossíveis de realizar e o TS vai indicar
// Exemplo:
// O typescript fala que nenhum desses tipos interage um com o outro diretamente e por isso que
// Esse tipo de asserção é impossível, o que é correto
// const body4 = document.querySelector('body') as number;
// Se for necessário fazer isso em algum momento
// E necessário subir tipos, ou seja, ir para um tipo acima de number e HTMLBodyElement
// E depois descer novamente para um number
// Mas isso é extremamente perigosto para o código, então não é recomendado se fazer algo assim
const body4 = (document.querySelector('body') as unknown) as number;
body4 + 2;
