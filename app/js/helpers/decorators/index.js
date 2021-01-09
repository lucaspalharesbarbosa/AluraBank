System.register(["./logarTempoExecucao.js", "./domInject.js", "./throttle.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (logarTempoExecucao_js_1_1) {
                exportStar_1(logarTempoExecucao_js_1_1);
            },
            function (domInject_js_1_1) {
                exportStar_1(domInject_js_1_1);
            },
            function (throttle_js_1_1) {
                exportStar_1(throttle_js_1_1);
            }
        ],
        execute: function () {
        }
    };
});
