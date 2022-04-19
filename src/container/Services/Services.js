import React from 'react'
import './Services.css'
import image from '../../assets/Rectangle 85.png'
const Services = () => {
  return (
    <div className='services'>
        <div className='services-one'>
            <h2>World-class ideas marketpace. At your service.</h2>
            <p>
                Ideasmarketplace is the go-to idea service. We make it easy to work with professional, creative experts from around the world and build your brand through custom, memorable design.

            </p>
        </div>
        <div>
            <img src={image} alt=""/>
        </div>
    </div>
  )
}

export default Services