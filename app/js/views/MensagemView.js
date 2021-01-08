import { View } from './View';
export class MensagemView extends View {
    template(mensagem) {
        return `
            <p class="alert-info">${mensagem}</p>
        `;
    }
}
