import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

// HEADER
const Header = () => {
    return (
        <div className="header-comp">
            <div>LOGO</div>
            <div className="header-right">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link>Login</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;