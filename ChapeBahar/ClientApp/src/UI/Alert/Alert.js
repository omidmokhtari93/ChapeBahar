import React, { useState } from 'react';
import Wrapper from '../../Shared/Wrapper';
import style from './Alert.module.scss';

const Alert = ({ show, message, type, timeout }) => {
    const [hide, handleHide] = useState(true);
    show && setTimeout(() => {
        handleHide(false)
    }, timeout ? timeout : 3000);
    return (
        <Wrapper>
            {<div className={`alert alert-${type} ` + style.reactAlert}
                onClick={() => handleHide(false)}
                style={(show && hide)
                    ? { left: '10px' }
                    : { left: '-100%' }}>
                {message}
            </div>}
        </Wrapper>
    )
}

export default Alert;