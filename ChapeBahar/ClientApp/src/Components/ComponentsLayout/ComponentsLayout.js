import React from 'react';
import { isMobile } from 'react-device-detect';

const ComponentsLayout = props => {
    return (
        <div className="container">
            <div className={"row justify-content-center " + (isMobile ? 'pt-2' : 'pt-5')}>
                {props.children}
            </div>
        </div>
    )
}

export default ComponentsLayout;