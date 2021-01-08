import { View } from './View';
export class NegociacoesView extends View {
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
}
