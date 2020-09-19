import React from 'react';


const AppLayout = props =>{
    return(
        <div className="d-flex align-items-center bg-auth border-primary app">
            {props.children}
        </div>
    )
}

export default AppLayout;