import React from "react";
import ReactDOM from "react-dom/client";

// HEADER
const Header = () => {
    return (
        <div className="header-comp">
            <div>LOGO</div>
            <div className="header-right">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;