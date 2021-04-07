import React from 'react'
import vid from '../videos/video-1.mp4'
//import Button from './Button'
import './HeroSection.css'
const HeroSection = () => {
    return (
        <div className="hero-container">
            <video autoPlay loop muted >
                <source src={vid} type="video/mp4" />
            </video>

            {/* <video src="../videos/video-1.mp4" type="video/mp4" autoPlay loop muted/> */}
            <h1>Do You O'Cha?</h1>
            
            {/* <div className="hero-btns">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Come In
                </Button>

                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Come In
                </Button>
            </div> */}
        </div>
    )
}

export default HeroSection
