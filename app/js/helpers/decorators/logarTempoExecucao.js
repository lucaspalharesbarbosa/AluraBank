System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoExecucao(exibirEmSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divisor = 1;
                if (exibirEmSegundos) {
                    unidade = 's';
                    divisor = 1000;
                }
                console.log('--------------------');
                console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const tempoInicial = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const tempoFinal = performance.now();
                console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
                console.log(`O método ${propertyKey} demorou ${(tempoFinal - tempoInicial) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoExecucao", logarTempoExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
