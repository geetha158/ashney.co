import React from 'react'
import Slideshow from '../../Components/Slideshow/Slideshow'
import Premium from '../../Components/Premium/premium'
import Shopbycollection from '../../Components/Shopbycollection/Shopbycollection'
import { Promotions } from '../../Components/Promotions/Promotions'
import Clearance from '../../Components/Clearance/Clearance'
import Navsec from '../../Components/Navsec/Navsec'

const Home = () => {
  return (
    <div>
        <Navsec />
        <Slideshow />
        <Premium />
        <Clearance />
        <Shopbycollection />
        <Promotions />
    </div>
  )
}

export default Home