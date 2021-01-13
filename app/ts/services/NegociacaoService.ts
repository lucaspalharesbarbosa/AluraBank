import { Negociacao, NegociacaoApi } from '../models/index.js';

export class NegociacaoService {
    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[] | void> {
        return fetch('http://localhost:8080/dados')
            .then(resposta => handler(resposta))
            .then(resposta => resposta.json())
            .then((dados: NegociacaoApi[]) =>
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            ).catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível importar as negociações.');
            });
    }
}

export interface HandlerFunction {
    (resposta: Response): Response;
}