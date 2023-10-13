import React from 'react'
import "./HeroSection.css"
import Hero from "../../assets/Hero.webp"
import videoBG from "../../assets/VBG.mp4"


const HeroSection = () => {
    return (
        
        <div className='hero-section container-fluid  bg-danger align-items-end '>
            {/* <video src={videoBG} autoPlay loop muted />  */}
            <div className="container"> 
            <div className='row '> 
            <div className='text-dark col-12 '>
                <div className="caption p-3 "> 
                <h3>The leading B2B ecommerce platform for global trade</h3>
                <div class="line-dec"></div>
                <p>Explore products and suppliers for your business from millions of offerings <strong> worldwide</strong> Ensure production quality from verified suppliers, with your orders protected from payment to delivery.
                    <a rel="nofollow" href="https://www.pexels.com"> GTI website</a>.</p>
                    <div className=" text-light btn">
                    ORDER NOW
                    </div>
                    </div>
              
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default HeroSection