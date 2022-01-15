"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, anoDeFabricacao, quantidadeDePortas, marca) {
        this.quantidadeDePortas = 2 | 4;
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca;
    }
    ;
    addToJson(json) {
        let veiculosCadastrados = JSON.parse(json)['veiculosCadastrados'];
        veiculosCadastrados.push({
            'modelo': this.modelo,
            'ano': this.anoDeFabricacao,
            'portas': this.quantidadeDePortas,
            'marca': this.marca,
        });
        return JSON.stringify(veiculosCadastrados);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=carro.js.map