import React, { useEffect } from 'react';
import './SideNavbar.scss';
import Backdrop from '../Backdrop/Backdrop';
import Links from '../Links/Links';

const SideNavbar = props => {
    useEffect(() => {
        props.show ? document.body.classList.add('stop-scrolling') :
            document.body.classList.remove('stop-scrolling')
    })
    return (
        <React.Fragment>
            <Backdrop show={props.show} dismiss={props.close} />
            <div className="side-nav"
                style={props.show
                    ? { right: 0 }
                    : { right: '-70%' }}>
                <nav className="sans navbar navbar-light text-right " id="side-navbar">
                    <ul className="navbar-nav">
                        <Links />
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideNavbar;