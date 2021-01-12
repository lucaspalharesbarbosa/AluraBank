System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function EscreverNoConsole(...objetos) {
        objetos.forEach(objeto => objeto.logConsole());
    }
    exports_1("EscreverNoConsole", EscreverNoConsole);
    return {
        setters: [],
        execute: function () {
        }
    };
});
