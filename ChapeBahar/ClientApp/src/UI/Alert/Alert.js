import React, { useState } from 'react';
import Wrapper from '../../Shared/Wrapper';
import style from './Alert.module.scss';

const Alert = ({ show, message, type }) => {
    const [hide, handleHide] = useState(true);
    return (
        <Wrapper>
            {<div className={`alert alert-${type} ` + style.reactAlert}
                onClick={() => handleHide(false)}
                style={(show && hide)
                    ? { left: '10px' }
                    : { left: '-50%' }}>
                {message}
            </div>}
        </Wrapper>
    )
}

export default Alert;