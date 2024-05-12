import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* Left side */}
                <div className="flexColStart f-left">
                    <img src="./logo.png" alt="" width={150} height={100} />
                    <span className="secondaryText">HealBuddy envisions a world where pain is met with support, understanding, and effective solutions for all.</span>
                </div>
                <div className="flexColStart f-right">
                    <span className='primaryText'>Location</span>
                    <span className='secondaryText'>Mumbai, Maharashtra, India.</span>

                    <div className="flexCenter f-menu">
                        <span>Our Approach</span>
                        <span>Exercises</span>
                        <span>Learning centre</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer