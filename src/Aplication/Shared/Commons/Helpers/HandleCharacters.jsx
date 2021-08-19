

export const HandleCharacters = (loginData) => {

    if (loginData.CNPJCPF ? loginData.CNPJCPF.length === '' : null) {
        return ''
    } 
    
    if (loginData.CNPJCPF ? loginData.CNPJCPF.length === 11 : null) {
        return '999.999.999-99'
    } 
    
    if (loginData.CNPJCPF ? loginData.CNPJCPF.length >= 14 : null) {
        return '99.999.999/9999-99'
    }
    else {
        return ''
    }
}


