import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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
            <p className='navbar_name'><Link to={'/'} style={{color:'brown',textDecoration:'none'}}>Ashney.Co</Link></p>
          
        </div>
        <div className='navbar_search'>
           
                <select name="" id="">
                    <option value="">All Categories</option>
                    <option value="">RINGS</option>
                    <option value="">NECK PIECES</option>
                    <option value="">HAND BAGS</option>
                    <option value="">EARRINGS</option>
                    <option value="">BRACELETS</option>
                    <option value="">HAIR ACCESSORIES</option>
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
                
                <Link to={'/login'}><p>LOGIN</p></Link>
                   
            </div>
           <Link to={'/cart'}> <img src={cart_icon} alt="" /></Link>
        </div>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar