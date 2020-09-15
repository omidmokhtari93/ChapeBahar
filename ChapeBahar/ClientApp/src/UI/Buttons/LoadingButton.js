import React from 'react';
import Loading from '../Loading/Loading';

function LoadingButton({ isLoading, children, ...props }) {
    return (
        <button className="button" {...props}>
            {isLoading
                ? <div><Loading /></div>
                : children}
        </button>
    );
}

export default LoadingButton;