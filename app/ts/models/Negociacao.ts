import { MeuObjeto } from './MeuObjeto.js';

export class Negociacao implements MeuObjeto<Negociacao> {
    constructor(readonly data: Date,
        readonly quantidade: number,
        readonly valor: number) { }

    get volume() {
        return this.quantidade * this.valor;
    }

    logConsole(): void {
        console.log('Impressão');
        console.log(
            `Data: ${this.data},
             Quantidade: ${this.quantidade},
             Valor: ${this.valor},
             Volume: ${this.volume}`
        );
    }

    ehIgual(negociacao: Negociacao): boolean {
        debugger;
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}