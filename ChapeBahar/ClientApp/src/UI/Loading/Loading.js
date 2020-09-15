import React from 'react';
import './Loading.css'

const Loading = ({ show }) => {
    return (
        show ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : null
    )
}

export default Loading;