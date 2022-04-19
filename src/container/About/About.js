import React from 'react'
import './About.css'
import aboutImg from '../../assets/Rectangle 83.png'
import howItWorks from '../../assets/how it works.png'

const About = () => {
  return (
    <>
    <div className='about'>
        <div >
            <img className='img-cont' src={aboutImg} alt="" />
        </div>
        <div className='about__content'>
            <h2>About Ideasmarketplace</h2>
            <p>
                Ideasmarketplace is an online marketplace that connects buyers and sellers of ideas and intellectual property (IP) together. The marketplace will display ideas from different industries and categories including patents, copyrights, utility models, television commercials, print ads, new application ideas for mobile devices, product improvement ideas, reality television ideas, business strategy ideas and much more
            </p>
        </div>
        
    </div>
        <img src={howItWorks} alt="" className='howItWorks' />
    </>
  )
}

export default About