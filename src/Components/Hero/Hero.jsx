import React from 'react'
import "./Hero.css"
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="padding innerWidth flexCenter hero-container">
                {/* Left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <motion.h2 initial={{ y: '2rem', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: 'spring' }}>Welcome to a <br/></motion.h2>
                        <motion.h1 initial={{ y: '2rem', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: 'spring' }}>World of Muscle Wellness</motion.h1>
                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText '>The Ultimate Destination for Muscle Care</span>
                    </div>
                    <div className="but">
                    <button className="button explore">
                            <a href="#contact-us" onClick={() => scrollToSection('contact-us')}>Explore</a>
                    </button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={500} end={770} duration={4} />
                                <span> M+</span>
                            </span>
                            <span className='secondaryText'>Impacted by <br/>COVID worldwide</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={500} end={619} duration={4} />
                                <span> M+</span>
                            </span>
                            <span className='secondaryText'>Impacted by Low <br/>Back Pain worldwide</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={87} />
                                <span> M+</span>
                            </span>
                            <span className='secondaryText'>Impacted by Low <br/>Back Pain in India</span>
                        </div>

                    </div>
                </div>
                {/* Right side */}
                <div className="flexCenter hero-right">
                    <motion.div className="image-container" >
                    <img src='./main.png'></img>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero