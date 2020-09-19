import React from 'react'
import { withRouter } from 'react-router';
import logo from '../../Assets/img/logo.png'
import './Navbar.scss';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item navbar-logo">
                        <img className="navbar-brand-img" src={logo} />
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">خانه <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">محصولات</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">درباره ی ما</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">تماس با ما</a>
                    </li>
                </ul>
                <div className="pl-2 enter">
                    <a onClick={()=> props.history.replace('/login')}>ورود</a>
                     / 
                     <a onClick={()=> props.history.replace('/register')}>ثبت نام</a>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);