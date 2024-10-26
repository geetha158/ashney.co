import React from 'react'
import './Slideshow.css'
import slide1 from '../assests/slideshowimgs/slideshow_1.jpg'
import slide2 from '../assests/slideshowimgs/slideshow_2.jpg'
import slide3 from '../assests/slideshowimgs/slideshow_3.jpg'
import slide4 from '../assests/slideshowimgs/slideshow_4.jpg'
import slide5 from '../assests/slideshowimgs/slideshow_5.jpg'

import data from '../assests/slideshowfolder/data'

const Slideshow = () => {

    console.log(data)
    
  return (
    
    <>

        <div className='thankyou'>
          <h2>Each piece of jewelry is a timeless treasure</h2>
        </div>

        <div className='slideshow'>
              <div className='slideimg'>

                   {data.map((data)=>{
                  return <><img src={data.image} alt="" /></>
                    })}
              </div>
         </div>
    
    </>

   
  )
}

export default Slideshow