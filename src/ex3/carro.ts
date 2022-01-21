import { Veiculo } from "./veiculo";

export class Carro implements Veiculo{

    modelo: string;
    anoDeFabricacao: number;
    quantidadeDePortas:number = 2 | 4;
    marca: string;


    constructor(
        modelo :string,
        anoDeFabricacao: number,
        quantidadeDePortas:number,
        marca: string,
    ){
        this.modelo = modelo;
        this.anoDeFabricacao = anoDeFabricacao ;
        this.quantidadeDePortas = quantidadeDePortas ;
        this.marca = marca;
    };
    
    public addToJson():any{
        let map =  new Map<string, any>();
        map.set("modelo",this.modelo)
        map.set("anoDeFabricacao",this.anoDeFabricacao)
        map.set("quantidadeDePorta",this.quantidadeDePortas)
        map.set("marca",this.marca)
        let jsonObject = {};

        map.forEach((value, key) => {  
            jsonObject[key] = value  
        });  
        return jsonObject;
    }
    
}