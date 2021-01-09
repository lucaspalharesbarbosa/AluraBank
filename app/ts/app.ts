import { NegociacaoController } from './controllers/NegociacaoController.js';

const controller = new NegociacaoController();

$('.form').submit(controller.adicionar.bind(controller));
$('#btnImportar').click(controller.importarDados.bind(controller));
