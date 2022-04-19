import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-one'>
            <div><img src={logo} alt="" /></div>
            <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
            </div>
        </div>
        <div className='hrule'/>
        <div className='footer-two'>
            <div className='footer-two-first'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">How it works</a>
                <a href="#">FAQ</a>
                <a href="#">Contact</a>
            </div>
            <div>
                <p>© 2022 Ideasmarketplace. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer