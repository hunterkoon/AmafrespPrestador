
export const ApiCep = (loginData) =>{
   return `https://app.afresp.org.br/AFRApi/associado/BuscaEnderecoPorCep?cep=${loginData}`;
} 