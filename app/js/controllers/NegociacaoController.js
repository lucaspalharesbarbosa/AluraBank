System.register(["../views/index.js", "../models/index.js", "../helpers/decorators/index.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_js_1, index_js_2, index_js_3, NegociacaoController, DiaSemana;
    return {
        setters: [
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (index_js_2_1) {
                index_js_2 = index_js_2_1;
            },
            function (index_js_3_1) {
                index_js_3 = index_js_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_js_2.Negociacoes();
                    this._negociacoesView = new index_js_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_js_1.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    let data = this.obterData(this._inputData.val());
                    if (this.ehFimDeSemana(data)) {
                        this._mensagemView.update('Somentes negociações em dias úteis são permitidas.');
                        return;
                    }
                    var negociacao = new index_js_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                obterData(data) {
                    return new Date(data.replace(/-/g, ','));
                }
                ehFimDeSemana(data) {
                    return data.getDay() == DiaSemana.Sabado || data.getDay() == DiaSemana.Domingo;
                }
                importarDados() {
                    function isOk(resposta) {
                        if (resposta.ok) {
                            return resposta;
                        }
                        else {
                            throw new Error(resposta.statusText);
                        }
                    }
                    fetch('http://localhost:8080/dados')
                        .then(resposta => isOk(resposta))
                        .then(resposta => resposta.json())
                        .then((dados) => {
                        dados
                            .map(dado => new index_js_2.Negociacao(new Date(), dado.vezes, dado.montante))
                            .forEach(negociacao => this._negociacoes.adicionar(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch(erro => console.log(erro.message));
                }
            };
            __decorate([
                index_js_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_js_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_js_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaSemana) {
                DiaSemana[DiaSemana["Domingo"] = 0] = "Domingo";
                DiaSemana[DiaSemana["Segunda"] = 1] = "Segunda";
                DiaSemana[DiaSemana["Terca"] = 2] = "Terca";
                DiaSemana[DiaSemana["Quarta"] = 3] = "Quarta";
                DiaSemana[DiaSemana["Quinta"] = 4] = "Quinta";
                DiaSemana[DiaSemana["Sexta"] = 5] = "Sexta";
                DiaSemana[DiaSemana["Sabado"] = 6] = "Sabado";
            })(DiaSemana || (DiaSemana = {}));
        }
    };
});
