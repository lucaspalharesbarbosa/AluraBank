import { logarTempoExecucao } from '../helpers/decorators/index.js'
import { Imprimivel } from './Imprimivel.js';
import { Negociacao } from './Negociacao.js';

export class Negociacoes extends Imprimivel {
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
}