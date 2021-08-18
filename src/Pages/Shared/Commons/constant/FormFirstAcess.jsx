import React from 'react'
import { HandleCharacters } from './HandleCharacters';


export const FormFirstAcess = (loginData) => {

  const [mask , setMask] = React.useState(0)

  const handleMaskonBlur = (event) =>{    
    setMask(HandleCharacters(loginData))
  }
  const handleMaskonFocus = (event) =>{    
    setMask('')
  }


  const firstAcessForm = [
    {
      id: 'usuarios',
      type: 'text',
      label: 'Usuário',
      require: '',
    },
    {
      id: 'email',
      type: 'email',
      label: 'E-mail',
      require: '',
    },
    {
      id: 'CONFIRMEemail',
      type: 'email',
      label: 'Confirme seu E-mail',
      require: '',
    },
    {
      key: '3',
      id: 'CNPJCPF',
      type: 'text',
      require: '',
      label: 'CNPJ / CPF',
      maxLength: '18',
      mask: mask,
      changeBlur: handleMaskonBlur,
      changeFocus: handleMaskonFocus,
    },
    {
      id: 'senha',
      type: 'password',
      label: 'Senha',
      require: '',
      maxLength: '18',
    },
    {
      id: 'CONFIRMEsenha',
      type: 'password',
      label: 'Confirme sua Senha',
      require: '',
      maxLength: '18',
    },
  ];

  return{
    firstAcessForm : firstAcessForm,
  }
}







