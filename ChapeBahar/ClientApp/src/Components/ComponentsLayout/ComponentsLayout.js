import React from 'react';


const ComponentsLayout = props => {
    return (
        <div className="container">
            <div className="row justify-content-center pt-5">
                {props.children}
            </div>
        </div>
    )
}

export default ComponentsLayout;