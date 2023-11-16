const { Client } = require('pg');

class Banco {
  static conexao;
  static init() {
    try {
      this.conexao = new Client({
        host: '127.0.0.1',
        port: 5432,
        database: 'TOCC8',
        user: 'postgres',
        password: 'postgres',
      });
      this.conexao.connect();
    }
    catch (erro) {
      console.log("Erro de conexao : " + erro);
    }
  }
}
module.exports = Banco;