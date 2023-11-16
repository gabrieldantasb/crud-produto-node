class Produto {
  //campos private
  #codigo;
  #descricao;
  #preco;
  #qtde
  constructor() {

    this.#codigo = 0;
    this.#descricao = "";
    this.#preco = 0;
    this.#qtde = 0;
  }
  set codigo(codigo) {
    this.#codigo = codigo;
  }
  get codigo() {
    return this.#codigo;
  }
  set descricao(descricao) {
    this.#descricao = descricao;
  }
  get descricao() {
    return this.#descricao;
  }
  set preco(preco) {
    this.#preco = preco;
  }
  get preco() {
    return this.#preco;
  }
  set qtde(qtde) {
    this.#qtde = qtde;
  }
  get qtde() {
    return this.#qtde;
  }
}
module.exports = Produto;