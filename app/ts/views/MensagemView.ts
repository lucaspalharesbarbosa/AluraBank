class MensagemView extends View<string> {
    template(mensagem: string): string {
        return `
            <p class="alert-info">${mensagem}</p>
        `;
    }
}