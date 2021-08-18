import React from 'react'
import { HandleCharacters } from './HandleCharacters';


export const FormRecuperacao = (loginData) => {

  const [mask , setMask] = React.useState(0)

  const handleMaskonBlur = (event) =>{    
    setMask(HandleCharacters(loginData))
  }
  const handleMaskonFocus = (event) =>{    
    setMask('')
  }


  const recoverFiedsAdm = [
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
      // require: 'true',
    },
    {
      key: '2',
      id: "email",
      type: "email",
      label: "E-mail",
      // require: 'true',
    },
  ];
   const recoverFiedsCommon = [
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
      // require: 'true',
    },
    {
      key: '4',
      id: "p.login",
      type: "text",
      label: "Usuário",
      // require: 'true',
    },
  ];
  

  return{
    recoverFiedsAdm : recoverFiedsAdm,
    recoverFiedsCommon : recoverFiedsCommon,
  }
}



