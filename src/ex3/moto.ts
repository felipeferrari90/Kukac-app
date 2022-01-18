import { Carro } from ".";
import { Veiculo } from "./veiculo";

export class Moto implements Veiculo{
    modelo: string;
    anoDeFabricacao: number;
    quantidadeDePortas:number = 0;
    marca: string;
    passageiros:number;
    rodas:number = 2


    constructor(
        modelo :string,
        anoDeFabricacao: number,
        quantidadeDePortas:number,
        marca: string,
        passageiros: number,
    ){
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao ;
        this.quantidadeDePortas = quantidadeDePortas ;
        this.marca = marca;
        this.passageiros = passageiros;
        this.rodas
    };

    public addToJson():any{
        let map =  new Map<string, any>();
        map.set("modelo",this.modelo)
        map.set("anoDeFabricacao",this.anoDeFabricacao)
        map.set("quantidadeDePorta",this.quantidadeDePortas)
        map.set("marca",this.marca)
        map.set("passageiros",this.passageiros)
        map.set("rodas",this.rodas)
        let jsonObject = {};

        map.forEach((value, key) => {  
            jsonObject[key] = value  
        });  
        return jsonObject;
    }
}