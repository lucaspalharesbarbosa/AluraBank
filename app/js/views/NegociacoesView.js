System.register(["./View.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_js_1, NegociacoesView;
    return {
        setters: [
            function (View_js_1_1) {
                View_js_1 = View_js_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_js_1.View {
                template(negociacoesModel) {
                    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>

                <tbody>
                    ${negociacoesModel.toArray().map(negociacao => `
                            <tr>
                                <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                                <td></td>
                            </tr>
                        `).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
