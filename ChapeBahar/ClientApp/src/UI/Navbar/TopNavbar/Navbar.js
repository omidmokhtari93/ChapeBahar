import React, { useState } from 'react'
import { withRouter } from 'react-router';
import Links from '../Links/Links';
import SideNavbar from '../SideNavbar/SideNavbar';
import './Navbar.scss';

const Navbar = props => {
    let [showSide, handleShowSidenav] = useState(false)
    return (
        <React.Fragment>
            <SideNavbar show={showSide} close={handleShowSidenav} />
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" onClick={() => handleShowSidenav(true)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav top-navbar">
                        <Links />
                    </ul>
                    <div className="pl-2 enter">
                        <a onClick={() => props.history.replace('/login')}>ورود</a>/
                        <a onClick={() => props.history.replace('/register')}>ثبت نام</a>
                    </div>
                    <span className="enter-icon fe fe-user"
                        onClick={() => props.history.replace('/login')}></span>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default withRouter(Navbar);