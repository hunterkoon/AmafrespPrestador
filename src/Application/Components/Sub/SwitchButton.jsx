import React from 'react'
import { GlobalContext } from '../../Pages/Main/GlobalContext'
import cx from 'classnames'
import './SwitchButton.css'



const SwitchButton = ({ rounded = false, ...props }) => {

    const { option, setOption } = React.useContext(GlobalContext)

    const sliderCX = cx('span-slider', {
        'rounded': rounded
    })

    return (
        <div style={{
            width: '80%',
        }}> 
            <h3 style={{

                margin: '0',
                marginTop:'2%',
                textAlign: 'start',
                display: 'block',
                color:'#474747',
                fontSize:'1rem',
                fontWeight:'lighter',
                

            }}>Escolha uma categoria!</h3>
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
        </div>

    )
}

export default SwitchButton

