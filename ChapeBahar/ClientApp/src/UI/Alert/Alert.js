import React, { useState } from 'react';

const Alert = ({ show, message, type }) => {
    const [hide, handleHide] = useState(false);

    return (
        <React.Fragment>
            {show && <div className={`alert alert-${type} alert-dismissible fade show`}>
                {message}
                <span className="">×</span>
            </div>}
        </React.Fragment>
    )
}

export default Alert;