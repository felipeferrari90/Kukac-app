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
    
    public addToJson(json:string):string{
        let veiculosCadastrados = JSON.parse(json)['veiculosCadastrados'];
        veiculosCadastrados.push(
          {
               'modelo': this.modelo,
               'ano' : this.anoDeFabricacao,
               'portas' : this.quantidadeDePortas,
               'marca' : this.marca,
          }
        );
        return JSON.stringify(veiculosCadastrados)
     }
    
}