"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pegarExtrato = void 0;
function pegarExtrato(valorCompra, valorDinheiro) {
    let valorTroco = (valorDinheiro - valorCompra) | 0;
    const notas100 = (valorTroco / 100) | 0;
    valorTroco = valorTroco % 100;
    const notas10 = (valorTroco / 10) | 0;
    valorTroco = valorTroco % 10;
    const notas1 = valorTroco;
    return JSON.stringify({
        "valorCompra": valorCompra,
        "valorDinheiro": valorDinheiro,
        "valorTroco": valorDinheiro - valorCompra,
        "notas100": notas100,
        "notas10": notas10,
        "notas1": notas1,
        "numeroDeNotas": notas100 + notas10 + notas1,
    });
}
exports.pegarExtrato = pegarExtrato;
//# sourceMappingURL=caixa.js.map