import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'
console.log("Image:", exclusive_image);
const Offers = () => {
    return (
        <div className='Offers'>
            <div className="Offers-left">
               <h1>Exclusive</h1> 
               <h1>Offers For You</h1>
               <p>Only On Best Sellers Products</p>
               <button>Check Now</button>
            </div>
            <div className="Offers-right">
                <img src= {exclusive_image} alt="Offer" />
            </div>

        </div>
    )
}

export default Offers