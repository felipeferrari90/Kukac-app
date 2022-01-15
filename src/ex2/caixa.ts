
export function pegarExtrato(valorCompra:number, valorDinheiro:number):string{
    
    let valorTroco:number = (valorDinheiro - valorCompra) | 0;
    const notas100:number = (valorTroco / 100) | 0
    valorTroco = valorTroco % 100
    const notas10:number = (valorTroco / 10) | 0
    valorTroco = valorTroco % 10
    const notas1:number = valorTroco

    return JSON.stringify(
        {
            "valorCompra" : valorCompra,
            "valorDinheiro" :  valorDinheiro,
            "valorTroco" : valorDinheiro - valorCompra,
            "notas100" : notas100,
            "notas10"  : notas10,
            "notas1" : notas1,
            "numeroDeNotas" : notas100 + notas10 + notas1,
        }
    )

}