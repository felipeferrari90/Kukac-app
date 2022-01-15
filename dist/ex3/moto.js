"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
class Moto {
    constructor(modelo, anoDeFabricacao, quantidadeDePortas, marca) {
        this.quantidadeDePortas = 0;
        this.passageiros = 1 | 2;
        this.rodas = 2;
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao;
        this.quantidadeDePortas = quantidadeDePortas;
        this.marca = marca;
        this.passageiros;
        this.rodas;
    }
    ;
    addToJson(json) {
        let veiculosCadastrados = JSON.parse(json)['veiculosCadastrados'];
        veiculosCadastrados.push({
            'modelo': this.modelo,
            'ano': this.anoDeFabricacao,
            'portas': this.quantidadeDePortas,
            'marca': this.marca,
            'passageiros': this.passageiros,
            'rodas': this.rodas
        });
        return JSON.stringify(veiculosCadastrados);
    }
}
exports.Moto = Moto;
//# sourceMappingURL=moto.js.map