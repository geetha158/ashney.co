import React, { useContext } from 'react'
import './Clearance.css'
import {ShopContext} from '../ShopContext/ShopContext'


const Clearance = () => {
    const all_product=useContext(ShopContext).all_products;


    //console.log(all_product)

    function togglehide(e){
        console.log(e.target.className)

        let img1=document.getElementsByClassName('product_image1').classList
        let img2=document.getElementsByClassName('product_image1').classList

        // img1.togglehide('hide')
    }
  return (
    <div>
        <div className='clearance'>
            <div className='clearance_heading'><h4>Clearance Sale under Rs. 299</h4></div>
        </div>

      

        <div>
            <div className='all_products_details'>

                {all_product.slice(0,10).map((all_product)=>{

                    // if(all_product.new_price<200){
                        return <>
                       

                        <div className='product'>
                             <img src={all_product.image} alt="" className='product_image1'/>
                             {/* <img src={all_product.image2} alt="" className='product_image2 hide'  /> */}
                             <p className='product_name'>{all_product.name}</p>
                             <p className='product_old_price'>Rs.{all_product.old_price}</p>
                             <p className='product_new_price'>Rs.{all_product.new_price}</p>
                             <div className='product_button'><button>ADD TO CART</button></div>
                             
                         </div>
                       
                        
                         
                     </>
                    // }

                       

                    

                    
                })}

            </div>
        </div>
    </div>
  )
}

export default Clearance