import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import { BsBag,BsCart2 } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import useOnline from "../hooks/useOnline";
import { useSelector } from "react-redux";

// HEADER
const Header = () => {

    const onlineStatus = useOnline();

    const cart = useSelector(store => store?.cart?.cartItems)

    return (
        <div className="header-comp">
            <div className="header-logo">
                <img src="https://w7.pngwing.com/pngs/47/533/png-transparent-swiggy-office-business-online-food-ordering-delivery-bangalore-business-food-text-orange.png"/>
            </div>
            <div className="header-right">
                <ul>
                    <li><Link to='/'><GoHome className='icon'/>Home</Link></li>
                    <li><Link to='/about'><BsBag className='icon'/>Swiggy Corporate</Link></li>
                    <li><Link to='/offers'><RiDiscountPercentLine className='icon'/>Offers</Link></li>
                    <li><Link to='/contact'><IoHelpBuoyOutline className='icon'/>Help</Link></li>
                    <li><Link><IoPersonOutline className='icon'/>Sign in</Link></li>
                    <li><Link to='/cart'><BsCart2 className='icon'/>Cart <span className="cart-count">{cart?.length}</span></Link></li>
                    {/* {onlineStatus? <li>Online ✅</li> : <li>Offline 🔴</li>} */}
                </ul>
            </div>
        </div>
    )
}
export default Header;