// Padrão de proejto singleton: Quando há a necessidade de apenas uma instância
// De uma classe em um projeto, criar uma classe que, se já houver uma instância, ela retorna essa instância
// E se não houver, ela crie uma
export class Database {
  // Estático, mas só pode ser acessado de dentro da classe
  private static database: Database;

  // Quando se cria um construtor privado, não se tem acesso ao new
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;

    // Por ser privado, podemos apenas criar objetos de dentro da classe
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
//Os dados da instância não são aplicados no db2 pois já existe uma instância
const db2 = Database.getDatabase('outro endereço', 'root', '123456');
db2.connect();
// Agora, tanto db1 quanto db2 são iguais
console.log(db1 === db2);
