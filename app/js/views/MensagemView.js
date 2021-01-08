class MensagemView extends View {
    template(mensagem) {
        return `
            <p class="alert-info">${mensagem}</p>
        `;
    }
}
