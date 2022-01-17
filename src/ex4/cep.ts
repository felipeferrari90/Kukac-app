import axios, { AxiosResponse } from 'axios'
export async function getCep(cep:string): Promise<string | void>{
    let stringResponse = ""
    await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(
       (response:AxiosResponse) => {
        stringResponse = `
         O CEP ${cep} encontra-se na ${response.data['logradouro']}, \n
         Bairro: ${response.data['bairro']}, \nCidade:${response.data['localidade']}/${response.data['uf']} 
         
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