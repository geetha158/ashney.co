import React from 'react'
import './Shopbycollection.css'
import shopbycollection from '../assests/slideshowfolder/shopbycollection'

const Shopbycollection = () => {
  return (
    <>
    
    <div className='shopbycollection'>
        <div className='heading'>
        <h4>SHOP BY COLLECTION</h4>
        </div>
        


        <div className='shopbycollection_data'>
            {shopbycollection.map((data)=>{
                return <>
                <div>
                    <img src={data.image} alt="" srcset="" />

                    <div className='collection_name'><p>{data.name}</p></div>
                    
                </div>
                </>
            })}
        </div>

    </div>

    <div className='shopbycollection_viewall'>
        <button>VIEW ALL</button>
    </div>

    </>
  )
}

export default Shopbycollection