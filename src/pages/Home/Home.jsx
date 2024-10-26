import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slideshow from '../../Components/Slideshow/Slideshow'
import Premium from '../../Components/Premium/premium'
import Shopbycollection from '../../Components/Shopbycollection/Shopbycollection'
import { Promotions } from '../../Components/Promotions/Promotions'
import Clearance from '../../Components/Clearance/Clearance'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slideshow />
        <Premium />
        <Clearance />
        <Shopbycollection />
        <Promotions />
    </div>
  )
}

export default Home