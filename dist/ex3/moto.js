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
    addToJson() {
        let map = new Map();
        map.set("modelo", this.modelo);
        map.set("anoDeFabricacao", this.anoDeFabricacao);
        map.set("quantidadeDePorta", this.quantidadeDePortas);
        map.set("marca", this.marca);
        map.set("passageiros", this.passageiros);
        map.set("rodas", this.rodas);
        let jsonObject = {};
        map.forEach((value, key) => {
            jsonObject[key] = value;
        });
        return jsonObject;
    }
}
exports.Moto = Moto;
//# sourceMappingURL=moto.js.map