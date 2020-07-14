/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module.ts" />
// Sempre é o ideal usar o sistema de módulos do JS
// O reference path é uma triple slash directive que recebe uma tag xml
// Essa tag, referencia uma dependência do nosso módulo
// Porém, isso não vai funcionar se estivermos usando no tsconfig commonJS ou ESM
// Somente, AMD (biblioteca externa) ou System
// E, também é necessário configurar para o TS compilar um outfile, porque
// Para isso funcionar, tudo precisaria estar no mesmo arquivvo Js na compilação
// Podemos também falar no comando de compilação que queremos apenas um arquivo de compilação
// npx tsc diretorio/nomeDoArquivo.ts --outFile diretorio/nomeDoArquivo.js
// Dessa forma, compilamos para o JS e conseguimos executar o bundle gerado

console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
