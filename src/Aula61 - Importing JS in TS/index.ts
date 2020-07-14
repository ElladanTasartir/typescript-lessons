// Para permitir a importação de arquivos js, é necessário
// Deixar a configuração do tsconfig como allowJs: true
import { soma } from './modulo';

const result = soma(10, 20) as number; // Para informar que o retorno dessa importação do js
// Será uma soma
console.log(result);
