import React from 'react'
import { GlobalContext } from '../GlobalContext'
import cx from 'classnames'
import './SwitchButton.css'



const SwitchButton = ({ rounded = false, props }) => {

    const { option, setOption } = React.useContext(GlobalContext)

    const sliderCX = cx('span-slider', {
        'rounded': rounded
    })

    return (
        <>
            <h1 style={{

                margin: '0',
                marginTop:'2%',
                textAlign: 'center',
                display: 'block',
                color:'#474747',

            }}>Escolha uma categoria!</h1>
            <div className='div-switch-main'>
                <label className='label-switch'>
                    <input onChange={() => setOption(!option)} checked={option} type="checkbox" />
                    <span className={sliderCX} />
                    <div className='spans'>
                        <span className={!option ? 'spanMoveIt' : 'spanWithoutMove'}>Administrador</span>
                        <span className={option ? 'spanMoveIt' : 'spanWithoutMove'}>Usuário</span>
                    </div>
                </label>
            </div>
        </>

    )
}

export default SwitchButton
