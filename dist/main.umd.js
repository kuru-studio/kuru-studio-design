(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.main = global.main || {}, global.main.umd = factory(global.React)));
})(this, (function (React) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var React__namespace = /*#__PURE__*/_interopNamespace(React);

    function ExampleComponent() {
        var greeting = 'Hello Function Component!';
        return React__namespace.createElement('h1', null, [greeting]);
    }

    // ANCHOR: Import Modules
    // ANCHOR: Export Modules
    var main = {
        ExampleComponent: ExampleComponent
    };

    return main;

}));
