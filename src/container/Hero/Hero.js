import React, {useState} from 'react'
import './Hero.css'
import logo from '../../assets/logo.png'
import air from '../../assets/air.png'
import rocket from '../../assets/rocket.png'
import planet from '../../assets/planet.png'
import {BiMenuAltRight} from 'react-icons/bi'
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='bg-one'>
        <div className='menu-btn' onClick={() => setIsOpen(!isOpen)}><BiMenuAltRight/></div>
        <img src={air} alt="" className='air'/>
        <img src={rocket} alt="" className='rocket'/>
        <img src={planet} alt="" className='planet'/>
       <div className='bg-two'></div>
       <div className='bg-three'></div>
       <div className='bg-four'></div>
       <div className='nav'>
            <div><img src={logo} alt="" /></div>
            <div className={`nav-links ${isOpen ? 'isOpen' : 'isClosed'}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">How it works</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
            </div>
       </div>
       <div className='hero-content'>
           <h1>A whole world of ideas at you fingertips</h1>
           <p>We make it easy to work with professionals, creative experts from around the world and build your brand through custom, memorable design

           </p>
           <button>Get Started</button>
       </div>
    </div>
  )
}

export default Hero