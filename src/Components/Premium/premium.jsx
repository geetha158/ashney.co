import React from 'react'
import './premium.css'
import premium from '../assests/slideshowfolder/premium'

const Premium = () => {

   
  return (
    <div className='premium'>
        <div className='premium_heading'>
            <h2>Premium Jewellery Dhamaka Sale</h2>
        </div>
        <div className='datapremium'>

            {premium.map((data)=>{
                return <>
                
                <div className='img_data'>
                    <img src={data.image} alt="" />
                    <p>{data.name}</p>
                </div>
                
                
                </>
            })}

        </div>
    </div>
  )
}

export default Premium