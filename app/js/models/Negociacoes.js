System.register(["../helpers/decorators/index.js", "./Imprimivel.js"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_js_1, Imprimivel_js_1, Negociacoes;
    return {
        setters: [
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            },
            function (Imprimivel_js_1_1) {
                Imprimivel_js_1 = Imprimivel_js_1_1;
            }
        ],
        execute: function () {
            Negociacoes = class Negociacoes extends Imprimivel_js_1.Imprimivel {
                constructor() {
                    super(...arguments);
                    this._negociacoes = [];
                }
                adicionar(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                toArray() {
                    return [].concat(this._negociacoes);
                }
                logConsole() {
                    console.log('Impressão');
                    console.log(JSON.stringify(this._negociacoes));
                }
            };
            __decorate([
                index_js_1.logarTempoExecucao()
            ], Negociacoes.prototype, "toArray", null);
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
