import { NegociacoesView, MensagemView } from '../views/index.js';
import { Negociacoes, Negociacao } from '../models/index.js';
import { domInject } from '../helpers/decorators/index.js';

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adicionar(event: Event) {
        event.preventDefault(); // serve para não recarregar a tela ao dar submit

        let data = this.obterData(this._inputData.val());

        if (this.ehFimDeSemana(data)) {
            this._mensagemView.update('Somentes negociações em dias úteis são permitidas.');
            return;
        }

        var negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adicionar(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private obterData(data: string): Date {
        return new Date(data.replace(/-/g, ','));
    }

    private ehFimDeSemana(data: Date): boolean {
        return data.getDay() == DiaSemana.Sabado || data.getDay() == DiaSemana.Domingo;
    }
}

enum DiaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}