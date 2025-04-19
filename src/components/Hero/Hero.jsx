import React from 'react'
import './Hero.css'
import hero_img from '../../assets/images/hero_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1><span>Hello, I'm Abdul Halim,</span> <br /> A Web Developer.</h1>
            <p>I'm a Full-Stack Web Developer. I create beautiful and user-friendly websites for all of my clients.</p>
            <div className='hero-action'>
                <AnchorLink href='#contact' className='hero-contact'><button className='hero-connect'>Get In Touch</button></AnchorLink>
                <button className='hero-resume'>My Resume</button>
            </div>
        </div>
        <div className='hero-img'>
            <div className='image-container'>
                <img className='profile' src={hero_img} alt='' />
                
            </div>
        </div>
       
        

    </div>
  )
}

export default Hero