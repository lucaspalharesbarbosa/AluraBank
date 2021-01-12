import { NegociacoesView, MensagemView } from '../views/index.js';
import { Negociacoes, Negociacao, NegociacaoApi } from '../models/index.js';
import { domInject, throttle } from '../helpers/decorators/index.js';
import { NegociacaoService, HandlerFunction } from '../services/NegociacaoService.js'
import { EscreverNoConsole } from '../helpers/index.js'

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _service = new NegociacaoService();
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle(500)
    adicionar() {
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

        EscreverNoConsole(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private obterData(data: string): Date {
        return new Date(data.replace(/-/g, ','));
    }

    private ehFimDeSemana(data: Date): boolean {
        return data.getDay() == DiaSemana.Sabado || data.getDay() == DiaSemana.Domingo;
    }

    @throttle(500)
    importarDados() {
        this._service
            .obterNegociacoes((resposta) => {
                if (resposta.ok) {
                    return resposta;
                } else {
                    throw new Error(resposta.statusText)
                }
            })
            .then(negociacoes => {
                negociacoes
                    .forEach((negociacao: Negociacao) => this._negociacoes.adicionar(negociacao))

                this._negociacoesView.update(this._negociacoes);
            });
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