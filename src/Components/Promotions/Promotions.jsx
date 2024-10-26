import React from 'react'
import './Promotions.css'
import myntra from '../assests/slideshowimgs/myntra.png'
import minis from '../assests/slideshowimgs/minis.png'
import amazon from '../assests/slideshowimgs/amazon.png'
import nykaa from '../assests/slideshowimgs/nykaa.png'
import ajio from '../assests/slideshowimgs/ajio.png'


export const Promotions = () => {
  return (
    <div>
        <div className='marketpalce'>
            <div><h1>Available on top Market Places</h1></div>
            <div className='marketplace_images'>
                <img src={nykaa} alt="" />
                <img src={myntra} alt="" />
                <img src={ajio} alt="" />
                <img src={amazon} alt="" />
                <img src={minis} alt="" />
            </div>
            
        </div>
        
 

    </div>
  )
}
