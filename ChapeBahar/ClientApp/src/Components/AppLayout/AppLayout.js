import React from 'react';


const Layout = props =>{
    return(
        <div className="d-flex align-items-center bg-auth border-primary app">
            {props.children}
        </div>
    )
}

export default Layout;