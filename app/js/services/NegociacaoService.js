System.register(["../models/index.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_js_1, NegociacaoService;
    return {
        setters: [
            function (index_js_1_1) {
                index_js_1 = index_js_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                obterNegociacoes(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(resposta => handler(resposta))
                        .then(resposta => resposta.json())
                        .then((dados) => dados
                        .map(dado => new index_js_1.Negociacao(new Date(), dado.vezes, dado.montante)));
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
