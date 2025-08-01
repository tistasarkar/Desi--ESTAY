import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const [menu,setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p> Desi Crafts 
                    
                </p>

            </div>
            <ul className="nav-menu">
               <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("Accessories")}}><Link style={{ textDecoration: 'none'}} to='/Accessories'>Accessories</Link>{menu==="Accessories"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("Gifts")}}><Link style={{ textDecoration: 'none'}} to='/Gifts'>Gifts</Link>{menu==="Gifts"?<hr/>:<></>}</li>
               <li onClick={()=>{setMenu("Art")}}><Link style={{ textDecoration: 'none'}} to='/Art'>Art</Link>{menu==="Art"?<hr/>:<></>}</li> 
            </ul>
            <div className="nav-login-cart">
              <Link to='/login'><button>Login</button></Link> 
              <Link to='/cart'><img src={cart_icon} alt=""/></Link>
               <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default Navbar 







