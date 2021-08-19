function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const alet = getRandomInt(1, 99)


export const CPF_CNPJ = (handleMaskonBlur, handleMaskonFocus, mask) => {

    return {
        key: alet,
        id: 'CNPJCPF',
        type: 'text',
        require: '',
        label: 'CNPJ / CPF',
        maxLength: '14',
        mask: mask,
        changeBlur: handleMaskonBlur,
        changeFocus: handleMaskonFocus,
        // require: 'true',
    }

}

export const EMAIL = () => {

    return {
        key: alet,
        id: 'email',
        type: 'email',
        label: 'E-mail',
        require: 'true',
    }

}

export const EMAIL_CONFIRM = () => {

    return {
        key: alet,
        id: 'CONFIRMEemail',
        type: 'email',
        label: 'Confirme seu E-mail',
        require: true,

    }
}

export const PASSWORD = () => {

    return {
        key: alet,
        id: 'senha',
        type: 'password',
        label: 'Senha',
        require: '',
        maxLength: '18',
    }
}

export const PASSWORD_CONFIRM = () => {

    return {
        key: alet,
        id: 'CONFIRMEsenha',
        type: 'password',
        label: 'Confirme sua Senha',
        require: '',
        maxLength: '18',
    }
}

export const USER = () => {

    return {
        key: alet,
        id: 'p.login',
        type: 'text',
        require: '',
        label: 'Usuário',
    }
}

