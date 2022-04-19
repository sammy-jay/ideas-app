import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
            <p>Get Started</p>
            <h2>Get in Touch with Us</h2>
                <textarea cols="60" rows="10" placeholder='Your message'></textarea>
            <div className='contact-two'>
                <input type="text"  placeholder='Your email'/>
                <button>Send</button>
            </div>
    </div>
  )
}

export default Contact