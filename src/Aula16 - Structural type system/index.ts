// O Typescript usa um sistema de tipos que é chamado de structural typing
// Isso significa que para o TS, a identidade do tipo, não importa muito, mas somente as restrições
// Que são daquele tipo
type VerifyUserFn = (user: User, sentValues: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = {
  username: 'João',
  password: '123456',
};
// Sem explicitar o tipo, o TS não sabe que esse objeto é do tipo user
const sentUser = {
  username: 'João',
  password: '123456',
  permisisions: '',
};
// Mas por que ele não dá erro aqui? Porque o typescript percebe que as restrições de tipagem criadas dentro
// De bdUser e sentUser, são as mesmas definidas no tipo User, portanto esses tipos são iguais
// Para o TS porque os dois recebem as mesmas chaves e os mesmos tipos de valores
// Mesmo que, por identidade, (já que o TS por si só não sabe o tipo desses objetos), esses tipos não sejam iguais
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
