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
    addToJson() {
        let map = new Map();
        map.set("modelo", this.modelo);
        map.set("anoDeFabricacao", this.anoDeFabricacao);
        map.set("quantidadeDePorta", this.quantidadeDePortas);
        map.set("marca", this.marca);
        let jsonObject = {};
        map.forEach((value, key) => {
            jsonObject[key] = value;
        });
        return jsonObject;
    }
}
exports.Carro = Carro;
//# sourceMappingURL=carro.js.map