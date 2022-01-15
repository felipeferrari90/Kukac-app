import { Carro } from ".";
import { Veiculo } from "./veiculo";

export class Moto implements Veiculo{
    modelo: string;
    anoDeFabricacao: number;
    quantidadeDePortas:number = 0;
    marca: string;
    passageiros:number = 1 | 2;
    rodas:number = 2


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
        this.passageiros;
        this.rodas
    };

    public addToJson(json:string):string{
       let veiculosCadastrados = JSON.parse(json)['veiculosCadastrados'];
       veiculosCadastrados.push(
         {
              'modelo': this.modelo,
              'ano' : this.anoDeFabricacao,
              'portas' : this.quantidadeDePortas,
              'marca' : this.marca,
              'passageiros' : this.passageiros,
              'rodas' : this.rodas
         }
       );
       return JSON.stringify(veiculosCadastrados)
    }
}