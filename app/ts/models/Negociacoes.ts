import { logarTempoExecucao } from '../helpers/decorators/index.js'
import { MeuObjeto } from './MeuObjeto.js';
import { Negociacao } from './Negociacao.js';

export class Negociacoes implements MeuObjeto<Negociacoes> {
    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    @logarTempoExecucao()
    toArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    logConsole(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.toArray());
    }
}