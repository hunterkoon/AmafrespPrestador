
import { HandleCharacters } from './HandleCharacters';

import React from 'react'

export const FormLogin = (loginData) => {

  const [mask , setMask] = React.useState(0)

  const handleMaskonBlur = (event) =>{    
    setMask(HandleCharacters(loginData))
  }
  const handleMaskonFocus = (event) =>{    
    setMask('')
  }

   const loginCommon = [
    {
      key: '0',
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
      key: '1',
      id: 'p.login',
      type: 'text',
      require: '',
      label: 'Usuário',
      
    },
    {
      key: '2',
      id: 'p.senha',
      type: 'password',
      require: '',
      label: 'Senha',
      maxLength: '18',
    },
  ];
  
   const loginAdm = [
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
      key: '4',
      id: 'p.senha',
      type: 'password',
      require: '',
      label: 'Senha',
      maxLength: '18',
    },
  ]

  return{
    loginAdm : loginAdm,
    loginCommon : loginCommon,
  }
}


