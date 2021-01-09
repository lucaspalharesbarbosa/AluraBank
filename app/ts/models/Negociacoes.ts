import { Negociacao } from './Negociacao.js';

export class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    toArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}