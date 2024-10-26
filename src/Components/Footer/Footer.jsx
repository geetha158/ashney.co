import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_details'> 
    
            <div className='footer_inside_details'>
                <h3>FOLLOW US</h3>
                <p>
                    icons 4
                </p>
            </div>
            <div className='footer_inside_details'>
                <h3>MAIN MENU</h3>
                <div>
                    <p>HOME PAGE</p>
                    <p>SEARCH</p>
                    <p>NEW ARRIVALS</p>
                </div>
            </div>
            <div className='footer_inside_details'>
                <h3>COLLECTIONS</h3>
                <p>EARRINGS</p>
                <p>BRACELETS</p>
                <p>CHAINS</p>
                <p>BAGS</p>
                <p>RINGS</p>
                <p>BANGLES</p>
                <p>NECKLACES</p>
            </div>
            <div className='footer_inside_details'>
                <h3>POLICY</h3>
                <p>SHIPPING AND EXCHANGE</p>
                <p>CANCELLATION AND REFUND</p>
                <p>PRIVACY POLICY</p>
                <p>TERMS AND CONDITIONS</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
            </div>
            <div className='footer_inside_details'>
                <h3>SUBSCRIBE</h3>
                <p>Invite customers to join your mailing list.</p>
                <div className='footer_subscribe'>
                    <input type="email" placeholder='enter your mail id here' />
                    <button>SIGN UP</button>
                </div>
            </div>
        </div>
        <div className='footer_copyright'>
            <p>Search Terms of Service Refund policy</p>
            <p>Copyright © 2024 Ashney.Co</p>
            <p>Powered by GS.WORKS</p>
        </div>
    </div>
  )
}

export default Footer