import React from 'react'
import './Navbar.css'

import menu_icon_img from '../assests/menu_icon.png'
import login_icon from '../assests/login_icon.jpg'
import cart_icon from '../assests/cart_icon.png'
import search_icon from '../assests/search_icon.png'







const Navbar = () => {
  return (
    <div>
        <div className='navall'>
        <div className='navbar'>
        <div className='navbar_brandname'>

            {/* <img src={menu_icon_img} alt="" /> */}
            <p className='navbar_name'>Ashney.Co</p>
          
        </div>
        <div className='navbar_search'>
           
                <select name="" id="">
                    <option value="">All Categories</option>
                </select>
             <div className='navbar_inputsearch'>

             <input type="text" placeholder='What are you looking for?' />
             <img src={search_icon} alt="" />

             </div>
            
            <div></div>
        </div>
        <div className='navbar_cartlogin'>
            <div>
                <img src={login_icon} alt="" />
                <p>LOGIN</p>
                   
            </div>
            <img src={cart_icon} alt="" />
        </div>
        </div>
        <div className='nav_options'>
            <div><select name="" id="">
                    <option value="" ><p>SHOP BY COLLECTIONS</p></option>
                </select></div>
            <div>GIFTING COMBOS</div>
            <div>UNDER RS.299 SALE</div>
        </div>
        <br />
    </div>
    </div>
  )
}

export default Navbar