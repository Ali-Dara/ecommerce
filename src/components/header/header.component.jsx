import React from 'react';
import './header.style.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assest/logo.svg'

const Header = () =>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="contact">Contact</Link>
                <Link className="option" to="/signIn">SignIn</Link>
            </div>
        </div>
    )
}
export default Header;