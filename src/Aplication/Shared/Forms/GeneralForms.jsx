import React from 'react'
import { CPF_CNPJ, EMAIL, EMAIL_CONFIRM, PASSWORD, PASSWORD_CONFIRM, USER } from './GeneralFields';
import { HandleCharacters } from '../Commons/Helpers/HandleCharacters';



const GeneralForms = (loginData) => {

    const [mask, setMask] = React.useState(0)

    const handleMaskonBlur = (event) => {
        setMask(HandleCharacters(loginData))
    }

    const handleMaskonFocus = (event) => {
        setMask('')
    }




    const firstAcessForm = [
        CPF_CNPJ(handleMaskonBlur, handleMaskonFocus, mask),
        EMAIL(),
        EMAIL_CONFIRM(),
        PASSWORD(),
        PASSWORD_CONFIRM(),
    ];

    const loginCommon = [
        CPF_CNPJ(handleMaskonBlur, handleMaskonFocus, mask),
        USER(),
        PASSWORD(),
    ];

    const loginAdm = [
        CPF_CNPJ(handleMaskonBlur, handleMaskonFocus, mask),
        PASSWORD(),
    ];

    const recoverFiedsAdm = [

        CPF_CNPJ(handleMaskonBlur, handleMaskonFocus, mask),
        EMAIL(),

    ];
    const recoverFiedsCommon = [
        CPF_CNPJ(handleMaskonBlur, handleMaskonFocus, mask),
        USER(),
    ];





    return {

        firstAcessForm: firstAcessForm,
        loginCommon: loginCommon,
        loginAdm: loginAdm,
        recoverFiedsAdm : recoverFiedsAdm,
        recoverFiedsCommon: recoverFiedsCommon


    }
}

export default GeneralForms






