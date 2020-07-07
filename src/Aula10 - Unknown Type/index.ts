// Unknown é o pai de todos os outros tipos
// Funciona como um any, mas mais seguro
// Porque, enquanto o any te permite atribuir qualquer valor à variável e utilizar qualquer método de qualquer tipo
// O unknown te avisa que essa variável é unknown, então não se pode fazer nenhuma modificação utilizando seus dados
// Sem verificar a tipagem dele, portanto você é forçado a validar os dados, antes de usar a variável dessa forma
let x: unknown;
x = 20;
x = 'palavra';
x = 40;

if (typeof x === 'number') console.log(x + 400);
