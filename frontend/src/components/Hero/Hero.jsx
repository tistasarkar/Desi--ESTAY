import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
             <div>
                <div>
                    <p>Discover Unique Handmade Treasures</p>
                    

                </div>
                <p>Supporting Local Artisans,</p>
                <p>One Product at a Time</p>
            </div>  
            <div className="hero-latest-btn">
                <div>  Latest Collections </div>
                <img src ={arrow_icon} alt="" />
            </div>
        </div>    
            <div className="hero-right">
                <img src={hero_image} alt="" /> 

            </div>

        </div>
    )
}

export default Hero