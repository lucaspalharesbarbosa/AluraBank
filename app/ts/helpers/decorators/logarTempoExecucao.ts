export function logarTempoExecucao(exibirEmSegundos: boolean = false) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
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
        }

        return descriptor;
    }
}