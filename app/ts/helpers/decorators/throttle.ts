export function throttle(milissegundos = 500) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]) {
            if(event) {
                event.preventDefault(); // serve para não recarregar a tela ao dar submit
            }

            clearInterval(timer);

            timer = setTimeout(() => {
                metodoOriginal.apply(this, args);
            }, milissegundos);
        }

        return descriptor;
    }
}