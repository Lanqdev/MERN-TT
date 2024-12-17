import React, { useState, useContext, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import './Navbar.css'
import { ShopContext } from '../Context/ShopContext';
import nav_dropdown_icon from '../Assets/Frontend_Assets/nav_dropdown.png'

export const Navbar = () => {

    const [menu, setMenu] = useState('tab1');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPTEST</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown_icon} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={() => {setMenu('tab1')}}><Link style={{textDecoration:"none"}} to='/'>Tab1</Link>{menu==="tab1"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu('tab2')}}><Link style={{textDecoration:"none"}} to='tab2'>Tab2</Link>{menu==="tab2"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu('tab3')}}><Link style={{textDecoration:"none"}} to='tab3'>Tab3</Link>{menu==="tab3"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu('tab4')}}><Link style={{textDecoration:"none"}} to='tab4'>Tab4</Link>{menu==="tab4"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar;
