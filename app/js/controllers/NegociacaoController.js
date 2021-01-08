System.register(["../views/NegociacoesView.js", "../views/MensagemView.js", "../models/Negociacoes.js", "../models/Negociacao.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_js_1, MensagemView_js_1, Negociacoes_js_1, Negociacao_js_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesView_js_1_1) {
                NegociacoesView_js_1 = NegociacoesView_js_1_1;
            },
            function (MensagemView_js_1_1) {
                MensagemView_js_1 = MensagemView_js_1_1;
            },
            function (Negociacoes_js_1_1) {
                Negociacoes_js_1 = Negociacoes_js_1_1;
            },
            function (Negociacao_js_1_1) {
                Negociacao_js_1 = Negociacao_js_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_js_1.Negociacoes();
                    this._negociacoesView = new NegociacoesView_js_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new MensagemView_js_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    const negociacao = new Negociacao_js_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
