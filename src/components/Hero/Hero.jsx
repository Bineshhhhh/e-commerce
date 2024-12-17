import React from 'react'
import './Hero.css'
/*import hand_icon from '../assets/hand_icon.png'*/
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import back_image from '../assets/Hero_bg.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hand-hand-icon'>
            <p>New</p>
        </div>
        <p>Collections</p>
        <p>for everyone</p>
      </div>
        <div className='hero-latest-btn'>
         <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
        </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
