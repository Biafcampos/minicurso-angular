var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
//abaixo
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
//ambos os 2 codigos tem a msm funcao, chama se Arrow function =>
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
;
var n1 = 'choco';
n1 = 4;
