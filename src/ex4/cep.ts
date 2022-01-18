import axios, { AxiosResponse } from 'axios'
export async function getCep(cep:string, index:number): Promise<string | void>{
    let stringResponse = ""
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(
       (response:AxiosResponse) => {
        stringResponse = ` 
         o cep numero ${index}: ${cep} encontra-se na ${response.data['logradouro']},
         Bairro: ${response.data['bairro']}, Cidade:${response.data['localidade']}/${response.data['uf']} 
         
         `
       }
    ).catch(
      (error) => {
        stringResponse = `ocorreu um erro ao processar esse cep \n
                          erro: ${error}`
      } 
    )
    return stringResponse;
}