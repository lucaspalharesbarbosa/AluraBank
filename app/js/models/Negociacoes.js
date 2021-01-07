class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    toArray() {
        return [].concat(this._negociacoes);
    }
}
