import React from 'react';
import logo from '../../../Assets/img/logo.png'
import './Links.scss'

const Links = props => {
    return (
        <React.Fragment>
            <li className="nav-item navbar-logo">
                <img className="navbar-brand-img" src={logo} />
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    <span className="fe fe-home"></span>
                خانه
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <span className="fe fe-layers"></span>
                    محصولات
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <span className="fe fe-hash"></span>
                    درباره ی ما
                    </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <span className="fe fe-phone"></span>
                    تماس با ما
                </a>
            </li>
        </React.Fragment>
    )
}

export default Links;