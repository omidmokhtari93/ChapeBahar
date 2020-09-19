import React from 'react';
import './Backdrop.scss';
import propTypes from 'prop-types';

const Backdrop = props => {
    return (
        <div className="backdrop"
            onClick={() => props.dismiss(false)}
            style={props.show
                ? { display: 'block' }
                : { display: 'none' }}
        ></div>
    )
}

Backdrop.propTypes = {
    show: propTypes.bool,
    dismiss: propTypes.func
}

export default Backdrop;